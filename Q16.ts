var guest_list : string[]=["Azam","Urooj","Sonia","Ali","Sara"];
for(var i=0; i<guest_list.length; i++){

    console.log("Respected sir/madam " +guest_list[i] + "\n we invited you on dinner tomorrow, \n Thank you");
}
var not_preseny : string = "urooj";
var new_guest : string ="samra";
guest_list[1]=new_guest;

for(var i=0; i<guest_list.length; i++){

    console.log("Respected sir/madam " +guest_list[i] + "\n we invited you on dinner tomorrow, \n Thank you");
}
guest_list.unshift("uzma","sumaia","asma");
for(var i=0; i<guest_list.length; i++){

    console.log("Respected sir/madam " +guest_list[i] + "\n we invited you on dinner tomorrow, \n Thank you");
}
