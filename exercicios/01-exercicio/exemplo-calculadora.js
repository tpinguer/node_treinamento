const calculadora = require('./calculador')

console.log(calculadora);

console.log("Soma")
console.log(calculadora.somaDoisnumeros(5, 5))
console.log(calculadora.somaNnumeros(5, 5, 6, 7))

console.log("Subtração")
console.log(calculadora.subtracaoDoisnumeros(5, 5))
console.log(calculadora.subtracaoNnumeros(5, 5, 6, 7))

console.log("Multiplicação")
console.log(calculadora.multiplicacaoDoisnumeros(5, 5))
console.log(calculadora.multiplicacaoNnumeros(5, 5, 6, 7))

console.log("Divisão")
console.log(calculadora.divisaoDoisnumeros(5, 5))
console.log(calculadora.divisaoNnumeros(5, 5, 6, 7))