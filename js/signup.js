function Signup(){
    var name = document.getElementById('name_inp').value;
    var email = document.getElementById('email_inp').value;
    var password = document.getElementById('pass_inp').value;
    
    //checking if name is valid
    if(/^[a-zA-Z() ]+$/.test(name)){
        if(name.length > 2 && name.length < 35){
            //name is valid
            //checking if email is of university
            if(email.includes("@stud.kuet.ac.bd")){
                //email is valid
                //checking if password is strong
                if(password.length < 6 || /^[a-zA-Z() ]+$/.test(password)){
                    document.getElementById('error_handler').innerHTML = "Please use an strong password";
                }else{
                    if(/^\d+$/.test(password)){
                        document.getElementById('error_handler').innerHTML = "Please use an strong password";
                    }else{
                        //password is strong
                        //creating account
                        document.getElementById('body').classList.add("displaynone");
                        document.getElementById('loader').classList.remove("displaynone");

                        firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
                            firebase.auth().onAuthStateChanged(function(user) {
                                if (user) {
                                  // User is signed in.
                                  window.location.href = "../home";
                                } else {
                                  // User is signed out.
                                    document.getElementById('error_handler').innerHTML = "Something went wrong";
                                }
                              });
                        }).catch(function(error) {
                            // Handle Errors here.
                            document.getElementById('body').classList.remove("displaynone");
                            document.getElementById('loader').classList.add("displaynone");
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            document.getElementById('error_handler').innerHTML = errorMessage;

                            // ...
                          });
                    }
                }
            }else{
                document.getElementById('error_handler').innerHTML = "Please enter the email provided by your institution <br> or, you're not eligible to create an account ";
            }
        }else{
            document.getElementById('error_handler').innerHTML = "Please enter a valid name";
        }

    }else{
        document.getElementById('error_handler').innerHTML = "Please enter a valid name";
    }
}