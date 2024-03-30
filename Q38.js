function describe_city(city, country) {
    if (city === void 0) { city = "karachi"; }
    if (country === void 0) { country = "pakistan"; }
    console.log(city + country);
}
//using function with default value
describe_city();
// using function with different values
describe_city("sawat", "pakistan");
