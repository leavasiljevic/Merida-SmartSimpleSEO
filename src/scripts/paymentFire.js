import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import config from "../firebase";
require("date-utils");

firebase.initializeApp(config);


const urlParams = new URLSearchParams(window.location.search);

var payerId = urlParams.get("PayerID");
var paymentId = urlParams.get("paymentId");
var token =urlParams.get("token");

if (payerId==null||payerId==null){
    window.location.replace("../pages/payment.html?paymentStatus=cancelled");
}else{
    if(logPayment()){
        window.location.replace("../pages/dashboard.html");
    }
}

function logPayment(){
    const dateReceived = new Date().toISOString().replace(".", "_");
    //const sUser = firebase.auth().currentUser.uid;
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            const sUser = firebase.auth().currentUser.uid;
            firebase.database().ref("user/" + sUser + "/payment/" + dateReceived).set({
                paymentMethod: "PayPal",
                payerId: payerId,
                paymentId: paymentId,
                token: token
            }).then(() =>
                firebase.database().ref("user/" + sUser).update({
                    userType: "paid"
                })
            ).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("Error:" + errorCode + ". " + errorMessage);
            })
            return true;
        }else{
            console.log("no user??")
            return false;
        }
    })
    return true;
}