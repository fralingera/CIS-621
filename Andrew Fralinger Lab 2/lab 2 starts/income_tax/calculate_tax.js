var $ = function (id) {
    return document.getElementById(id);
}

var calculate_tax = function() {
	var income = parseFloat( $("income").value);
	
}

window.onload = function () {
    $("calculate").onclick = calculate_tax;
}