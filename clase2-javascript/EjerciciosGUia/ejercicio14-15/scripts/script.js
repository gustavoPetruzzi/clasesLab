function validarNombre(nombre) {
    if (!nombre.value == "")
    {
        alert(nombre.value);
        return true;
    }
    else
    {
        //nombre.style.backgroundColor = "#ff0000";
        //alert("vacio");
        return false;
    }
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
    if(validarNombre(nombre) == false)
        nombre.style.backgroundColor ="#ff0000";

}