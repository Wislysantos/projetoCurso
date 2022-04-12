//string 
let nome: string = 'wisly'
console.log(nome);
//nome = 28

//numbers
let idade:number = 27
//idade = 'ana'
idade = 27.5
console.log(idade);

//boolean
let possuiHobbies:boolean = false
//possuiHobbies = 1
console.log(possuiHobbies);

//Tipo explicitos
let minhaIdade
minhaIdade = 27
console.log(typeof minhaIdade);
minhaIdade = 'jose'
console.log(typeof minhaIdade);

//array

//assim vc só pode passar string
let hobbies:any[] =['Jogar bola', 'caminhar']
console.log(hobbies);
console.log(hobbies[1]);
console.log(typeof hobbies);

hobbies = [100,200,300]
console.log(hobbies);

//tuplas
//tupla é quando vc define no array quais vão ser os tipos de vareais 
let endereco: [string, number, string] = ['Av. centro', 99, '']
console.log(endereco);

endereco = ['R. jose carlos', 120, 'bloco 2']
console.log(endereco);

//enums

enum Cor{
    Cinza ,
    Verde = 100,
    Azul = 10,
    Laranja,
    Amarelo,
    Vermelho = 100

}
let minhaCor: Cor = Cor.Verde
console.log(minhaCor);

console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);

//any

let carro: any = 'BMW'
console.log(carro);

carro = {modelo: 'BMW', ano: 2019}
console.log(carro);













