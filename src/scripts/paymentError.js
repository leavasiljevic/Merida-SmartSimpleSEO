const urlParams = new URLSearchParams(window.location.search);

var query = urlParams.get("PayerID");
var paymentId = urlParams.get("paymentId");
var token = urlParams.get("token");

if (urlParams.get("paymentStatus")=="cancelled"){
    document.getElementById("paymentError").innerHTML="Looks like you cancelled the payment, try again?";
}
else if (urlParams.get("status")== "exceededUse"){
    document.getElementById("paymentError").innerHTML = "It looks like you've used our tool twice and will no longer be able to use it for free. But... You can get unlimited access for $9.99!";
}
else{
    document.getElementById("paymentError").innerHTML="";
}
