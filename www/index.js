document.getElementById("compare").addEventListener("click",function(evt){
    evt.preventDefault();
<<<<<<< HEAD
    let sUrl = document.getElementById("enterURL").value;
    let sCompetitor= document.getElementById("enterCompetitorsURL").value;
    let sName = "/compare/?q=" + sUrl + "&q1=" + sCompetitor;
    fetch(sName).then(function(response){
=======
    let sClientURL = document.getElementById("enterURL").value;
    let sCompetitorURL= document.getElementById("enterCompetitorsURL").value || null;
    let sKeyword = document.getElementById("enterKeyword").value || null;
    let sURL = "/compare/?clientURL=" + sClientURL + "&competitorURL=" + sCompetitorURL + "&keyword=" + sKeyword;

    fetch(sURL)
    .then(function(response){
      console.log("Response: " + response.status);
>>>>>>> SimpleSEO
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
    
<<<<<<< HEAD
          // Examine the text in the response
          response.text().then(function(data) {
            console.log(data);
            document.getElementById("exitString").innerHTML = data;
          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
=======
          return response.text();
        }        
      )
      .then(function(data) {
        
        var jsonResult = JSON.parse(data);
        this.CreateTableFromJSON(jsonResult);

        }
        )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });

      console.log("Testing asynchrnous");
>>>>>>> SimpleSEO
    
})


function CreateTableFromJSON(jsonData) {
 
  var resultTableHeaders = ["Page Elements", "Client's Page Results", "Competitor's Page Results"];
  var resultRowHeaders = ["Title", "H1 Tag", "H2 Tag", "H3 Tag", "H4 Tag", "H5 Tag", "H6 Tag", "ImgWithoutAltTagCount", "Link Tag", "Keywords in Meta Tag", "Bold Tag", "Italic Tag", "Keywords in Title Tag" ];
  var resultRowKeys = ["title", "h1Tag", "h2Tag", "h3Tag", "h4Tag", "h5Tag", "h6Tag", "altTag","linkTag", "keyword", "boldTag", "italicTag", "titleTag"  ];


  var table = document.createElement("table");


  var tr = table.insertRow(-1);                   

  for (var i = 0; i < resultTableHeaders.length; i++) {
      var th = document.createElement("th");      
      th.innerHTML = resultTableHeaders[i];
      tr.appendChild(th);
  }

  for (var i = 0; i < resultRowHeaders.length; i++) {

      tr = table.insertRow(-1);

      tr.insertCell(-1).innerHTML = resultRowHeaders[i];

      tr.insertCell(-1).innerHTML = jsonData.clientURLResult[ resultRowKeys[i] ];

      tr.insertCell(-1).innerHTML = jsonData.competitorURLResult[ resultRowKeys[i] ];

  }

  var divContainer = document.getElementById("results");
  divContainer.innerHTML = "";
  divContainer.appendChild(table);
}




