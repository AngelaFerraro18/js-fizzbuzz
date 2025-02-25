# FizzBuzz

L'esercitazione di oggi si concentra sullo studio e analisi di uno dei tre cicli di Javascript: il ciclo "for". Analizzato il suo comportamento, il suo utilizzo e il modo in cui viene applicato, dobbiamo creare un programmino che andrà a far visualizzare una serie di numeri che in punti specifici avranno un tipo di visualizzazione diverso se alcune condizione saranno vere o meno. 

---

**Consegna**

Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

---

*Ragionamento*

- per stampare una serie di numeri da 1 a 100 avrò bisogno di un ciclo: for
- i numeri **multipli** di 3 devono essere stampati come "Fizz"
- i numeri **multipli** di 5 devono essere stampati come "Buzz"
- i numeri **multipli** di 3 E di 5 devono essere stampati come "FizzBuzz"
    -Per determinare che un numero sia un multiplo di un altro avrò bisogno di usare un modulo: remainder (%)

*Procedimento*

- andrò a creare il ciclo for, andando a inserire il contatore, condizione e incremento
- verifico che ciò che ho scritto soddisfa la mia richiesta stampandolo in console
- all'interno del ciclo, andrò a scrivere le mie istruzioni condizionali:
    - SE un numero sarà multiplo di 3, stamperò la stringa "Fizz"
    - SE un numero sarà multiplo di 5, stamperò la stringa "Buzz"
    - SE un numero è multiplo di 3 E di 5, stamperò la stringa "FizzBuzz"
- gli altri numeri saranno visualizzati con il loro valore numerico

