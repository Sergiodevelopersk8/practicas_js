//class declarecion
class Cliente{
constructor (nombre,saldo,puetso){
this.nombre = nombre;
this.saldo = saldo;
this.puetso = puetso;
}

mostrarInformacion(){
    return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
}


}


const sergio = new Cliente('sergio',700000,'programador');


console.log(sergio.mostrarInformacion());

//class expresions
const Cliente2 = class{
    constructor (nombre,saldo,puetso){
        this.nombre = nombre;
        this.saldo = saldo;
        this.puetso = puetso;
        }
        mostrarInformacion(){
            return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
        }
}

const sergio2 = new Cliente2('sergio',700000,'programador');
console.log (sergio2.mostrarInformacion());  