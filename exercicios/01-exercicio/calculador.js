

const calculadora = {
    somaDoisnumeros(a, b){
        return a + b;
    },
    somaNnumeros(...numeros){
        let resultado = 0;
        for(let i = 0; i < numeros.length; i++){
            resultado = resultado + numeros[i];
        }
        return resultado;
    },

    subtracaoDoisnumeros(a, b){
        return a - b;
    },
    subtracaoNnumeros(...numeros){
        let resultado = 0;
        for(let i = 0; i < numeros.length; i++){
            resultado = resultado - numeros[i];
        }
        return resultado;
    },

    multiplicacaoDoisnumeros(a, b){
        return a * b;
    },
    multiplicacaoNnumeros(...numeros){
        let resultado = 1;
        for(let i = 0; i < numeros.length; i++){
            resultado = resultado * numeros[i];
        }
        return resultado;
    },

    divisaoDoisnumeros(a, b){
        return a / b;
    },
    divisaoNnumeros(...numeros){
        let resultado = 1;
        for(let i = 0; i < numeros.length; i++){
            resultado = resultado / numeros[i];
        }
        return resultado;
    }
}

module.exports = calculadora;
