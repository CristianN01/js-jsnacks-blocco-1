// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.

const invitedList = ['Mario','Davide','Luca','Alessio','Giorgio']
const yourName = prompt('Digita il tuo nome')

if(invitedList.includes(yourName)) {
    console.log('Follow Me')
} else {
    console.log('U are not invited')
}

