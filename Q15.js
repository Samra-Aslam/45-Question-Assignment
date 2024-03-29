var guest_list = ["Azam", "Urooj", "Sonia", "Ali", "Sara"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected sir/madam " + guest_list[i] + "\n we invited you on dinner tomorrow, \n Thank you");
}
var not_preseny = "urooj";
var new_guest = "samra";
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected sir/madam " + guest_list[i] + "\n we invited you on dinner tomorrow, \n Thank you");
}
console.log("mis.".concat(not_preseny, " will not comming tomorrow dinner"));
