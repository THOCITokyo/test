$(document).ready(function()
{
// ce que j'ai fait moi pour l'exo =>

// let arrayA = [prenom, nom, moyen]

// let prenom = ["Axcel", "Thomas", "Mathieu", "Mathias", "Enzo"]
// let nom = ["a", "b", "c", "d", "e"]
// let moyen = [10, 12, 11, 16, 14]

// for ( let index = 0; index < stagiaire.length; index++)
// {
//  $("#prenom").append("<input>" + stagiaire[index] + "</li>")
// }

// for ( let index = stagiaire.length - 1; index >= 0; index--)
// {
//    $("#prenom").append("<input>" + stagiaire[index] + "</li>")
// }

// ce qui fallais faire =>

    var btn = $("#btn")
    var studient = [];
    var allStudients = [];
    var mean = [];

    $("#error").hide();

    btn.click(function()
    {
        let inputNbr = parseInt($("#mean").val())
        if ( inputHasNotThisValue("", $("#firstName")) && inputHasNotThisValue("", $("#name")) && inputNbr >= 0 && inputNbr <= 20)
        {
            studient.push($("#firstName").val(), $("#name").val(), inputNbr);
            allStudients.push(studient);
            mean.push(inputNbr);
            tableUpdate();
            valueReset();
            console.log ("ok")
            //calcMoyenne(res);

            if( allStudients.length > 1)
            {
                $("#meanClass").html(meanClass())
            }

        }
        else
        {
            $("#error").show().fadeOut(5000);
            valueReset();
        }
    })

    function inputHasNotThisValue(valuecheck, input)
    {
        if(input.val() != valuecheck)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    function tableUpdate()
    {
        $("#tableau .trRemove").remove();
        allStudients.forEach(element => $("#tableau").append("<tr class='trRemove'><td>" + element[0] + "</td><td class='trRemove'>" + element[1] + "</td><td class='trRemove'>" + element[2] + "</td></tr>"))
    }

    function valueReset()
    {
        studient = [];
        $("#firstName").val("")
        $("#name").val("")
        parseInt($("#mean").val(0))
    }
    //function calcMoyenne(res){
    //     let b = mean.length;
    //     for(let i = 0; i < b; i++){
    //         res = res + mean[i];
    //     }
    //     moyenne = res / b;
    //     $("#meanClass").html(moyenne);
    //     console.log(mean);
    // }

    let tab = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    function meanClass()
    {
        var meanNote = mean.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
        return meanNote / mean.length;
    }

 })

 // Récuperer le boutton
 // Stocker les données de l'élève
 // Stocker les élèves
 // Stocker toutes les notes de élèves

 // à partir de maintenant on click

 // Vérifie les données

 // Si les données sont bonnes on fait =>

 // on met les information d'un élève dans un tableau
 // on met la note de l'élève dans un tableau
 // on met le tableau dans le tableau qui stocke les élèves
 
 // Si elles ne sont pas bonnes on fait =>

 // On retourne un message d'erreur

 


