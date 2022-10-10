// ET et OU

let x = 10
let y = 9

// OU ( || = OU )

if ( x == 10 || y == 5 )
{
    console.log ( true )
}
else
{
    console.log ( false )
}

// ont dit que si le if (x) est = à let x ou que if (y) est = à let y le résultat sera true mais aucun des deux if est pareille que l'un des 2 let le résultat sera false

// ET

if ( x == 10 && y == 5)
{
    console.log ( true )
}
else
{
    console.log ( false )
}
// ont dit que si le if (x) et if (y) sont = à let x et let y le résultat sera true mais si aucun des deux sont = alors le résultat sera false

// OU exlusif ( XOR )

if ( x == 10 ^ y == 5 )
{
    console.log ( true )
}
else
{
    console.log ( false )
}

// pareil que le premier mais la il fautimpérativement que l'un des 2 soit correcte

// NAND

if ( x != 10 && y != 9)
{
    console.log ( true )
}
else
{
    console.log ( false )
}

// pareil que le ET mais aucun des 2 dois être correcte

// Bonnes pratiques

// A chaque changement de bloc { } il est nécessaire il est indispensable de faire un TAB ( indentation )

// si une fonction retourne quelques chose elle doit commencer par :
// si elle retourne un BOOL par is... ou has...

// Le nom d'une fonction doit toujours refleter ce quelle fait.

// Une fonction doit faire une seule chose à la fois.

// Null et Undefined

// ctrl k c pour mettre en message caché le text séléctionner  ctrl k u pour le retiré

let nl = null;
console.log ( nl );

let element = document.getElementById ("paul");
console.log ( element );

// Undefined

let k;
console.log ( k );

if ( k === undefined )
{
    k = 12;
}
console.log ( k );

let button = document.getElementsByClassName ("exempleA")

// function myClick ( )
// {
//     console.log (" j'ai cliqué sur le bouton. ")
// }

// button[0].addEventListener ("click", myClick)

// button[0].addEventListener ("click", function()
// {
//     console.log ("jai cliqué sur le bouton")
// })

button[0].addEventListener('click', function(event)
{
	console.log("J'ai cliqué sur le bouton.")
    console.log(event)
})

let inputText = document.getElementById ("exempleB")

inputText.addEventListener ("change", function()
{
    console.log ("ok")
})

// AJAX

var buttonImage = document.getElementById ("send");
var image = document.querySelector ("img");

buttonImage.addEventListener("click", function()
{
    var AJAX = new XMLHttpRequest();
    AJAX.open ("GET", "https://api.thecatapi.com/v1/images/search", true);
    AJAX.responseType = "json";
    AJAX.send()
    AJAX.onload = function()
    {
        
        image.src = (this.response[0].url)
    }
})
// buttonImage.addEventListener("click", function()
// {
//     fetch ("https://api.thecatapi.com/v1/images/search")
//     .then (response => image.src = response.url)
// })

// Fonction fléchées

function add(nbrA, nbrB)
{
    console.log(nbrA + nbrB)
}

const arrowAdd = (nbrA, nbrB) =>
{
    console.log(nbrA + nbrB)
}
add(5, 6);
arrowAdd(5, 6);

var addArray = [1, 2, 3, 4, 5]
var addArrayTwo = [5, 7, 12, 4]

const mapArray = addArray.map(x => x + 1 );
console.log(mapArray)

const mapArrayTwo = addArray.map((x, i) => x + addArrayTwo[i]);
console.log(mapArray)

addArrayTwo.forEach(c => console.log(x));
const zeroArray = [5, 7, 8, 10];

function hasZero(element)
{
    if(element >= 4)
    {
    return true
    }
    return element == 0
}

console.log (zeroArray.every(hasZero));