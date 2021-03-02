// (1)Il computer deve generare 16 numeri casuali tra 1 e 100.
// (2)I numeri non possono essere duplicati
// (3)In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// (4)L’utente non può inserire più volte lo stesso numero.
// (5)Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// (6)La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// (7)Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.



// (1) instauriamo una funzione che ci permetta di creare randomicamente dei valori
function randomNumberGenerator( min , max)
{
    return Math.floor( Math.random () * (max-min)+min);
}
// (2)/(4)/(6) instauriamo una funzione che verifichi la presenza di un numero all'interno di un array di numeri. 
function numberCheck (val1, array)
{   
    var check = true;
    for(i=0; (i<array.length && check == true); i++)
    {
        if( val1 == array[i])
        {
            check = false;
        }
    }
    return check;
}

// (bonus) Trasformiamo il valore massimo in una variabile,
//         facciamo scegliere all'utente la difficoltà tramite l'immissione di un numero,
//         al numero corrisponde la modifica da apportare alla variabile.

var maxValue = parseInt(prompt("Scegli la difficoltà!(1: facile[100 numeri]. 2: medio[80 numeri] 3:Difficile[60 numeri])"))
while( maxValue !=1 && maxValue !=2 && maxValue !=3 )
{
    alert("inserire un numero tra 1, 2 ,3")
    maxValue = parseInt(prompt("Scegli la difficoltà!(1: facile[100 numeri]. 2: medio[80 numeri] 3:Difficile[60 numeri])"))
    if(isNaN(maxValue))
    {
        alert("Inserire un numero!")
    }
}

switch (maxValue) 
{
    case 1:
        maxValue = 100;
        alert("hai scelto la difficoltà facile!")
        break;
    case 2:
        maxValue = 80;
        alert("hai scelto la difficoltà media!")
        break;
    case 3:
        maxValue = 60;
        alert("hai scelto la difficoltà difficile!")
        break;
}
console.log(maxValue);

//completato con l'aiuto della santa Laura.


// dobbiamo instaurare un ciclo per generare 16 numeri, e salvarli in un array.
// (1)fatto
// (2)dobbiamo far in modo che il nostro ciclo, identifichi i numeri uguali e non li metta nell'arry,
//    dobbiamo far ripetere l'operazione finché la length dell'array non è pari a 15( sedici numeri).

var failNumberList = [];
var bombNumber = 16;
do {
    var generateNumber = randomNumberGenerator(1, maxValue);
    if(numberCheck(generateNumber , failNumberList))
    {
        failNumberList.push(generateNumber);
    }
    } while (failNumberList.length < bombNumber);

console.log(failNumberList);

// la mia idea per (2) non funziona

// (3)(6) Diamo all'utente la possibilità di inserire i suoi numeri,
//     dobbiamo fare un check, affinchè inserisca un numero compreso tra 1 e 100,
//     l'operazione deve essere eseguita un numero di volte pari alla quantità di numeri che mancano,
//     (in questo caso 100-16).
// (4) per far non far ripetere il numero all'utente si inseriscono i valori validi in un array,
//     in modo tale da verificare se il numero inserito non è già presente.
// (5) Si crea una condizione che dica al programma di avvertire l'utente che ha perso,
//     nel caso in cui, tramite un check, il numero inserito corrisponda ad uno nella lista di numeri generati casualmente.
// (7) Si crea un allert che dica all'utente il numero di volte che ha evitato le bombe, proponendo come valore la lunghezza,
//     (quindi la quantità di numeri presenti) dell'Array contenente i numeri validi inseriti dall'utente. 

var resultList = [];

for(; resultList.length <(maxValue- bombNumber);)
{
    var userNumber = parseInt(prompt("inserisci un numero da 1 a " + maxValue));
    if(isNaN(userNumber))
    {
        alert("per favore inserire un numero");
    }
    else if (userNumber > maxValue || userNumber < 1)
    {
        alert("inserire un numero compreso tra 1 e " + maxValue)
    }
    else if ( numberCheck(userNumber, failNumberList) == false)
    {
        alert("Peccato, hai perso!")
        alert("il tuo score è di " + resultList.length);
        break;
    }
    else if ( numberCheck(userNumber , resultList)== false)
    {
        alert("Il numero è già stato inserito inseriscine un altro");
    }
    else if( resultList.length != (maxValue - bombNumber))
    {
        resultList.push(userNumber);
    }
}
console.log(resultList);

if (resultList.length == (maxValue - bombNumber))
{
    alert("Complimenti Punteggio pieno!")
}
// la mia idea per (3) non Funziona.