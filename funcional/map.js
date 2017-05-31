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
//function map y filter recibe elemento(mascota), indice, array
function crack(mascota){
    return mascota.nombre;
}

nombres = mascotas.map(crack);

console.info(nombres);
