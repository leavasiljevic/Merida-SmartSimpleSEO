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
                    firebase.auth().onAuthStateChanged(function (user) {
                        if (user) {
                            firebase.database().ref("user/" + sUser).on("value", (snapshot) => {
                                const data = snapshot.val();
                                var userType = data.userType;
                                switch(userType){
                                    case "admin":
                                        window.location.replace("../pages/adminDash.html");
                                        break;
                                    case "paid":
                                        window.location.replace("../pages/dashboard.html");
                                        break;
                                    case "pending":
                                        window.location.replace("../pages/payment.html");
                                        break;
                                    default: 
                                         document.getElementById("loginError").innerHTML = "Something went wrong.";
                                }

                            });
                        }else{
                            document.getElementById("loginError").innerHTML = "Something went wrong.";
                        }
                    })
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

