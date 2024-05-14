// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l'altro di verde. Partendo da un array di numeri, stampiamo nell'id rosso i numeri dispari e in verde i numeri pari.


// const newDivRed = document.createElement('div');
// const newDivGreen = document.createElement("div");

// const form = document.querySelector('.container');

// container.appendChild(newDivRed);

const newDivRed = document.createElement("div");
const newDivGreen = document.createElement("div");



// aggiunge elementi al DOM

// seleziona l'elemento genitore
const container = document.querySelector(".container");

container.appendChild(newDivRed);
container.appendChild(newDivGreen);

// imposto degli attributi

newDivRed.setAttribute("class", "red");
newDivGreen.setAttribute("class", "green");

// creiamo un array

const numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

