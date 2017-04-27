function sumar()
{
    var numero1 = document.getElementById("numero1");
    var numero2 = document.getElementById("numero2");
    var resultado = parseInt(numero1.value) + parseInt(numero2.value);
    if(!isNaN(resultado))
    {
        document.getElementById("resultado").value = resultado;
    }
    else
    {
        alert("numeros, capo");
    }
    
}