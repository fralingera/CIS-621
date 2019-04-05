var $ = function (id) {
    return document.getElementById(id);
}

var calculatePay = function () {
    var myHours = $("hours").value;
    var myRate = $("rate").value;
    var myTax;
  var mySalary = 0; //Must be set to 0, or a logic error occurs below
  // You didn't parse myHours to a number so isNan will always be fall becasue it's a string if blank.
    if (isNaN(myHours) || myHours <= 0 || myHours > 160) {
        $("hourError").hidden = false;
    }
    else if (isNaN(myRate) || myRate <= 0) {
        $("rateError").hidden = false;
    }
    else {
        $("hourError").hidden;
        $("rateError").hidden;
        for (var x = 0; x < 26; x++) {
            mySalary += (myHours * myRate); //If mySalary is not set to 0, I think this will trigger the logic error that bugged my program.
        }
        if (mySalary < 8700) {
            myTax = 10;
        }
        else if (mySalary >= 8700 && mySalary < 35350) {
            myTax = 15;
        }
        else if (mySalary >= 35350 && mySalary < 85650) {
            myTax = 25;
        }
        else if (mySalary >= 85650 && mySalary < 178650) {
            myTax = 28;
        }
        else if (mySalary >= 178650 && mySalary < 388350) {
            myTax = 33;
        }
        else if (mySalary >= 388350) {
            myTax = 35;
        }
        //$("salary").value = parseFloat(mySalary); Used for debugging a logic error that was found.
        $("gross").value = parseFloat((myHours * myRate)).toFixed(2);
        $("net").value = parseFloat((myHours * myRate)-(myHours * myRate * myTax / 100)).toFixed(2);
    }
}

window.onload = function () {
    $("hours").focus();
    $("calculate").onclick = calculatePay;
}
