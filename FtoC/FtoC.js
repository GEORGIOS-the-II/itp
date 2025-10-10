let f = 99
let fToC = (`${f - 32}` * (5/9))
console.log(fToC.toFixed(1)+"\u00B0C");

let temp = prompt("Whats the temperature in Fahrenheit?")
let tempConv = (`${temp - 32}` * (5/9))
console.log(tempConv.toFixed(1)+"\u00B0C");
