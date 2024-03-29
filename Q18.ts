// store a location in array. make sure ,
// the array is not in Alphabetical order , 
// print your array in its orignal order .

let places  : string[] = ["Cap town","delhi","karachi","faisalabad","Afganistan"];
console.log("Orignal  :"  + places);



// print your array in Alphabetical order without modifying actual list ..

console.log("copy  :"+ [...places].sort());

// show that your arry is stil in orignal order by printing it .

console.log("orignal  :" + places);


//print your array in reverse alphabetical order 
//without changing the order of the orignal list .


console.log("copy  :"+ [...places].sort().reverse());

//show that your arry is stil in orignal order by printing it .


console.log("copy  :"+ [...places].sort().reverse());


//reverse the order of your list again .
//print the list to show that its  order has changed .



console.log("orignal  :"+ places.sort());



//reverse the order of your list again .
//print the list to show its back to its orignal order .


console.log("orignal  :"+ places.sort().reverse());



