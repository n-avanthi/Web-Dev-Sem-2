function formSubmit() {
    var myName = document.getElementById("myName").value
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var package = document.getElementById("package").value;

    document.getElementById("confirm").innerHTML = "Your details for confirmation are "; 
    document.getElementById("urname").innerHTML = "Your name is " + myName;
    document.getElementById("urage").innerHTML = "Your age is " + age; 
    document.getElementById("uremail").innerHTML = "Your email is " + email; 
    document.getElementById("urpackage").innerHTML = "Your package is " + package; 
}