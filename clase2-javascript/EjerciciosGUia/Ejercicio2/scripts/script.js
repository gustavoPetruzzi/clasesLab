window.onload = function() {
	var meses = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
	for (var i = 0; i < meses.length; i++) {
		document.write(meses[i] + " " + (i+1));
		document.write("<br>");
	};
}