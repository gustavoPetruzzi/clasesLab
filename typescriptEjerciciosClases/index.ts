window.onload = function() {
    let miMotor:motor = new motor(150, "v8");
    let accesorios:accesorio[] = [new accesorio(), new accesorio()];
    let miCamion = new camion(150000, miMotor, "scania", "truchi",accesorios, "corto", true);

    function encendido(estado:boolean, motor:string){
        console.log("encendido");
    }
    miCamion.motor.encender(encendido);
    miCamion.motor.apagar(function(estado:boolean, motor:string){
        console.log("apagado");
    });
    console.info(miCamion);
}

class motor {
    potencia:number;
    tipo:string;

    constructor(potencia:number, tipo:string){
        this.potencia = potencia;
        this.tipo = tipo;
    }

    public encender( callback:(estado:boolean, motor:string)=>void){
        window.setTimeout(() => {callback(true, this.tipo);}, 3000);
    }
    public apagar( callback:(estado:boolean, motor:string)=>void){
        window.setTimeout(() => {callback(true, this.tipo);}, 3000);
    }
}

class vehiculo {
	private _precioBase: number
	protected _motor: motor
	marca: string
	modelo: string
	private listaAccessorios: accesorio[]


    public constructor(precioBase:number, motor:motor, marca:string, modelo:string, listaAccesorios:accesorio[]){
        this._precioBase = precioBase;
        this._motor = motor;
        this.marca = marca;
        this.modelo = modelo;
        this.listaAccessorios = listaAccesorios;
    }

    get precioBase(): number{
        return this._precioBase;
    }
    set precioBase(precio){
        this._precioBase = precio;
    }

    get motor():motor{
        return this._motor;
    }
    set motor(motor){
        this._motor = motor;
    }


    get listaAccesorios():accesorio[]{
        return this.listaAccesorios;
    }
    set listaAccesorios(lista){
        this.listaAccesorios = lista;
    }


    public precioTotal():number{
        return (this.precioBase * 1.08);
    }

    public agregarAccesorio(...accesorios:accesorio[]){
        this.listaAccesorios = this.listaAccesorios.concat(accesorios);
    }
}


class camion extends vehiculo{
    public largo:string;
    public cuatroXcuatro:boolean;
    
    constructor(precioBase:number, motor:motor, marca:string, modelo:string, listaAccesorios:accesorio[],largo:"corto" | "mediano" | "largo",cuatroXcuatro:boolean){
        super(precioBase, motor,marca, modelo, listaAccesorios);
        this.largo = largo;
        this.cuatroXcuatro = cuatroXcuatro;
    }

}

class accesorio{
    public id:number;
    public nombre:string;
    construct(id:number, nombre:string){
        this.id = id;
        this.nombre = nombre;
    }
}