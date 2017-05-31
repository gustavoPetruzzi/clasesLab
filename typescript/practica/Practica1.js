// Tipos
//var batman = "Bruce";
var batman = "Bruce";
//var superman = "Clark";
var superman = "Clark";
//var existe = false;
var existe = false;
// Tuplas
//var parejaHeroes = [batman,superman];
//var villano = ["Lex Lutor",5,true];
var parejaHeroes = [superman, batman];
var villano = ["Lex Lutor", 5, true];
// Arreglos
//var aliados = ["Mujer Maravilla","Acuaman","San", "Flash"];
var aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
//Enumeraciones
//var fuerzaFlash = 5;
//var fuerzaSuperman = 100;
//var fuerzaBatman = 1;
//var fuerzaAcuaman = 0;
var Fuerza;
(function (Fuerza) {
    Fuerza[Fuerza["Acuaman"] = 0] = "Acuaman";
    Fuerza[Fuerza["Batman"] = 1] = "Batman";
    Fuerza[Fuerza["Flash"] = 5] = "Flash";
    Fuerza[Fuerza["Superman"] = 100] = "Superman";
})(Fuerza || (Fuerza = {}));
var flash = Fuerza.Flash;
var Fbatman = Fuerza.Batman;
var acuaman = Fuerza.Acuaman;
// Retorno de funciones
function activar_batiseñal() {
    return "activada";
}
function pedir_ayuda() {
    console.log("Auxilio!!!");
}
// Aserciones de Tipo
var poder = 100;
var largoDelPoder = poder.length;
console.log(largoDelPoder);
var x = "juan";
//Asercin de tipo
x.length;
