// Tipusok, tipuskonverziok

let value = true; // boolean - igaz / boolean - hamis - false
console.log(typeof value);
value = String(value); // tipus-kenyszerites
console.log(typeof value);
console.log("6"/"2"); // automata konvertalas szamma - / * -
console.log("6"+"2"); // str concat

let str = "123";
console.log(typeof str); // string lesz alapertelmezve
let num = Number(str);
console.log(typeof num); // tipuskenyszerites szamma
num = num + 1.2;
console.log(num); // 124.2
console.log(typeof num); // ez is csak siman Number

let age = Number("tizennyolc"); //  
console.log(age); // number tipusu, de NaN
// Numerikus atalakitas lehetseges eredmenyei 
// undefined - nem ertelmezheto a feladat -> Nan
// null -> 0
// true v. false (igaz-hamis) -> 1 es 0
// string -> elveszi a whitespace karaktereket (\t, \n, stb)
// ures string -> 0

console.log(Number("   123   ")); // 123
console.log(Number("123z")); // Nan
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// Boolean-konverzio
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("Hello")); // true
console.log(Boolean("")); // false
console.log(Boolean("0")); // true
console.log(Boolean(" ")); // true
