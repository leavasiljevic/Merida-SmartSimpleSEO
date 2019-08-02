// window.onload=login();

// function login(){
//     document.getElementById("loginSubmit").addEventListener("click", evt => {
//     evt.preventDefault();
//     window.location.replace("../pages/dashboard.html");
// });
// }

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import config from "../firebase";
require("date-utils");

firebase.initializeApp(config);


//Regex for Email - Validate email is well formed
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateTextOnly(name) {
    var re = /^[a-zA-Z]+$/;
    return re.test(name);
}

//Password must be at least 6 letters long
function validatePassword(password) {
    var re = /^(?=.{6,})/;
    return re.test(password);
}

// //If payment is successful
// document.getElementById("payPal").addEventListener("click", evt => {
//     const dateReceived = Date.today().toFormat("YYYY-MM-DD");
//     const sUser = firebase.auth().currentUser.uid;
//     firebase.database().ref("user/" + sUser + "/payment/" + dateReceived).set({
//         paymentMethod: "PayPal",
//         verificationCode: "code"
//     }).then(() =>
//         //window.location.replace("../pages/paidUserDash.html");
//         console.log("redirect to dashboard")
//     ).catch(function (error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         document.getElementById("signUpError").innerHTML = "Something went wrong: " + errorCode + errorMessage;
//         console.log("Error:" + errorCode + "." + errorMessage);
//     });
// })

//Login
document.getElementById("loginSubmit").addEventListener("click", evt => {
    evt.preventDefault();
    const userEmail = document.getElementById("emailUser").value;
    const password = document.getElementById("passwordUser").value;
    if (validateEmail(userEmail) || userEmail != "") {
        if (validatePassword(password) || password != "") {
            firebase.auth().signInWithEmailAndPassword(userEmail, password).then(
                () => {
                    const sUser = firebase.auth().currentUser.uid;
                    //var  ref = firebase.database().ref("users/");
                    console.log(sUser);
                    // ref.on("value", redirect, errorData);
                    //window.location.replace("../pages/paidUserDash.html");
                }).catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    document.getElementById("loginError").innerHTML = "Something went wrong: " + errorCode + ". " + errorMessage;
                    console.log("Error:" + errorCode + "." + errorMessage);
                });
        }
        else {
            document.getElementById("loginError").innerHTML = "That password seems too short. Try again";
        }
    }
    else {
        document.getElementById("loginError").innerHTML = "That doesn't look like an email address. Try again!";
    }

});

function redirect(data){
    const user =data.val();
    const userId = Object.keys(user);
    var userType =userId.userType;
    if (userType == "pending"){
        window.location.replace("../pages/payment.html");
    }
    else if (userType == "paidUser"){
        window.location.replace("../pages/paidUserDash.html");
    }
    else if (userType == "admin"){
        window.location.replace("../pages/adminDash.html");
    }
    else{
        document.getElementById("loginError").innerHTML = "Something went wrong. We weren't able to verify your user type. Please contact the admin.";
    }
}
function errorData(errorObject) {
    console.log("The read failed: " + errorObject.code);
};

//Logout
document.getElementById("logout").addEventListener("click", () => {
    firebase.auth().signOut().then(() => {
        //Send the user back to the home page
        //window.location.replace("../index.html");
        document.getElementById("userMessage").innerHTML = "You have been logged out";
    }).catch(() => {
        var errorCode = error.code;
        var errorMessage = error.message;
        document.getElementById("logoutError").innerHTML = "Something went wrong: " + errorCode + ". " + errorMessage;
        console.log("Error:" + errorCode + "." + errorMessage);
    });
});

//Try for free (on click of try for free)
document.getElementById("tryForFree").addEventListener("click", evt => {
    evt.preventDefault();
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            //check user type 
            const sUser = firebase.auth().currentUser.uid;
            //    const userType =firebase.database().ref("users/"+sUser+ "/userType").val();
            //    console.log(userType);
        }
        else {
            firebase.auth().signInAnonymously().then(() => {
                const sUser = firebase.auth().currentUser.uid;
                const dateCreated = Date.today().toFormat("YYYY-MM-DD");
                firebase.database().ref("user/" + sUser).set({
                    userType: "freeUser",
                    ipAddress: "insertIPHere",
                    dateCreated: dateCreated
                })
                //window.location.href="../pages/freeTry";
                // console.log("logged in");
            }).catch(() => {
                var errorCode = error.code;
                var errorMessage = error.message;
                document.getElementById("loginError").innerHTML = errorCode + "Something went wrong: " + errorMessage;
                console.log("Error:" + errorCode + "." + errorMessage);
            });
        }
    });

});

//Password reset
document.getElementById("submitPasswordReset").addEventListener("click", evt => {
    evt.preventDefault();
    var userEmail = document.getElementById("emailForResend").value;
    firebase.auth().sendPasswordResetEmail(userEmail).then(() => {
        document.getElementById("userMessage").innerHTML = "Password reset link sent!";
    }).catch(() => {
        var errorCode = error.code;
        var errorMessage = error.message;
        document.getElementById("userMessage").innerHTML = "Something went wrong: " + errorCode + ". " + errorMessage;
        console.log("Error:" + errorCode + "." + errorMessage);
    });
});

// ///////////////////
// ///////////// Verify User

