var mascotas = [ 
    {
        nombre: "bobby",
        edad : 2
    },
    {
        nombre: "pancho",
        edad: 3
    },
    {
        nombre: "alfred",
        edad: 4
    }
];
function mayor(mascota){
    if(mascota.edad > 3){
        return true;
    }
}
var mayores = mascotas.filter(mayor);
console.log(mayores)