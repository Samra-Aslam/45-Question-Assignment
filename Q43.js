//array with great
var magicians = [" samra", "saba", "amara"];
var comment = " The Great";
function great_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(comment, magicians[i]);
    }
}
great_magicians(magicians);
//showing orignal array
var magiciansnames = [" samra", "saba", "amara"];
function show_magicians(magiciansnames) {
    for (var i = 0; i < magiciansnames.length; i++) {
        console.log(magiciansnames[i]);
    }
}
show_magicians(magiciansnames);
