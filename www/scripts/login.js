window.onload=login();

function login(){
    document.getElementById("loginSubmit").addEventListener("click", evt => {
    evt.preventDefault();
    window.location.replace("../pages/dashboard.html");
});
}

// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';
// import config from "../firebase";
// require("date-utils");

// firebase.initializeApp(config);

// /////Login

// document.getElementById("loginSubmit").addEventListener("click", evt => {
//     evt.preventDefault();
//     const userEmail = document.getElementById("emailUser").value;
//     const password = document.getElementById("passwordUser").value;
//     firebase.auth().signInWithEmailAndPassword(userEmail, password).then(
//         () => {
//             const sUser = firebase.auth().currentUser.uid;
//            var  ref = firebase.database().ref("users/");
//            console.log(sUser);
//             ref.on("value", redirect, errorData);
//         }).catch(function (error) {
//             // Handle Errors here.
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             document.getElementById("loginError").innerHTML = "Something went wrong: " + errorCode + ". "+ errorMessage;
//             console.log("Error:" + errorCode + "." + errorMessage);
//         });

// });

// function redirect(data){
//     const user =data.val();
//     const userId = Object.keys(user);
//     var userType =userId.userType;
//     if (userType == "pending"){
//         window.location.replace("../pages/payment.html");
//     }
//     else if (userType == "paidUser"){
//         window.location.replace("../pages/dashboard.html");
//     }
//     else if (userType == "admin"){
//         window.location.replace("../pages/adminDash.html");
//     }
//     else{
//         document.getElementById("loginError").innerHTML = "Something went wrong. We weren't able to verify your user type. Please contact the admin.";
//     }
// }
// function errorData(errorObject) {
//     console.log("The read failed: " + errorObject.code);
// };


// ////////

// //////////Forgot Password

// document.getElementById("submitPasswordReset").addEventListener("click", evt =>{
//     evt.preventDefault();
//     var userEmail=document.getElementById("emailForResend").value;
//     firebase.auth().sendPasswordResetEmail(userEmail).then(()=>{
//         document.getElementById("userMessage").innerHTML="Password reset link sent!";
//          window.location.replace("../pages/login.html");
//     }).catch(()=>{
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         document.getElementById("userMessage").innerHTML = "Something went wrong: "+ errorCode + ". " + errorMessage;
//         console.log("Error:" + errorCode + "." + errorMessage);
//     });
// });

//////////////////


// ///////////If payment is successful

// document.getElementById("payPal").addEventListener("click", evt => {
//     const dateReceived = Date.today().toFormat("YYYY-MM-DD");
//     firebase.database().ref("user/" + sUser + "/payment").set({
//         paymentMethod: "PayPal",
//         verificationCode: "code",
//         dateReceived: dateReceived
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

///////////////

// /////////////Sign Up 
// document.getElementById("submitSignUp").addEventListener("click", evt => {
//     evt.preventDefault();
//     const email = document.getElementById("emailNew").value;
//     const tryPassword = document.getElementById("passwordNew").value;
//     const confirmedPassword = document.getElementById("confirmPassword").value;
//     const firstName = document.getElementById("firstName").value;
//     const lastName = document.getElementById("lastName").value;

//     if (tryPassword == confirmedPassword) {
//         const password = tryPassword;
//         const dateCreated = Date.today().toFormat("YYYY-MM-DD");
//         firebase.auth().createUserWithEmailAndPassword(email, password).then(
//             () => {
//                 //Save information for the user
//                 const sUser = firebase.auth().currentUser.uid;
//                 firebase.database().ref("user/" + sUser).set({
//                     userType: "pending",
//                     email: email,
//                     password: password,
//                     firstName: firstName,
//                     lastName: lastName,
//                     dateCreated: dateCreated
//                 });
//                 //Then redirect to payment page
//                 // window.location.replace("../pages/payment.html");
//             }
//         ).catch(function (error) {
//             // Handle Errors here.
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             document.getElementById("signUpError").innerHTML = "Sign Up Error: " + errorCode + ". " + errorMessage;
//             console.log("Something went wrong:" + errorCode + "." + errorMessage);
//         });
//     }
//     else {
//         document.getElementById("signUpError").innerHTML = "The passwords don't seem to match! Please try again";
//     }
//});
///////////////////
///////////// Verify User

