import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import config from "../firebase";
require("date-utils");


firebase.initializeApp(config);

///////////////////////Not complete///////////////////////////////////

var userError = document.getElementById("userError");
var outFirstName = document.getElementById("outFirstName");
var outLastName = document.getElementById("outLastName");
var outEmail = document.getElementById("outEmail");
var accessEndDate = document.getElementById("grant-free");

document.getElementById("search").addEventListener("click", evt => {
    evt.preventDefault();
    var email = document.getElementById("email").value;
    var userError = document.getElementById("userError").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var date = document.getElementById("date").value;
    var email = document.getElementById("email").value;
    firebase.database().ref("user/").orderByChild("email").equalTo(email).on("child_added", function (snapshot) {
        outFirstName.innerHTML = snapshot.val().firstName;
        outLastName.innerHTML = snapshot.val().lastName;
        outEmail.innerHTML = snapshot.val().email;
        var userKey = snapshot.val().key;
        updateUser(userKey);
    }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode);
    });
})

function updateUser(userKey) {
    firebase.database().ref("user/" + userKey).set()
}