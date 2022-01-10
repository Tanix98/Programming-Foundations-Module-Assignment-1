var city = "kristiansand";
var age = 23;
var isOnline = true;

var firstName = "oystein";
var lastName = "rostvik";
var fullName = firstName + lastName;
console.log(fullName);

console.log(typeof("frog"));
var frogType = "string";
console.log("The type of frog is " + frogType);

var orderHasShipped = true;
if (orderHasShipped === true) {
    console.log("The order has shipped");
}
else {
    console.log("The order did not ship");
}

for(var counter = 7; counter <= 13; counter++) {
    console.log(counter);
}