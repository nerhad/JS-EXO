
//exo Créez une fonction qui retourne l'addition de ces deux valeurs
const n1 = 4;
const n2 = 5;

function numb(a, b){
    return n1 + n2;
};
numb
console.log(numb());



//exo Créez une fonction qui prend en paramètre la valeur i.
const i = 5;
function square(){
    return i * i;

};
square
console.log(square());



//exo En utilisant la methode 'map', mettre la chaine de caractère en majuscule

const beatles = ["paul", "john", "ringo", "george"];

function rockgroupe(str){
    return beatles.map(v => v.toUpperCase());;

};
rockgroupe
console.log(rockgroupe());



//exo Créez une fonction qui renvoie la somme de chaque éléments du tableau si celui-ci est positif.

const array2 = [-2, 4, -5, 3, 6];
function addPositiveNumber(tableau) {
    let positif = [];
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] > 0) {
            positif.push(tableau[i]);
        }
    }
    return positif;
};
console.log(addPositiveNumber(array2));


//exercice la somme d'un tableau
const t = [3, 5, 6, 2];

function somme(m){
 s = 0
  for (let i = 0; i < m.length; i++) {
  s += m[i];
}
  console.log(s);
};
somme(t);


//Mot inversé
//créez une fonction qui prend en paramètre une chaine de caractère.
function reverseString(s) {
	return s.split('').reverse().join('');
};
console.log(reverseString('simplon'));



//exercice la premiere lettre d'un mot en majuscule
function capitalize(first){
    return first.charAt(0).toUpperCase() + first.slice(1).toLowerCase();;
};
console.log(capitalize("SimPloN"));




//Créez une fonction qui prend un parametre 'r' et qui
//renvoie le périmetre d'un cercle.

function circle(r){
    return 2 * Math.PI * r;
};
console.log(circle(1));


function oddeven(v){
    if ( v % 2 == 0) {
        return true;
    }else{
        return false;
    } 
};
console.log(oddeven(2));



//-----------------------------EXO SUP-------------------------------------

//Tri à bulle
//Classé les éléments du tableau suivant par ordre croissant.
//Affichez le tableau classé.



const tab = [3, 2, 6, 4, 8, 10];
tab.sort(function(a, b) {
  return a - b;
});

console.log(tab);