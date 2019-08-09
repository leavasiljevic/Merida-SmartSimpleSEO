import firebase, { database } from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import config from "../firebase";
require("date-utils");

firebase.initializeApp(config);

var ipAddress = "";
var userType = "";
var ipAddress = "";
var ipKey = "";
var counter = 0;

document.getElementById("compare").addEventListener("click", evt => {
    evt.preventDefault();
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            const sUser = firebase.auth().currentUser.uid;
            firebase.database().ref("user/" + sUser).on("value", (snapshot) => {
                const data = snapshot.val();
                if ((data)) {
                    userType = data.userType;
                    if (userType == "pending") {
                        window.location.replace("../pages/payment.html");
                    }
                    else if (userType == "paid") {
                        window.location.replace("../pages/dashboard.html");
                    }
                }
                else {
                    searchFreeUser();
                }
            });
        }
        else {
            firebase.auth().signInAnonymously();
        }
    });

});


function searchFreeUser() {
    fetch('https://api.ipify.org?format=json').then(function (response) {
        return response.json();
    }).then(function (myJson) {
        ipAddress = myJson.ip;
        ipKey = ipAddress.replace(/\./g, "_");
        findIPAddress(ipKey);
    })
}

function findIPAddress(ipAddress) {
    var ipSearch = firebase.database().ref("user/FreeUser/")
    ipSearch.once("value", function (snapshot) {
        const oItems = snapshot.val();
        const aKeys = Object.keys(oItems);
        for (let n = 0; n < aKeys.length; n++) {

            if (aKeys[n] == ipAddress) {
                counter = oItems[aKeys[n]].timesAccessed;
                if (counter < 2) {
                    firebase.database().ref("user/FreeUser/" + ipAddress).update({
                        timesAccessed: 2
                    })

                }
                else if (counter == 2) {
                    window.location.replace("../pages/payment.html?status=exceededUse");
                }
                break;
            }
            else {
                const dateCreated = new Date().toISOString().replace(".", "_");
                firebase.database().ref("user/FreeUser/" + ipAddress).set({
                    timesAccessed: 1,
                    dateCreated: dateCreated
                })
            }
        }
    })
}