function mostrarNombreApellido(nombre, apellido)
{
    apellido = (apellido.charAt(0)).toUpperCase() + apellido.substring(1);
    document.write(nombre.toUpperCase()+"," + apellido);
}


window.onload = function()
{
    var nombre = prompt("Ingrese su nombre");
    var apellido = prompt("Ingrese su apellido");
    mostrarNombreApellido(nombre, apellido);
}