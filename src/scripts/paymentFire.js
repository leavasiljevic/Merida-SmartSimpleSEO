import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import config from "../firebase";
require("date-utils");

firebase.initializeApp(config);
document.getElementById("payPal").addEventListener("click", evt => {
    const dateReceived = Date.today().toFormat("YYYY-MM-DD");
    const sUser = firebase.auth().currentUser.uid;
    firebase.database().ref("user/" + sUser + "/payment/" + dateReceived).set({
        paymentMethod: "PayPal",
        verificationCode: "code"
    }).then(() =>
        firebase.database().ref("user/"+sUser).update({
            userType: "paid"
        }        
    )).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        document.getElementById("signUpError").innerHTML = "Something went wrong: " + errorCode + errorMessage;
        console.log("Error:" + errorCode + ". " + errorMessage);
    })
})