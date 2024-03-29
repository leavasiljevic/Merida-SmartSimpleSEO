import express from 'express';
import bodyParser from "body-parser";
import { promises } from 'fs';
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const wordCount = require('html-word-count');
const paypal = require('paypal-rest-sdk');
require('url');


// Create a new express application instance
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("www"));

app.get("/users/:uname", (req, res) => {
    res.send("Hello " + req.params.uname);
});

app.get("/compare/", (req, res) => {

    var sOperation = req.query.operation;
    var sClientURL = req.query.clientURL;
    var oReturnResult = {};

    //sOperation = "COMPARE_GOOGLE";

    if (sOperation == "null" || sOperation == null || sOperation == undefined) {

        res.status(500).send({ error: 'Operation type is missing!' });
        return;

    } else if (sOperation == "COMPARE_COMP") {

        var sCompetitor1URL = req.query.competitor1URL;
        var sCompetitor2URL = req.query.competitor2URL;
        var sCompetitor3URL = req.query.competitor3URL;
        var aParseFunctions = [];
        var sKeyword = req.query.keyword || null;

        //Check for mandatory parameters in the Request Query String (Coming from UI)
        if (sClientURL == "null" || sClientURL == null || sClientURL == undefined) {
            res.status(500).send({ error: 'Client URL is invalid!' });
            return;
        }
        if (sCompetitor1URL == "null" || sCompetitor1URL == null || sCompetitor1URL == undefined) {
            res.status(500).send({ error: 'Competitor URL is invalid!' });
            return;
        }

        aParseFunctions.push(parseWebPage(sClientURL, sKeyword));
        aParseFunctions.push(parseWebPage(sCompetitor1URL, sKeyword));

        if (sCompetitor2URL !== "null" || sCompetitor2URL == null || sCompetitor2URL == undefined ) {
            aParseFunctions.push(parseWebPage(sCompetitor2URL, sKeyword));
        }

        if (sCompetitor3URL !== "null" || sCompetitor3URL == null || sCompetitor3URL == undefined ) {
            aParseFunctions.push(parseWebPage(sCompetitor3URL, sKeyword));
        }


        return Promise.all(aParseFunctions)
            .then(function (result) {
                oReturnResult.clientURLResult = result[0];
                oReturnResult.competitor1URLResult = result[1];
                if (result[2]) {
                    oReturnResult.competitor2URLResult = result[2];
                }
                if (result[3]) {
                    oReturnResult.competitor3URLResult = result[3];
                }


                oReturnResult.average = {};
                var aKeys = Object.keys(oReturnResult.clientURLResult);

                for (var i = 0; i < aKeys.length; i++) {
                    var iTotal = 0;

                    iTotal = iTotal + oReturnResult.competitor1URLResult[aKeys[i]];

                    if (oReturnResult.competitor2URLResult) {
                        iTotal = iTotal + oReturnResult.competitor2URLResult[aKeys[i]];
                    }

                    if (oReturnResult.competitor3URLResult) {
                        iTotal = iTotal + oReturnResult.competitor3URLResult[aKeys[i]];
                    }

                    oReturnResult.average[aKeys[i]] = Math.ceil(iTotal / (aParseFunctions.length - 1));
                }

                // console.log("JSON value before sending response " + JSON.stringify(oReturnResult));

                res.send(JSON.stringify(oReturnResult));


            })
            .catch(function (err) {
                res.send();
                console.log(err)
            });



    } else if (sOperation == "COMPARE_GOOGLE") {

        var sKeyword = req.query.keyword;
        var sLocation = req.query.location;
        var sSearch = sKeyword;

        if(sLocation !="null"){
            sSearch = sSearch + sLocation;
        }
        
        //Check for mandatory parameters in the Request Query String (Coming from UI)
        if (sClientURL == "null" || sClientURL == null || sClientURL == undefined) {
            res.status(500).send({ error: 'Client URL is invalid!' });
            return;
        }

        if (sSearch == "null" || sSearch == null || sSearch == undefined) {
            res.status(500).send({ error: 'Keyword is invalid!' });
            return;
        }

        getGoogleTopResults(sSearch)
            .then(function (aUrls) {
                var aUrlFunctions = [];
                aUrlFunctions[0] = parseWebPage(sClientURL)
                for (var i = 1; i <= aUrls.length; i++) {
                    if (aUrls[i] && aUrls[i] != undefined) {
                        aUrlFunctions[i] = parseWebPage(aUrls[i])
                    }
                }
                Promise.all(aUrlFunctions)
                    .then(function (result) {

                        console.log("Result from Promise.all is \n" + JSON.stringify(result));

                        var aResult = Object.keys(result);
                        // console.log("Result length from Promise is " + aResult.length);
                        oReturnResult.clientURLResult = result[0];

                        var aTagKeys = Object.keys(result[0]);//array of all the keys like h1, h2....
                        oReturnResult.total = {}; //the total of each key...totalH1
                        oReturnResult.average = {};

                        for (var k = 0; k < aTagKeys.length; k++) {
                            oReturnResult.total[aTagKeys[k]] = 0;//initiating all the JSON object elements as 0
                        }


                        for (var i = 1; i < aResult.length; i++) {

                            var oTagResult = result[i];//for the rest of the urls
                            // console.log("Tag Result " + i + " is " + result[i]);
                            for (var j = 0; j < aTagKeys.length; j++) {
                                oReturnResult.total[aTagKeys[j]] = oReturnResult.total[aTagKeys[j]] + oTagResult[aTagKeys[j]];
                            }

                        }

                        for (var k = 0; k < aTagKeys.length; k++) {
                            oReturnResult.average[aTagKeys[k]] = Math.ceil(oReturnResult.total[aTagKeys[k]] / (aResult.length - 1));
                        }


                        res.send(oReturnResult);
                    })
                    .catch(function (err) {
                        res.status(500).send({ error: 'Error occurred on the server' });
                        console.log(err)
                    });
            })
            .catch(function (err) {
                res.status(500).send({ error: 'Error occurred on the server' });
                console.log(err)
            });

    } else {
        res.status(500).send({ error: 'Operation type is invalid!' });
    }

});



function parseWebPage(sURL, sKeyword) {
    var jsonResult = {};
    return new Promise(function (resolve, reject) {

        fetch(sURL)
            .then(result => result.text())
            .then(html => {

                const $ = cheerio.load(html);
                var keywordCount = 0;
                var keywordTitleCount = 0;
                if (sKeyword != null) {
                    var re = new RegExp(sKeyword, "gi");//to find the count of the substring
                    keywordCount = ($("head").html().match(re) || []).length;
                    keywordTitleCount = ($("title").html().match(re) || []).length;

                }
                var iWordCount = wordCount(html);
                var h1TagCount = $("h1").length;
                var h2TagCount = $("h2").length;
                var h3TagCount = $("h3").length;
                var h4TagCount = $("h4").length;
                var h5TagCount = $("h5").length;
                var h6TagCount = $("h6").length;
                var imgTagCount = $("img").length;
                //var keywordCount = $("keyword").length;
                var linkTagCount = $("a").length;
                var boldTagCount = $("b").length;
                var italicTagCount = $("i").length;
               // var titleTag = $("title").length;


                jsonResult.title = $("title").html();
                jsonResult.wordCount = iWordCount;
                jsonResult.h1Tag = h1TagCount;
                jsonResult.h2Tag = h2TagCount;
                jsonResult.h3Tag = h3TagCount;
                jsonResult.h4Tag = h4TagCount;
                jsonResult.h5Tag = h5TagCount;
                jsonResult.h6Tag = h6TagCount;
                jsonResult.imgTag = imgTagCount;
                jsonResult.linkTag = linkTagCount;
                jsonResult.keyword = keywordCount;
                jsonResult.boldTag = boldTagCount;
                jsonResult.italicTag = italicTagCount;
                jsonResult.titleTag = keywordTitleCount;
                
                // console.log("Result on the server is" + JSON.stringify(jsonResult));
                resolve(jsonResult);
            })
            .catch(function (err) {
                console.log("Error occurred on the server:" + err);
                //reject(err);
            });


    });
}

function getGoogleTopResults(sSearch) {
    return new Promise(function (resolve, reject) {
        const sUrl = 'https://www.google.com/search?q=' + encodeURI(sSearch);
        // console.log(sUrl);
        fetch(sUrl)
            .then(res => res.text())
            .then(body => {
                var $ = cheerio.load(body);
                //console.log(body);
                const aAnchors = $("a");
                let aUrls = [];
                for (let n = 0; n < aAnchors.length; n++) {
                    const sHref = $(aAnchors[n]).attr("href");
                    if (sHref.match(/^\/url/)) {
                        const myUrl = new URL("https://www.google.com" + sHref);
                        aUrls.push(myUrl.searchParams.get("q"));
                    }
                }
                resolve(aUrls.slice(0, 10));

            })
            .catch(e => {
                reject(e.toString());
            });
    })
}


//PayPal 
paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AcClzCNDUg7W-BWI1zy5LPKd-WqxdrL4EDeGiduHKe268xPQZdfJ6vqgp12_VMcLSlkXDr3ocZg3bqyX',
    'client_secret': 'EP0fMOsjlNLSMXAwC32k6FB2YlbsIuCJn6lTScW-AA348_Oq-OVLcnXIV61dwGcffSiOdxw-brsquRbv'
});

app.post('/pay', (req, res) => {
    const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:3000/pages/dummypage.html",
            "cancel_url": "http://localhost:3000/pages/dummypage.html"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "SEO subscription",
                    "sku": "001",
                    "price": "9.99",
                    "currency": "CAD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "CAD",
                "total": "9.99"
            },
            "description": "Month Subscription for Smart Simple SEO"
        }]
    };

    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            for (let i = 0; i < payment.links.length; i++) {
                if (payment.links[i].rel === 'approval_url') {
                    res.redirect(payment.links[i].href);
                }
            }
        }
    });
});

app.get('/pages/dummypage.html', (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.PaymentId;
    

    const execute_payment_json = {
        "payer_id": payerId,
        "transactions": [{
            "amount": {
                "currency": "CAD",
                "total": "9.99"
            }
        }]
    };

    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
        if (error) {
            console.log(error.response);
            throw error;
        } else {
            res.send("Success");

        }
    });
});

app.get('/pages/dummypage.html', (req, res) => res.send('Cancelled'));


const logRequestStart = (req, res, next) => {
    console.info(`${req.method} ${req.originalUrl}`);
    next();
}
app.use(logRequestStart);

app.use(express.static('public'))

var port = process.env.PORT || parseInt(process.argv.pop()) || 3000;

app.listen(port, () => console.log('Example app listening on port ' + port + '!'));
