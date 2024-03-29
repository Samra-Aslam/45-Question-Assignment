// store a location in array. make sure ,
// the array is not in Alphabetical order , 
// print your array in its orignal order .
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Cap town", "delhi", "karachi", "faisalabad", "Afganistan"];
console.log("Orignal  :" + places);
// print your array in Alphabetical order without modifying actual list ..
console.log("copy  :" + __spreadArray([], places, true).sort());
// show that your arry is stil in orignal order by printing it .
console.log("orignal  :" + places);
//print your array in reverse alphabetical order 
//without changing the order of the orignal list .
console.log("copy  :" + __spreadArray([], places, true).sort().reverse());
//show that your arry is stil in orignal order by printing it .
console.log("copy  :" + __spreadArray([], places, true).sort().reverse());
//reverse the order of your list again .
//print the list to show that its  order has changed .
console.log("orignal  :" + places.sort());
//reverse the order of your list again .
//print the list to show its back to its orignal order .
console.log("orignal  :" + places.sort().reverse());
