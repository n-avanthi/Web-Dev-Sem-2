function popup() {
    var name = document.getElementById("name").value;
    var items = document.getElementById("items").value;
    var qty = document.getElementById("qty").value;
    var diet = document.querySelector('input[name="diet"]:checked').value;
  
    var allergies = document.getElementsByName("allergies");
    var selectedAllergies = [];
    for (var i = 0; i < allergies.length; i++) {
      if (allergies[i].checked) {
        selectedAllergies.push(allergies[i].value);
      }
    }

    if (diet== "nonveg") {
        diet = "Non Vegetarian";
    }
    else if (diet== "veg") {
        diet = "Vegetarian";
    }

    var total = calc(items, qty)

    var bill = "Hi " + name + ". You need to pay : Rs. " + total + " for " + qty + " " + items + ". We have taken care of your " + diet + " and " + selectedAllergies.join(", ") + " allergy requirements in this item.";

    // var selectionsText = "Selected Bakery Items :<br>";
    // selectionsText += "Name : " + name + "<br>";
    // selectionsText += "Items : " + items + "<br>";
    // selectionsText += "Quantity : " + qty + "<br>";
    // selectionsText += "Diet: " + diet + "<br>";
    // selectionsText += "Allergies: " + selectedAllergies.join(", ") + "<br>";
    // selectionsText += "Total bill: " + total + "<br>";
    
    document.getElementById("text01").innerHTML = bill;
}

function calc(items, qty) {
    var price_cake = 60;
    var price_croissant = 50;
    var price_cookies = 100;
    var price_pudding = 40;
    var total;

    if(items == "Chocolate Cake") {
        total = qty * price_cake;
    }
    else if(items == "Croissant") {
        total = qty * price_croissant;
    }
    else if(items == "Assorted Cookies") {
        total = qty * price_cookies;
    }
    else if(items == "Banana Pudding") {
        total = qty * price_pudding;
    }
    return total;

}