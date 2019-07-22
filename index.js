import express from 'express';
import bodyParser from "body-parser";
import { promises } from 'fs';
const fetch = require('node-fetch');
const cheerio = require('cheerio');
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
    var oReturnResult = {};

    if (sOperation === "COMPARE_COMP") {

        var sClientURL = req.query.clientURL;
        var sCompetitor1URL = req.query.competitor1URL;
        var sCompetitor2URL = req.query.competitor2URL;
        var sKeyword = req.query.keyword;


        return Promise.all(
            [parseWebPage(sClientURL, sKeyword),
            parseWebPage(sCompetitor1URL, sKeyword),
            parseWebPage(sCompetitor2URL, sKeyword)])
            .then( function (result) {
                oReturnResult.clientURLResult = result[0];
                oReturnResult.competitor1URLResult = result[1];
                oReturnResult.competitor2URLResult = result[2];
                oReturnResult.average = {};
                var aKeys = Object.keys(oReturnResult.clientURLResult);

                for (var i = 0; i < aKeys.length; i++) {
                    oReturnResult.average[aKeys[i]] = Math.ceil((oReturnResult.competitor1URLResult[aKeys[i]] + oReturnResult.competitor2URLResult[aKeys[i]]) / 2);
                }
                console.log("JSON value before sending response " + JSON.stringify(oReturnResult));
                res.send(oReturnResult);
            })
            .catch(function (err) {
                res.send();
                console.log(err)
            });
    }
    else if (sOperation === "COMPARE_GOOGLE") {

        var sClientURL = req.query.clientURL;
        var sSearch = req.query.keyword;

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

                        for(var k=0; k<aTagKeys.length; k++) {
                            oReturnResult.total[aTagKeys[k]] = 0;//initiating all the JSON object elements as 0
                        }


                        for (var i = 1; i < aResult.length; i++) {

                            var oTagResult = result[i];//for the rest of the urls
                            // console.log("Tag Result " + i + " is " + result[i]);
                            for(var j=0; j<aTagKeys.length; j++) {
                                oReturnResult.total[aTagKeys[j]] = oReturnResult.total[aTagKeys[j]] + oTagResult[aTagKeys[j]];
                            }
                            
                        }

                        for(var k=0; k<aTagKeys.length; k++) {
                            oReturnResult.average[aTagKeys[k]] = Math.ceil(oReturnResult.total[aTagKeys[k]] / (aResult.length -1));
                        }


                        res.send(oReturnResult);
                    })
                    .catch(function (err) {
                        res.send();
                        console.log(err)
                    });
            })
            .catch(function (err) {
                res.send();
                console.log(err)
            });
    }
    else {
        res.status(500).send({ error: 'Operation type is invalid!' })
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

                var h1TagCount = $("h1").length;
                var h2TagCount = $("h2").length;
                var h3TagCount = $("h3").length;
                var h4TagCount = $("h4").length;
                var h5TagCount = $("h5").length;
                var h6TagCount = $("h6").length;
                var ImgWithoutAltTagCount = 0;
                try {
                    ImgWithoutAltTagCount = $("img: not([alt])").length;
                }
                catch (e) {
                   console.log("Image without alt" + " "+ e.toString())
                }

                var linkTagCount = $("a").length;
                var boldTagCount = $("b").length;
                var italicTagCount = $("i").length;

                
                jsonResult.title = $("title").html();
                jsonResult.h1Tag = h1TagCount;
                jsonResult.h2Tag = h2TagCount;
                jsonResult.h3Tag = h3TagCount;
                jsonResult.h4Tag = h4TagCount;
                jsonResult.h5Tag = h5TagCount;
                jsonResult.h6Tag = h6TagCount;
                jsonResult.altTag = ImgWithoutAltTagCount;
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
                resolve(aUrls.slice(0,10));

            })
            .catch(e => {
                reject(e.toString());
            });
    })
}

var port = process.env.PORT || parseInt(process.argv.pop()) || 3000;

app.listen(port, () => console.log('Example app listening on port ' + port + '!'));
