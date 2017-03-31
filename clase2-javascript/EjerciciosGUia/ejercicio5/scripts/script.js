function factorial(numero) {
	var respuesta;
	if(numero == 0)
	{
		return 1;
	}
	respuesta = numero * factorial(numero -1);
	return respuesta;

}


var numeroPedido;
do {

	numeroPedido = prompt("Ingrese un numero: ");


}
while( numeroPedido < 0);
document.write(factorial(numeroPedido));