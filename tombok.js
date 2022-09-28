"use strict";

/*let tomb = [];
let tomb2 = new Array;
let tomb3 = ["helló","én","egy","tömb","vagyok"];
let szamok_tomb = [1, 2];
let gyumik = ["alma", "körte", "narancs"];*/

/*const szamok = [];
for(let i = 0; i < 10; i++) {
    //szamok[i] = i; 
    szamok.push(i+1);
}
console.log(szamok);
//Tömbök számossága
console.log(`A tömb számossága: ${szamok.length}`);
console.log(`A tömb 0. eleme: ${szamok[0]}`);*/

//const a = [];
//const b = [];
//const c = [];
//let j = 0; // b tömb j GLOBÁLIS tömbindexe
/*for(let i = 0; i < 100; i++) { //1-tol 100-ig
    a[i] = i+1;
    if(a[i]%2==0){
        b[j] = a[i];
        j++;
    }
    if(a[i]%3==0){
        c[c.length] = a[i]; // vagy c.push(a[i]). sporolas
    }
    
    if(a[i]%3==0 || a[i]%5==0){
        if(a[i]%3==0 && a[i]%5==0){
            console.log(`3-al és 5-el is osztható: ${a[i]}\n`);
        }else{
            console.log(`3-al vagy 5-el is osztható: ${a[i]}\n`);
        }
    }
}*/
/** CLEAN CODE ELVEI SZERINT
for(let i = 0; i < 100; i++) { //1-tol 100-ig
    a.push(i+1); 
    if(a[i]%2==0){
        b.push(a[i]);
    }
    if(a[i]%3==0){
        c.push(a[i])
    }
    
    if(a[i]%3==0 || a[i]%5==0){
        if(a[i]%3==0 && a[i]%5==0){
            console.log(`3-al és 5-el is osztható: ${a[i]}\n`);
        }else{
            console.log(`3-al vagy 5-el is osztható: ${a[i]}\n`);
        }
    }
}
console.log(a);
console.log(b);
console.log(c);
console.log(a.length);
console.log(b.length);
console.log(c.length);*/

/*const a = [];
for(let i = 0; i < 100; i++) {
    let x = Math.floor(Math.random()*100);
    while(a.includes(x)){
        x = Math.floor(Math.random()*100);
    }
    a.push(x);
}
for(let i = 1; i < 100; i++) {
    document.write(a[i] + " ");
    if(i%5==0 && i!=0){
        document.write('<br>');
    }
}*/
/**
 * Irja ki console-ra a generált sorozatot, mindegyikből 100x
 * 5->90
 * 6->45
 * 7->35
 */
//5-90
const lotto = [];
const otos = [];
for(let i = 0; i < 5; i++){
    let x = Math.floor(Math.random()*100);
    while(otos.includes(x)){
        x = Math.floor(Math.random()*100);
    }
    otos.push(x);
}
console.log(otos);
/*lotto = [];
const hatos = []
for(let i = 0; i < 100; i++){
    for(let j = 0; j < 6; j++) {
        let x = Math.floor(Math.random()*100);
        while(hatos.includes(x) || x>45){
            x = Math.floor(Math.random()*100);
        }
        hatos.push(x);
    }
    if(hatos.length==6){
        lotto.push(hatos);
    }
}
console.log(lotto);
lotto = [];
const hetes = []
for(let i = 0; i < 100; i++){
    for(let j = 0; j < 6; j++) {
        let x = Math.floor(Math.random()*100);
        while(hetes.includes(x) || x>35){
            x = Math.floor(Math.random()*100);
        }
        hetes.push(x);
    }
    if(hetes.length==6){
        lotto.push(hetes);
    }
}*/

let a = [[1,2,3],
        [4,5,6],
        [7,8,9]];
console.table(a); //tablazatos megjelenites konzolon
console.log(a[0][2]); //2 -> 0. sor, 1. elem

const b = [];
b.push(10) //belerak a vegere
b.push(9) 
b.push(8) 
b.push(7) 
console.log(b);
b.pop() //torol a vegerol
console.log(b);
b.shift(); //torol az elejerol
console.log(b);
b.unshift(5,4) //belerak a vegere
console.log(b);

 
