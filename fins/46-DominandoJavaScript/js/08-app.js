// self


window.nombre = 'monitor de 20 pulgadas';

const producto ={

    precio:30,
    disponible:true,
    mostrarInfo:function(){
        return`El producto: ${self.nombre} `
    }
}

console.log(producto.mostrarInfo())

