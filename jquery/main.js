$(document).ready(function()
{
    console.log($(".titre").html("coucou"))

    $("p:last").css("color", "red")
    $("p:last").css({"color": "red", "background-color": "cyan"})

    let nombre = $("#nbr")

    let nbrA = $("nombreA")
    let nbrB = $("nombreB")
    let nbrC = $("nombreC")
    $(nombre).change(function()
    {
        console.log (nombre.val())
    })

    $("#add").click(function()
    {
        let result = parseInt($("#nbrA").val()) + parseInt ($("nbrB").val())
        $("#resultat").html(result);
    })

    // let maj = $("maj").html();
    // $("#maj").html(maj.toUpperCase());

    // var chaine = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quos quas magnam, quod quaerat odit officiis, inventore ipsa possimus perferendis qui molestiae modi repellendus eaque facere? Optio cum beatae hic!";
    // document.write(chaine+"<br>");
    // document.write(chaine.toUpperCase());

    // met le text en majuscule ^ en javaScript mais pas en jquery

    // $("#list").append("<li>Paul</li>");

    let stagiaire = ["Kévin", "Eric", "Mickael", "tony", "Manu", "Renaud"]
    for ( let index = 0; index < stagiaire.length; index++)
    {
        $("#list").append("<li>" + stagiaire[index] + "</li>")
    }

    for ( let index = stagiaire.length - 1; index >= 0; index--)
    {
        $("#list").append("<li>" + stagiaire[index] + "</li>")
    }
})
