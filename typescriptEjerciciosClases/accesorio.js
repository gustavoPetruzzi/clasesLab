var accesorio = (function () {
    function accesorio() {
    }
    accesorio.prototype.construct = function (id, nombre) {
        this.id = id;
        this.nombre = nombre;
    };
    return accesorio;
}());
