interface Humana{
    nome: string
    //aqui eu to falando que nao é obrigatorio informar a idade
    idade?: number
    //aqui eu to dizendo quando eu atriburi o nome eu posso dar nome do atributo
    [props: string]: any
    saudar(sobreNome: string) : void
}
function saudarPessoaOla(pessoa: Humana){
    console.log("Óla, " + pessoa.nome);        
}

const pessoa:Humana ={
    nome:"Joao",
    idade:27,
    saudar(sobreNome: string){
        console.log("Òla o meu nome é " + this.nome +' ' + sobreNome);        
    }
}

function mudarDeNome(pessoa: Humana){
    pessoa.nome = "Joana"
}

saudarPessoaOla(pessoa)
mudarDeNome(pessoa)
saudarPessoaOla(pessoa)
//saudarPessoaOla({nome: 'wisly', idade: 25, altura:1.85})
pessoa.saudar('santos')

//utilizando class

class Cliente implements Humana{
    nome: string = ''
    ultimaCompra: Date =new Date
    saudar(sobreNome: string){
        console.log("Óla, meu nome é " + this.nome + " "+ sobreNome);        
    }
}

const meuCliente = new Cliente();
meuCliente.nome = 'Han'
saudarPessoaOla(meuCliente);
meuCliente.saudar('Sousa')
console.log(meuCliente.ultimaCompra);

//Interface Função

interface FuncaoCalculo{
    (a : number, b : number):number
}

let potencia: FuncaoCalculo

potencia = function(base : number, exp : number):number{
    return Array(exp).fill(base).reduce((t, a)=>t*a)
}

console.log(potencia(3,10));
console.log(Math.pow(3,10));
console.log(3**10);




