// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

const pairArray =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let somma = 0;

for( let index = 0 ; index < pairArray.length ; index++){

    if (index % 2 == 0)
        somma += pairArray[index];
}

console.log(pairArray, somma)

