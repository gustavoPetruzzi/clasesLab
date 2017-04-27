function Saludar()
{
    //alert("Hola Mundo!!!!1111!!!1hola"); alerta para hacer salto de linea \n 
    //console.log("Hola Mundo!!!!1111!!!1"); consola de desarrollador
    // DOCUMENT---> Pagina que llamo al .js
    //document.write("Hola Mundo!!!!1111!!!1<br>"); // Escribo en la ventana del navegador
    //document.write("Hola Mundo!!!!1111!!!1");
    //var nombre = prompt("Ingrese su nombre");  
    /*
        VALIDO NUMEROS
    var numero1 = parseInt(prompt("Ingrese un numero"));
    var numero2 = parseInt(prompt("Ingrese un numero"));
    if(!isNaN(numero1 + numero2))
    {
        confirm("la suma es " + (numero1 + numero2));
    }
    */

    var nombre = document.getElementById("nombre").value; // Para traerme el contenido 

    var txtNombre = document.getElementById("nombre"); //traigo todo el input
    var txtSaludo = document.getElementById("saludo");
    txtSaludo.value = "hola " + txtNombre.value;
    
    
        

}