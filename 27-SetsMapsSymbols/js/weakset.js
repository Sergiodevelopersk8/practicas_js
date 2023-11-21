/**
 * set debil
 * WeakSet son colecciones de objetos solamente. No pueden contener valores arbitrarios de cualquier tipo, como pueden hacerlo los Set . 
 * El WeakSet es débil, 
 * lo que significa que las referencias a objectos en un WeakSet se mantienen débilmente.
 * */
const weakset = new WeakSet();

const cilente  = {
    nombre:'Sergio',
    saldo:100
} 

weakset.add(cilente);

console.log(weakset);

/**Cual es la diferencia entre set y wekset
 * el set almacena cualquier tipo de valor
 * el weakset solo almacena objetos, no son iterables y no existe size
 */