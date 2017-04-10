function agregarElemento(cadena, lista) {
    var list = document.getElementById(lista);
    var nuevo = document.createElement('li');
    nuevo.appendChild(document.createTextNode(document.getElementById(cadena).value));
    list.appendChild(nuevo);
}
