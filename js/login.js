function Login(){

    document.getElementById('body').classList.add("displaynone");
    document.getElementById('loader').classList.remove("displaynone");

    var email = document.getElementById('email_inp').value;
    var password = document.getElementById('pass_inp').value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
        window.location.href = "home";
    }).catch(function(error) {
        document.getElementById('body').classList.remove("displaynone");
        document.getElementById('loader').classList.add("displaynone");
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...

    document.getElementById('error_handler').innerHTML = errorMessage;
    });
}