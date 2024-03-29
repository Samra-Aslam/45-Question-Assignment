var Users = ["sana", "babar", "admin", "taha"];
for (var _i = 0, Users_1 = Users; _i < Users_1.length; _i++) {
    var user = Users_1[_i];
    if (user === "admin") {
        console.log("Hello Admin would you like to see a ststus report?");
    }
    else {
        console.log(" Hello ".concat(user, " Thank you for logging in again"));
    }
}
