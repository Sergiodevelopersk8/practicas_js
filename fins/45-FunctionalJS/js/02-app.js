
/*funciones como argumentos  */
const suma = (a,b) => a + b;

const multiplicar = (a,b) => a * b;

const sumaroMultiplicar = fn => fn (10,20);

alert(sumaroMultiplicar(suma));
alert(sumaroMultiplicar(multiplicar));