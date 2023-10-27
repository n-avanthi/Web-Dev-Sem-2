function popup() {
    var myName = document.getElementById("myName").value;
    var qty = document.getElementById("qty").value;
    var items = document.getElementById("items").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
  
    if (gender == "male") {
        gender = "Mens";
    }
    else if (gender == "female") {
        gender = "Womens";
    }

    var brand = document.getElementsByName("brand");
    var selectedbrand = [];
    for (var i = 0; i < brand.length; i++) {
      if (brand[i].checked) {
        selectedbrand.push(brand[i].value);
      }
    }

    var total = calc(items, qty)

    var bill = "Hello " + myName + ", You need to pay : Rs. " + total + " for " + qty + " " + items + " Sneakers. You will recieve your " + gender + " " + selectedbrand.join(", ") + " very soon.";

    document.getElementById("confirm").innerHTML = bill;
}

function calc(items, qty) {

    var price_lowTop = 2000;
    var price_highTop = 4000;
    var price_chunky = 5000;
    var total;

    if(items == "Low Top") {
        total = qty * price_lowTop;
    }
    else if(items == "High Top") {
        total = qty * price_highTop;
    }
    else if(items == "Chunky") {
        total = qty * price_chunky;
    }

    return total;

}