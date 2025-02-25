//creo un ciclo for 
for (let i = 1; i <= 100; i++){
    //SE un numero è multiplo di 3 E di 5, stampo la stringa "FizzBuzz"
    if ((i % 3 === 0) && (i % 5 === 0)){
        console.log('FizzBuzz');
    } else if (i % 3 === 0){
        //SE invece il numero è un multiplo SOLO di 3, stampo la stringa "Fizz"
        console.log('Fizz');
    } else  if (i % 5 === 0){
        //SE invece il numero è un multiplo SOLO di 5, stampo la stringa "Buzz"
        console.log('Buzz');
    } else {
        //SE invece dovessero essere diversi da un multiplo di 3 e 5, stampo il valore degli altri numeri
        console.log(i);
    }

}