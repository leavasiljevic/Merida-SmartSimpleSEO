import firebase, { database } from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import config from "../firebase";
require("date-utils");

firebase.initializeApp(config);

var userType="";
window.addEventListener("load", evt=>{
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        const sUser = firebase.auth().currentUser.uid;
        if(sessionStorage.sUser!==sUser){
            sessionStorage.sUser = sUser;
        }
        console.log(sUser);
        firebase.database().ref("user/" + sUser).on("value", (snapshot) => {
            const data = snapshot.val();
            if ((data)) {
                userType = data.userType;
                document.getElementById("loginLink").style.display="none";
                document.getElementById("logout").style.display="block";
                if (userType == "paid") {
                    document.getElementById("paidDash").style.display= "block";
                    document.getElementById("adminDash").style.display = "none";

                }
                else if (userType == "admin") {
                    document.getElementById("adminDash").style.display = "block";
                    document.getElementById("paidDash").style.display = "none";
                }
                else{
                    document.getElementById("adminDash").style.display = "none";
                    document.getElementById("paidDash").style.display = "none";
                }
            }
            else{
                
                hideDash();
            }
        })
    }
    else{
        hideDash();
    }
})
})

function hideDash(){
    document.getElementById("adminDash").style.display = "none";
    document.getElementById("paidDash").style.display = "none";
    document.getElementById("loginLink").style.display = "block";
    document.getElementById("logout").style.display = "none";
}