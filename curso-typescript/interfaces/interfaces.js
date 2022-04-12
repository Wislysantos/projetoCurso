"use strict";
function saudarPessoaOla(pessoa) {
    console.log("Óla, " + pessoa.nome);
}
const pessoa = {
    nome: "Joao",
    idade: 27,
    saudar(sobreNome) {
        console.log("Òla o meu nome é " + this.nome + ' ' + sobreNome);
    }
};
function mudarDeNome(pessoa) {
    pessoa.nome = "Joana";
}
saudarPessoaOla(pessoa);
mudarDeNome(pessoa);
saudarPessoaOla(pessoa);
//saudarPessoaOla({nome: 'wisly', idade: 25, altura:1.85})
pessoa.saudar('santos');
//utilizando class
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobreNome) {
        console.log("Óla, meu nome é " + this.nome + " " + sobreNome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarPessoaOla(meuCliente);
meuCliente.saudar('Sousa');
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(3, 10));
console.log(Math.pow(3, 10));
console.log(3 ** 10);
