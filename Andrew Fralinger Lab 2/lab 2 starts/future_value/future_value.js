"use strict"; //Strict Mode enabled
var $ = function (id) {
    return document.getElementById(id);
}

//Calculation based on book example
var calculateFVO = function (amount, interest, years) {
    for (var x = 0; x < years; x++){
        amount = amount + (amount * interest / 100);
    }
    return parseFloat(amount).toFixed(2);
}

var processEntries = function () {
    var amount = parseFloat($("investment").value);
    var interest = parseFloat($("rate").value);
    var years = parseFloat($("years").value);
    var errorMessage = null;
  // Validation.  Doesn't seem to work if user leaves the boxes blank, but it's not clear why.
  // parseFloat on an empty value returns NaN which is != ""
    if (amount <= 0 || amount > 100000) {
        errorMessage = "Error.  Investment must be greater than $0 and not greater than $100,000.";
        $("investment").focus();
    }
    else if (interest <= 0 || interest > 15) {
        errorMessage = "Error.  Interest Rate must be greater than 0% and not greater than 15%.";
        $("rate").focus();
    }
    else if (years <= 0 || years > 50) {
        errorMessage = "Error.  Years must be greater than 0 and not greater than 50."
        $("years").focus();
    }
    if (errorMessage == null) {
        $("future_value").value = calculateFVO(amount, interest, years);
    }
    else {
        alert(errorMessage);
    }
}

// Stuff to do on page load
window.onload = function () {
    $("calculate").onclick = processEntries;
    $("investment").focus();
}
