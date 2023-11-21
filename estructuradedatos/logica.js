function subAlg(a,b){
    

let value = 0;

// while(a>b){
//     b++;
// value++;
// }

// for(b; a > b  ; b++){

// value++;
// }
for(a; a > b  ; a--){

value++;
}

return value;
}

function mulAlg(a,b){

    let value = 0;
    
    // while(a){
    //     a--;
    //     value+=b;
    // }

    for(a; a > 0  ;a--){

        value+=b;
        }
return value;
}
function divAlg(a,b){

    let value = 0;
    
    // while(a>=b){
    //     
    //     value++;
    // a-=b;
    // }

    for(a; a >=b; a -=b ){

        value++;
        
        }
console.log("7 / 3 = " + value + "("+a+")");
return value;
}

function powAlg(a,b){

    let value = 1;
    
    // while(b){
    //     
    //     value*=a;
    // b--;
    // }

    for(b; b>0; b-- ){

        value*=a;
        
        }
return value;
}

function factorial(a){
    let value = 1;
    for(let i=1; i<=a;i++){
        value*=i;
    }
    return value;
}

function veryfyprime(number){

let prime = true;
for (let index = 2; index < number/2 && prime; index++) {
    if(number % index ===0){
        prime = false;
    }
}

if(prime){
    console.log("es primo");}
    else{
        console.log("no es primo " );

    }
return number;
}


function numberperfect(number){
    let value = 0;
    for (let index = 1; index < number; index++) {
        if(number % index === 0){
            value+=index;
        }
        
    }
    if(value === number){
        console.log(number + " es perfecto");
    }
    else{
        
        console.log(number+ " no es perfecto");
    }

    return number;
}
function amigos(a, b){
    let sumA = 0;
    let sumB = 0;
    for(let i=1; i<=a/2;i++){
        if(a % i === 0){
            sumA +=i;
        }
    }
    for(let i=1; i<=b/2;i++){
        if(b % i === 0){
            sumB+=i;
        }
    }
    if((a===sumB)&&(b===sumA)){
        console.log(a + " y " + b +" son amigos");
    }
    
    else{
        console.log(a + " y " + b +" no son amigos");
    }
}


function numeroguay(num){
    let sum = 0;
    let resultado = false;
  
for(let i=1; i < num && resultado== false;i++ ){
    sum += i;
    if(sum === num){
        resultado = true;
    }
}
if(resultado===true){
    console.log(num + " es guay");

}
else{
    console.log(num + "  no es guay");

}
}

console.log("5 - 1 = " + subAlg(5,1));
console.log("5 * 3 = " + mulAlg(5,3));
divAlg(7,3);

console.log("2 ^ 3 = " +  powAlg(2,3));
console.log("5 factorizacion = " +  factorial(5));
veryfyprime(100);
numberperfect(29);
amigos(1184,1210);
numeroguay(10);