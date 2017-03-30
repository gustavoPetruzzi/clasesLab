window.onload = function() {

	var numeroIngresado = prompt("Ingrese un numero");
	if(numeroImpar(numeroIngresado))
	{
		alert("El numero "  + numeroIngresado + " es impar");
	}

}

function numeroImpar(numero){
	if(numero % 2 == 0)
	{
		return false;
	}
	else
	{
		return true;
	}
}