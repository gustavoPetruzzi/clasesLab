var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
window.onload = function () {
    var miMotor = new motor(150, "v8");
    var accesorios = [new accesorio(), new accesorio()];
    var miCamion = new camion(150000, miMotor, "scania", "truchi", accesorios, "corto", true);
    function encendido(estado, motor) {
        console.log("encendido");
    }
    miCamion.motor.encender(encendido);
    miCamion.motor.apagar(function (estado, motor) {
        console.log("apagado");
    });
    console.info(miCamion);
};
var motor = (function () {
    function motor(potencia, tipo) {
        this.potencia = potencia;
        this.tipo = tipo;
    }
    motor.prototype.encender = function (callback) {
        var _this = this;
        window.setTimeout(function () { callback(true, _this.tipo); }, 3000);
    };
    motor.prototype.apagar = function (callback) {
        var _this = this;
        window.setTimeout(function () { callback(true, _this.tipo); }, 3000);
    };
    return motor;
}());
var vehiculo = (function () {
    function vehiculo(precioBase, motor, marca, modelo, listaAccesorios) {
        this._precioBase = precioBase;
        this._motor = motor;
        this.marca = marca;
        this.modelo = modelo;
        this.listaAccessorios = listaAccesorios;
    }
    Object.defineProperty(vehiculo.prototype, "precioBase", {
        get: function () {
            return this._precioBase;
        },
        set: function (precio) {
            this._precioBase = precio;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(vehiculo.prototype, "motor", {
        get: function () {
            return this._motor;
        },
        set: function (motor) {
            this._motor = motor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(vehiculo.prototype, "listaAccesorios", {
        get: function () {
            return this.listaAccesorios;
        },
        set: function (lista) {
            this.listaAccesorios = lista;
        },
        enumerable: true,
        configurable: true
    });
    vehiculo.prototype.precioTotal = function () {
        return (this.precioBase * 1.08);
    };
    vehiculo.prototype.agregarAccesorio = function () {
        var accesorios = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            accesorios[_i] = arguments[_i];
        }
        this.listaAccesorios.concat(accesorios);
    };
    return vehiculo;
}());
var camion = (function (_super) {
    __extends(camion, _super);
    function camion(precioBase, motor, marca, modelo, listaAccesorios, largo, cuatroXcuatro) {
        var _this = _super.call(this, precioBase, motor, marca, modelo, listaAccesorios) || this;
        _this.largo = largo;
        _this.cuatroXcuatro = cuatroXcuatro;
        return _this;
    }
    return camion;
}(vehiculo));
var accesorio = (function () {
    function accesorio() {
    }
    accesorio.prototype.construct = function (id, nombre) {
        this.id = id;
        this.nombre = nombre;
    };
    return accesorio;
}());
