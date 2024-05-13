// Crea un array vuoto.
//  Chiedi per 6 volte all'utente di inserire un numero,
//  se è dispari inseriscilo nell'array.

const listNumber =['']

for (let i = 0; i < 6; i++){
    const numberEl =prompt('Type a Number')

    if(numberEl % 2 == 1)
        listNumber.push(numberEl)
}