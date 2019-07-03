import express from 'express';
<<<<<<< HEAD
import bodyParser  from "body-parser";
const fetch = require('node-fetch');
const cheerio = require('cheerio');
=======
import bodyParser from "body-parser";
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const async = require('async');
>>>>>>> SimpleSEO

// Create a new express application instance
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("www"));

app.get("/users/:uname", (req, res) => {
    res.end("Hello " + req.params.uname);
});

<<<<<<< HEAD
function oneSite(sBody){
    const $ = cheerio.load(sBody);
    var aResult = [];
    var nAnchorTags= $("a").length;
    var nBoldTag=$("b").length;
    var nItalicTag=$("i").length;
    var nImgWithoutAlt= $('img:not([alt])').length;
    var sTitle=$("title").html();
    var sResult="";
    sResult= sTitle + " has " + nAnchorTags + " anchors" + " and " + nImgWithoutAlt + " images without \"alt\" tags," +
     " and " + nBoldTag + " bold tags, and " + nItalicTag + " italic tags";
    return sResult;
}

app.get("/compare/", (req, res) => {
    let sUrl = req.query.q;
    let sCompetitor = req.query.q1;
    fetch(sUrl)
    .then(res => res.text())
    .then(body => {
        var sResult = oneSite(body);
        fetch(sCompetitor)
        .then(res => res.text())
        .then(body => {
            sResult += "<br/>"+ oneSite(body);
            res.end(sResult);
        }); 
        
    }); 
});
=======
app.get("/compare/", (req, res) => {
    var sClientURL = req.query.clientURL;
    var sCompetitorURL = req.query.competitorURL;
    var sKeyword = req.query.keyword;
    var oReturnResult = {};

    Promise.all([parseWebPage(sClientURL, sKeyword), parseWebPage(sCompetitorURL, sKeyword)])
    .then(function(result) {
        oReturnResult.clientURLResult = result[0];
        oReturnResult.competitorURLResult = result[1];
        res.end(JSON.stringify(oReturnResult));
      })
      .catch(function (err) {
           res.end();
           console.log(err)
     }) ;
});


function parseWebPage(sURL, sKeyword) {
    var jsonResult = {};

    return new Promise(function (resolve, reject) {

        fetch(sURL)
            .then(result => result.text())
            .then(html => {
                console.log("URL inside the parseWebPageComp function is " + sURL);
                console.log("Keyword inside the parseWebPageComp function is " + sKeyword);
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
                try{
                    ImgWithoutAltTagCount = $( "img: not([alt])" ).length;
                }
                catch(e){
                    console.log(e.toString())
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
                console.log("Result on the server is" + JSON.stringify(jsonResult));
                resolve(jsonResult);
            })
            .catch(function (err) {
                console.log("Error occurred on the server:" + err);
                reject(err);
            });


    });
>>>>>>> SimpleSEO



}

var port = process.env.PORT || parseInt(process.argv.pop()) || 3000;

app.listen(port, () => console.log('Example app listening on port ' + port + '!'));
