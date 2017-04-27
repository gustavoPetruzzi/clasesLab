window.onload = function() 
{
	var numerosPrimos = [];
	numerosPrimos.push(2);
	i= 2;
	while(numerosPrimos.length != 20)
	{
		for (var j = 2; j < i; j++) 
		{
			var esPrimo = true;
			if( i % j == 0)
			{
				esPrimo = false;
				break;
			}		
		}

		if(esPrimo)
		{
			numerosPrimos.push(i);
		}
		i++;
	}
	document.write("<p>");

	for (var i = 0; i < numerosPrimos.length; i++) 
	{
		document.write(numerosPrimos[i] + "<br>");
	
	}
	document.write("</p>");

}