"use strict";
//let kutya = new Object();
/*let kutya = {
    nev:"Elemér", // tulajdonság = property; kulcs-érték párok
    kor:"2",
    "szereti a madarakat": true
}
console.log(kutya.nev); // GET
console.log(kutya.kor); //GET
kutya.isKorcs = true; // SET
kutya["szereti a madarakat"] = true; // SET
delete kutya.nev; // SET

class Kutya {
    constructor(nev, kor, madaras) {
        this.nev = nev;
        this.kor = kor;
        this.madaras = madaras;
    }
}
let kiskutyam = new Kutya("Elemér", "2", "true");*/
/*let user = {
    név:"John",
    kor:"2"
}*/
//let key = prompt("Mit szeretnél tudni a felhasználóról?", "név");
//console.log(user[key]); //itt működik ékezettel
//console.log(user.key);// itt nem

/*let gyümi = prompt("Milyen gyümölcsöt szeretnél venni?", "alma");
let zsák = {};
zsák[gyümi] = 5;
console.log(zsák.alma);*/

/*function UserLetre(nev, kor){
    return {
        nev, //kulcs és érték is
        kor
    };
}
let user = UserLetre("John", 30);
console.log(user.nev);
console.log(user.kor);*/

let obj = {
    for:1,
    let:2,
    return:3
};
console.log(obj.for + obj.let + obj.return);

let obj2 = {
    0: "test", // ugyanaz, mint a "0": "test";
    
};
console.log(obj2["0"]);
console.log(obj2[0]);