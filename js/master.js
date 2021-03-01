// (1)Il computer deve generare 16 numeri casuali tra 1 e 100.
// (2)I numeri non possono essere duplicati
// (3)In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// (4)L’utente non può inserire più volte lo stesso numero.
// (5)Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// (6)La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// (7)Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// (1)
// instauriamo una funzione che ci permetta di creare randomicamente dei valori

function randomNumberGenerator( min , max)
{
    return Math.floor( Math.random () * (max-min)+min);
}


// usiamo una variabile temporanea e un console.log per verificare che tutto funzioni,
// commentiamo il tutto.
// var tmp = randomNumberGenerator( 1, 100);
// console.log(tmp);

// dobbiamo instaurare un ciclo per generare 16 numeri, e salvarli in un array.
// (1)fatto
var failNumberList = [];

for( i=0; i<16; i++)
{
    var generateNumber = randomNumberGenerator(1, 100);
    failNumberList.push(generateNumber);
}
console.log(failNumberList);