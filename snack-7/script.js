// Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

const N = Number.parseInt(prompt('scrivi un numero'), 10);
if(N > 20 || N < 1 || Number.isNaN(N)){
    N = 12
}

for (let index = 0; index < N; index++){
    const tempArray = [];

    for (let index= 0; index < 10; index++){
        tempArray.push(Math.floor(Math.random()* 100) +1);
    }

    console.log(tempArray)
}