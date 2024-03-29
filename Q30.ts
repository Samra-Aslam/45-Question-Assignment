var Users =["sana","babar","admin","taha"];
for(let user of Users){
    if (user==="admin"){
        console.log("Hello Admin would you like to see a ststus report?");
    }
    else{
        console.log(` Hello ${user} Thank you for logging in again`)
    }
}