class Cliente{
    constructor (nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
    
    }
    
    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
    imprimirSaldo() {
        return `Hola ${this.nombre}, tu saldo es: ${this.saldo}`;
    }

    retiraSaldo(retiro) {
        this.saldo -= retiro;
    }
    static bienvenida(){
        return `Bienvenido al cajero`;
    }
    
    }
    
    
    

    
    //herencia

    class Empresa extends Cliente{

        constructor(nombre,saldo,telefono,puseto){
            //super busca los parametros de la clase que va heredar del constructor padre
            super(nombre,saldo)
            this.nombre = nombre;
            this.saldo = saldo; 
            this.telefono = telefono;
            this.puseto = puseto;
        }
        static bienvenida(){ //rescribir el metodo
            return `Bienvenido al cajero`;
        }
    }

    
    
    const sergio = new Cliente('sergio',700000);
        
    const empresa = new Empresa('sersk8',70.000,22555,'desarrollador de videojuegos');
console.log(empresa);
    console.log (sergio.mostrarInformacion());
    console.log(Cliente.bienvenida());
    console.log(Empresa.bienvenida());