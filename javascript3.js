//prompt:
//let p = parseInt(prompt("Adj meg egy számot! ", "Mondjuk legyen 5"));
//VAGY 
/*let p = prompt("Adj meg egy számot! ", "Mondjuk legyen 5");
p = Number(p);
console.log(p);
console.log(typeof p);

let q = 5;
console.log(p+q); // cast nélkül 55
console.log(typeof (p+q)) // string cast nélkül string
*/

/*let i = prompt("Kérlek, add meg i értékét!");
i = Number(i); //típuskényszerítés, konverzió
while (i) { // < = > while (i != 0) , MINUSZRA KIAKAD??
    console.log(i);
    i--;
}

alert(`na ezt itt befejeztem, az i értéke ${i}`); // ellenőrzés, magunknak
i++
alert(`értéke ${i}`);*/
// if else shorthand
let j = prompt("Kérem írja be az életkorát!", 18);
let k = (j<3) ? "hello bébi" : 
        (j<6) ? "hello gyerek" :
        (j<18) ? "hello fiatal felnőtt" : "minden más";
        alert(k);
