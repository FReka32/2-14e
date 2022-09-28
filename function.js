"use strict"
/*const mondHello = () => {
    console.log("Hello");
}

let func = mondHello; // funkció másolás
func(); // másolt példány hívása
mondHello(); // eredeti példány hívása
*/
/*
let mondHello = function() { 
    console.log("szevasz!");
}
let func = mondHello; 
func();*/

//1.felírás
/*function szum (a, b) {
    return a + b;
}
console.log(szum(2,3));
//2.felírás
let sum = function(a,b) { 
    return a + b;
}
console.log(sum(2,1));
//3. felírás - arrow function
let osszeg = (a,b) => a+b;
console.log(osszeg(3,7));
// 1 paraméter esetén elhagyható a zárójel
let double = n => n*2;
console.log(double(3));

let mondHello = () => alert("hello");
mondHello();

/*let age = prompt("Hány éves vagy?");
let Hello = (age < 18) ?
() => alert("hello"):
() => alert("üdvözlöm!");

Hello();*/
let osszeg = (a,b) => {
    let eredmeny = a + b;
    console.log("szevasztok!");
    return eredmeny;
}
console.log(osszeg(1,2));
