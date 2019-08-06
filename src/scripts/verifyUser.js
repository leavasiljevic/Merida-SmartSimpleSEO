import firebase, { database } from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import config from "../firebase";
require("date-utils");

firebase.initializeApp(config);

// function verifyUser(){
//     var sUser = firebase.auth().currentUser.uid;
//     firebase.database().ref("user/" + sUser).on("value", (snapshot) => {
//         var oUsers = snapshot.val();
//         var userType = oUsers.userType;
//         return userType;
//     })
// }

document.getElementById("tryForFree").addEventListener("click", evt => {
    evt.preventDefault();
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            //check user type 
            const sUser = firebase.auth().currentUser.uid;
            const userType = firebase.database().ref("user/" + sUser + "/userType").on("value", (snapshot) => {
                if (!snapshot.val()) {
                    const dateCreated = Date.today().toFormat("YYYY-MM-DD");
                    firebase.database().ref("user/" + sUser).set({
                        userType: "freeUser",
                        ipAddress: "insertIPHere",
                        timesAccessed: 1,
                        dateCreated: dateCreated
                    })
                } else {
                    //Want to check the userType then find other users with the same userType to see if they have the same Ip address
                    userType = snapshot.val();
                    console.log(userType);
                }
                // console.log(snapshot.val());
                //console.log(userType);
            });
        }
        else {
            firebase.auth().signInAnonymously();
            //window.location.href="../pages/freeTry";
            // console.log("logged in");
        }
    });

});


