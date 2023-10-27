function formSubmit() {
    var myName = document.getElementById("myName").value
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phone").value;
    document.getElementById("confirm").innerHTML = "Your details for confirmation are: "; 
    document.getElementById("applyName").innerHTML = "Your name is " + myName;
    document.getElementById("applyAge").innerHTML = "Your name is " + age;
    document.getElementById("applyPhone").innerHTML = "Your phone number is " + phone; 
}