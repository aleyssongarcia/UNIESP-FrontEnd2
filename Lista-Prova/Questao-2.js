// Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números ímpares.

let numerosPares = 0;
let numerosImpares = 0;

for (let i = 0; i < 10; i++) {
    let numero = prompt("Digite um número inteiro:");
    if (numero % 2 == 0) {
        numerosPares++;
    } else {
        numerosImpares++;
    }
}

console.log("Quantidade de números pares: " + numerosPares);
console.log("Quantidade de números ímpares: " + numerosImpares);
