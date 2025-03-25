const restaurantApp = {

};

restaurantApp.platillos = [
    {
        platillo: 'Pizza',
    precio:25
},
    {
        platillo: 'Hamburguesa',
    precio:20
},
    {
        platillo: 'Hot dog',
    precio:20
},

];


restaurantApp.funciones = {
    mostrarMenu: platillos => {
        console.log(`Bienvenido a nuestro menu`);

        platillos.forEach((platillo,index)=>{
            console.log(`${index}:${platillo.platillo} ${platillo.precio}`);
        });


    },
    ordenar: id => {
        console.log(`tu platillo: ${restaurantApp.platillos[id].platillo}`);
    },
    agregar: (platillo,precio) =>{
        const nuevo ={
            platillo,
            precio,

        };
        restaurantApp.platillos.push(nuevo);
    }
}



restaurantApp.funciones.ordenar(1);
restaurantApp.funciones.agregar('pambazo',30)

const {platillos} = restaurantApp;
restaurantApp.funciones.mostrarMenu(platillos);


