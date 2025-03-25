function Vendedor (nombre){
this.nombre = nombre;
this.sala = null;
}

Vendedor.prototype = {
    oferta:(articulo,precio) =>{
        console.log(`tenemos el siguiente articulo : ${articulo}, con el precio de : ${precio}`)
    },
    vendido: comprador =>{
        console.log(`vendido a : ${comprador}`);
    }
}


function Comprador (nombre){
    this.nombre = nombre;
    this.sala = null;
}
Comprador.prototype={
    oferta:(cantidad,comprador) =>{
        console.log(`${cantidad},  ${comprador}`)
    }
}

function Subasta (){
let compradores={};
return{
    registrar:usuario =>{
        compradores[usuario.nombre] = usuario;
        usuario.sala = this;
    }
}
}



//crear objetos

const sergio = new Comprador('sergio');
const abby = new Comprador('abby');
const vendedor = new Vendedor('vendedor autos');
const subasta = new Subasta()

subasta.registrar(sergio);
subasta.registrar(abby);
subasta.registrar(vendedor);



vendedor.oferta('play',500)
sergio.oferta(550,sergio)
vendedor.vendido('abby')