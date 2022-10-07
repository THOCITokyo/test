console.log ("hello word");

let x = 1;
var y = 3;

console.log (x+y);

let c = 5;
const k = 10;

console.log (k-c);

let w = 9;
w = 10;

console.log (w);

const s = 10;
// s=78; une erreure bloque la suite du code il est impossible de réinsigner une constente;

console.log (s);

x=y

console.log (x);

console.log (w/2.5);

console.log (w/y);

console.log (w*y);

console.log (w%y);

//Des structures conditionnelles if=si si w=k alorsj'écris bonjour

if (k==w){
    console.log ("Bonjour")
};

// if (...condition...){...expréssion} bloc de condition

// == -> condition d'égalité
// === -> condition d'égalité stricte

console.log (55+"j");
console.log (55+"55");
console.log (55+55);

let bonjour = "salut ";
let bonjour02 = "les gars";

console.log (bonjour+bonjour02);

//condition non s'écrit: != 
if (c!=x){
    console.log (c+" n'est pas égale à "+x);
}

let bool = true

bool = false;

console.log (bool);

console.log  (!bool);

if (!bool){
    console.log (bool = false)
};

// else

if (!bool){
    console.log ("bool est égale à false");
}else{
    console.log ("bool n'est pas égale à true");
};

// > ou < if (w < c)

if (w < c){
    console.log ("w n'est inférieur à c");
}else{
    console.log ("w est supérieur à c");
};

// les querie selector

var titre = document.getElementsByClassName("titre");
console.log (titre);
var secondeTitle = document.getElementById("h2-modif");
console.log (secondeTitle);
secondeTitle.innerHTML="Bonjour";

let paragraphe = document.querySelector (".paragraphe");
console.log (paragraphe);

var parentImage = document.querySelector (".parent-image");
var image = document.createElement ("img");

image.setAttribute ("src","/image/chat01.jpg");
parentImage.appendChild (image);

// Fonctions

function addition (nombreA , nombreB){
    let résultat = nombreA + nombreB;
    console.log (résultat);
}

addition (1000 , 2000)

function addition (nombreA , nombreB){
    let résultat = nombreA + nombreB;
    console.log (résultat);
}

addition (100 , 2000)

function soustraction (nombreA , nombreB){
    let résultat = nombreA + nombreB;
    return résultat;
}

let trueResultat = soustraction (50 , 27);
console.log (trueResultat);

function estCeQueJeSuisGrand (taille)
{
if (taille < 169){
        console.log ("Je suis petit");
    }else{
        console.log ("Je suis grand");
    }

};
estCeQueJeSuisGrand(174);
//vérifie la taille, si elle est plus grande que 1.70 "Je suis plus grand" si elle est plus petite que 1.70 "Je suis plus petit"

function AiJeUneDivisionSansReste(nombreA , nombreB)
{
    let division = nombreA % nombreB
if (division > 0){
    console.log ("Elle a un reste.");
}else{
    console.log ("Elle n'a pas de reste.");
}
}
AiJeUneDivisionSansReste (10/5)

// var et let

let maVariable = 10;

// maVariable = true

var newVariable = 12;

// let maVariable = 10

console.log (newVariable);
var newVariable = 15;
console.log (newVariable);
newVariable = "gorge";
function jeTestMonLet ()
{
    let test = "joconde";
    var maVariableVar = "Jean-Pierre";
    if (true)
    {
        console.log (test)
    }
}
// console.log (test);
jeTestMonLet ()

function jeTestEncoreMonLet ()
{
   let test = "Léonard de Vinci";
   console.log (test);
}
jeTestEncoreMonLet ()

function jeReTestEncoreMonLet ()
{
   let test = "Jean-Pierre";
   console.log (test);
}
jeReTestEncoreMonLet ()

function letTest() {
    let x = 31;
    if (true) {
      let x = 71;  // c'est une variable différente
      console.log(x);  // 71
    }
    console.log(x);  // 31
  }
  
letTest ()

function varTest() {
    var x = 31;
    if (true) {
      var x = 71;  // c'est la même variable !
      console.log(x);  // 71
    }
    console.log(x);  // 71
  }

varTest ()

// Switch

function testNombre (nombre)
{
    switch (nombre)
    {
        case 0:
            console.log ("Je suis le nombre 0");
            break;
        case 1:
            console.log ("Je suis le nombre 1");
            break;
        case 2:
            console.log ("Je suis le nombre 2");
            break;
        case 3:
             console.log ("Je suis le nombre 3");
            break;
        default:
            console.log ("Je suis strictement superieur à 3");
    }
}

testNombre ()

// Les tableaux

var myFirstArray = [];
var mySecondArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
var un = mySecondArray [0];
console.log (un);
console.log (mySecondArray.length);
console.log (mySecondArray[3]+mySecondArray[0]);
console.log (mySecondArray [4652]);

myFirstArray.push ("Jeremy");
console.log (mySecondArray);

myFirstArray.push ("kevin.B");
console.log (mySecondArray);

myFirstArray.unshift();
console.log (mySecondArray);

myFirstArray.pop ();
console.log (mySecondArray);

myFirstArray.shift ();
console.log (mySecondArray);

console.log (mySecondArray.indexOf (2));

// console.log (mySecondArray.indexOf ("banana"));

mySecondArray.splice (1 , 1);
console.log (mySecondArray);

let banane = "Une banane";
console.log (banane [5]);

//  Les objets

var voiture = 
{
    marque: "Renault",
    annee: "2005",
    puissance:  125,
    afficher: function()
    {
        console.log ("Cette voiture est une " + this.marque + ", de l'année " + this.annee + ", elle à " + this.puissance + "chevaux.");
    },
}

voiture.afficher();
console.log (voiture.marque);
console.log (voiture.annee);
console.log (voiture.puissance);

//  Les boucles

var iteration = 0;
while (iteration < 7)
{
    console.log (iteration)
    iteration ++ // ont peut aussi écrire iteration +=2 ou encore iteration = iteration + 1
}

//  Boucle for (for loop)

for (let i = 0; i < 12; i ++)
{
	console.log(i);
}

//  for (let index = 0; index < array.length; index++) {
//  const element = array[index];
//  for séléctionner le 2 ème qui ce nomme for et tout a droit de ce for il y a écris for loop et la formule est spawn il reste plus que à renseigner nos données


for (let j = 0; j < mySecondArray.length; j ++)
{
	console.log(mySecondArray[j]);
}

//  BoucleDo
let boucleDo = 5;

do {
  console.log(boucleDo);
  boucleDo++;
} while (boucleDo < 5);

let iterationBreak = 0;

while(iterationBreak < 80){
  iterationBreak++;
  console.log(iterationBreak);
  iterationBreak++;
  if(iterationBreak < 47){
    break;
  }
}

console.log (iterationBreak);

function factorielle (nbr)
{
    var factorielle = 1;
    for ( let k = 1; k <= nbr; k ++)
    {
        factorielle *= k;
    }
    console.log (factorielle);
}

function factor (nbr)
{
    if (nbr === 0)
    {
        return 1;
    }
    return nbr * factor (nbr - 1);
}

console.log ( factor (4));

var tableauA = ["Jeannette", "Alphonse", "ludwig"];
var tableauB = ["Paul", "Frédéric", "Jacques", "Roger"];

function tab (tableauA, tableauB)
{
    if (tableauA.length === tableauB.length)
    {
        for (let index = 0; index < tableauB.length; index ++)  //  code pour concaténer
        {
            console.log (tableauA[index] + ' ' + tableauB[index])
        }
    }
    else
    {
        console.log ("Les tableaux n'ont pas la même taille.")
    }
}
tab(tableauA, tableauB)