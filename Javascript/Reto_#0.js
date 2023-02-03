/** 
 *  Escribe un programa que muestre por consola (con un print) los
 *  números de 1 a 100 (ambos incluidos y con un salto de línea entre
 *  cada impresión), sustituyendo los siguientes:
 *  - Múltiplos de 3 por la palabra "fizz".
 *  - Múltiplos de 5 por la palabra "buzz".
 *  - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

/*
function fizzbuzz () {
    let output;
    for (let i = 1; i <= 100; i++) {
        output = "";
        if(i%3 == 0 && i%5==0 )
           output =  " : FizzBuzz";
        else if (i%3 == 0)
            output =  " : Fizz";
        else if(i%5==0)
            output = " : Buzz";        
    
        console.log(i + output);
    }
}

fizzbuzz();
*/

for (let i = 1; i <= 100; i++) {
    const output = `${i % 3 === 0 ? 'fizz' : ''}${i % 5 === 0 ? 'buzz' : ''}${i % 3 !== 0 && i % 5 !== 0 ? i : ''}`;
    console.log(output);
}
