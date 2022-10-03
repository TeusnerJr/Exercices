let boolean = true
let string = "abc"

let unChiffre = 24 + 5;
console.log(unChiffre)
let chaine = "Je suis une chaine de caractère"
console.log(chaine)
let nouvelleChaine ="chaine précédente :" + chaine
console.log(nouvelleChaine);

let chiffre1 = 10;
let chiffre2 = 10;

console.log(chiffre1**chiffre2);

chiffre1++;

console.log(chiffre1);

let total = 1;
let x = 3;
let y = 5;

total*=x;

console.log(total)

if (x < y) {
    console.log("x est inférieur à y")
} else {
    console.log("x est supérieur à y")
}

if (!x) {
    console.log("x doesn't exist")
    } else {
    console.log("x is true")
    }

if (x === y) {
    console.log("True !")
} else {
    console.log("false !")
}

/** || les 2 barres correspondent à un ou 
&& corespond à et */

if (x === y || x<= 3) {
    console.log("True !")
} else {
    console.log("false !")
}

function faireQuelqueChose() {
    console.log("Je fais un truc")
    console.log("Trop cool")
}
faireQuelqueChose();

const faireUneTache =(tache) => {
    console.log("Je fais : " + tache);
}

faireUneTache("les courses")

(function () {
    console.log("Je me joue toute seul");
}())

(() => {
    console.log("Je me joue aussi toute seule")
})()

let calculatrice = 0;
let a;

function addition(a) {
    calculatrice += a;
    return calculatrice;
}

function soustraction(a) {
    calculatrice -= a;
    return calculatrice;
}