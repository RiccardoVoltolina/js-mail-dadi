/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Mail
Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
 */

/* tools */

/* 
-console.log
-math.random/ math for
-if/else
-for
-append
*/

/* esecuzione gioco dadi */

/* 
-creo una variabile per il computer che ha come valore un numero random compreso tra 1 e 6
-creo una variabile per il player che ha come valore un numero random compreso tra 1 e 6
-creo if/ else dove scriverò che il vincitore corrisponde al numero più alto
*/

const numberComputer = Math.floor(Math.random() * 6) + 1;
const numberPlayer = Math.floor(Math.random() * 6) + 1;
const divElement = document.querySelector('div');
let divChild = document.createElement('div');
divChild.append;
console.log(numberComputer , numberPlayer);
if (numberComputer > numberPlayer) {
    divChild = 'Mi dispiace ma questa volta ha vinto il computer';
    divElement.append(divChild);
} else {
     divChild = 'Congratulazioni, hai battuto il computer';
     divElement.append(divChild);
}

 /* esercizio mail */

 /* tools */
 /* 
 -prompt
 -array
 -console.log
 -append
 -if/else
 */

 /* esecuzione gioco mail */

 /* 
 -creo un array con scritto differenti mail
 -creo un prompt dove chiedo all' utente la sua mail
 -verifico con if/else se l' email scritta dall' utente corrisponde a una di quelle scritte nella lista
 -stampo il risultato in pagina con append
 */
 const emailList = ['fabio.pacifici@live.com', 'artur.mamedov@live.it', 'paolo.mistretta@live.com' , 'riky.volto@live.com'];
 const spanElement = document.querySelector('span');
 const userEmail = document.querySelector('input');
 let spanChild = document.createElement('span');
 spanChild.append;

 document.querySelector('button').addEventListener('click', function () {

    let trovata = false;
    for (let i = 0; i < emailList.length; i++) {

        const email = emailList[i];

        if (userEmail.value === email) {
            trovata = true;
        }
        
    }
    if (trovata) {
        spanChild = 'La tua mail è stata verificata con successo, benvenuto alla festa!';
        spanElement.append(spanChild);
    } else {
        spanElement.append('Mi dispiace, la tua mail non risulta nella lista, riprova con una mail valida');
    }
})












/* 
    let trovata = false;
    const userEmail = document.querySelector('input').value;
    console.log(userEmail);
    for (let i = 0; i < emailList.length; i++) {
        const acceptedValues = emailList[i];
        console.log(acceptedValues);
        if (userEmail.value === acceptedValues) {
            trovata = true;
        }
       if (trovata) {

            spanChild = 'La tua mail è stata verificata con successo, benvenuto alla festa!'
            spanElement.append(spanChild);
            
        }else {
            spanElement.append('Mi dispiace, la tua mail non risulta nella lista, riprova con una mail valida')
        }
        
    }
    
} */
