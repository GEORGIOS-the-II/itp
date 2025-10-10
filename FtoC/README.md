# FtoC Assingment 


## What I did:



#### I worked out how I could prioritize the calcuations  to calcuate F to C:

- The calcuations order was wierd when putting all of them in one parenthis so had to find a way to make it do them in the right order. the * kept showing up in the console.log


```
const f = 99
let fToC = (`${`${f-32} * ${5/9}`}`);
console.log(fToC);
let c = `${fToC}`;
console.log(c);
console.log(`${c}`);//doesnt work?!
let fToC1 = f-32
let celcius = fToC1*`${5/9}`;
console.log(celcius);
```

#### 2nd Version 

- I made it even more efficient and added the prompt part:

```
const f = 99
let fToC1 = f-32
let c = fToC1*`${5/9}`;
console.log(c);
let temperature = prompt("Whats the temperature in Fahrenheit?")
let temperatureConversion = (`${temperature - 32}` * (5/9))
console.log(temperatureConversion);
```

- At this point in while working out the prompt part I found an even more efficient way for the temperatureConversion binding(I know big name)

#### Last Most Efficient Version 

```
let f = 99
let fToC = (`${f - 32}` * (5/9))
console.log(fToC.toFixed(1)+"\u00B0C");
let temp = prompt("Whats the temperature in Fahrenheit?")
let tempConv = (`${temp - 32}` * (5/9))
console.log(tempConv.toFixed(1)+"\u00B0C");
```

- I tidied up the names and the code a bit, and also used chatGpt to find how to put the temperature character. Also added the `.toFixed()` for better looks.
![ChatGpt Screenshot](ChatGpt%20screenshot.png)

## Problems faced:

- Obviously finding the most appropriate operators. More silly typos than I expected. Could've been much faster if I was reading theory but wanted to test my self. For some reason I didn't try the most obvious way to write it out which is the last cause I assumed it wouldn't be that easy.

Thanks!! :)

