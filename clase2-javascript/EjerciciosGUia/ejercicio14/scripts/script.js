function validarNombre(nombre) {
    if (nombre.lenght != 0)
        return true;
    else
        return false;
}

function validarDni(dni) {

    var dniValidado = dni.replace(/\./g, "");
    if (isNaN(dniValidado))
        return false;
    else
        return true;
}



function validarDatos() {
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var dni = document.getElementById("dni");
    var sexo = document.getElementById("sexo");

}