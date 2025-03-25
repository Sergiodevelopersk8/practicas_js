//hoisting

/*
Function Declaration (Declaración de Función)
Es cuando defines una función con la palabra clave function, seguida del nombre de la función.

js
Copiar
Editar


*/


function saludar() {
    console.log("Hola!");
}

saludar(); // Output: Hola!

/*
 Características:

Hoisting: Se eleva al inicio del ámbito en el que está definida, lo que significa que puedes llamarla antes de su declaración en el código.
Tiene un nombre obligatorio.
 */

saludar(); // Funciona aunque esté antes de su declaración

function saludar() {
    console.log("Hola!");
}





/* Function Expression (Expresión de Función)
 Es cuando asignas una función a una variable. */

 const saludar = function() {
    console.log("Hola!");
};

saludar(); // Output: Hola!


/*
Características:

No tiene hoisting: No puedes llamarla antes de su asignación.
Puede ser anónima (sin nombre) o tener un nombre para propósitos de depuración.
Se comporta como cualquier otra variable en términos de alcance.
*/

saludar(); // ❌ Error: Cannot access 'saludar' before initialization

const saludar = function() {
    console.log("Hola!");
};


/*

Tipo	Hoisting (puede llamarse antes de declararse?)
Function Declaration -> ✅ Sí
Function Expression	-> ❌ No

*/