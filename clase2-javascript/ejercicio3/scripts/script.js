
/*
window.onload = function(){
    var parrafos = document.getElementsByTagName("p"); // array con referencias de la pagina web.
                // document.getElementsByClassName() // se puede hacer otro array
parrafos[0].innerHTML ="Primer parrafo";
parrafos[1].innerHTML ="Segundo parrafo";
parrafos[2].innerHTML ="Tercer parrafo";
for(i=0; i< parrafos.length; i++)
{
    parrafos[i].innerHTML ="Parrafo Nº" + (i +1);
} 

}
*/

window.onload = function(){
    contador = 0;
    var txtSarasa = document.getElementById("texto");
    var txt2 = document.getElementById("texto2");

    /*
    txtSarasa.onblur = function() { // cambia cuando pierde foco
    contador++;
    txt2.value = contador;
    }
    */

    /*
    txtSarasa.onchange = function() { // cambia cuando pierde foco
    contador++;
    txt2.value = contador;
    }
    */

    /*
    txtSarasa.onkeydown = function() { 
    contador++;
    txt2.value = txtSarasa.value;
    }
    */

    txtSarasa.onkeyup = function() { 
    contador++;
    txt2.value = txtSarasa.value;
    }
    


    /*
    onkeydown-> mantener apretada
    onkeyup -> apreto y suelto
    */
}



