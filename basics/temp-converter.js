let tempConverter = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

let celsiusConverter = function(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
}
console.log(tempConverter(48));
console.log(celsiusConverter(8.88888));