// **Consegna:**
//  Scrivi un programma che stampi in console i numeri da 1 a 100,
//  ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
//  Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// **BONUS 1:**
//  Crea un container nel DOM , aggiungendo (attraverso la funzione `append()`) un elemento html con il numero o la stringa corretta da mostrare.

// **BONUS 2:**
//  Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
 

for (let i = 1; i <= 100; i++ ) {
   
    //SE il numero (i) è multiplo di 3 AND multiplo di 5 stampa "FizzBuzz"
    if((i % 3 == 0) && (i % 5 == 0)){
        // console.log("FizzBuzz");
        numbers.append("FizzBuzz")
    //ALTRIMENTI SE il numero (i) è multiplo solo di 3 stampa "Fizz"    
    } else if(i % 3 == 0){
        // console.log("Fizz");
        numbers.append("Fizz")
    //ALTRIMENTI SE il numero (i) è multiplo solo di 5 stampa "Buzz"    
    } else if(i % 5 == 0){
        // console.log("Buzz");
        numbers.append("Buzz")
    //ALTRIMENTI non è multiplo e stampa i (numero)    
    } else {
        // console.log(i);
        numbers.append(i);
    }
}