//coercion
//es igual a un cast

const numero1 = 20;
const numero2 = "40";

console.log(numero1 + numero2); //implicita

console.log(Number(numero2));//explicita


console.log(numero1.toString());

const pedido = [1,2,3,4,5];
console.log(pedido.toString());
console.log(JSON.stringify(pedido));