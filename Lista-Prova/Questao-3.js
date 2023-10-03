// Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor e a soma dos valores.

let numeros = [];
let soma = 0;

for (let i = 0; i < N; i++) {
    let numero = prompt("Digite um número:");
    numeros.push(numero);
    soma += numero;
}

let menor = Math.min(...numeros);
let maior = Math.max(...numeros);

console.log("Menor valor: " + menor);
console.log("Maior valor: " + maior);
console.log("Soma dos valores: " + soma);
