const prompt = require("prompt-sync")();

class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else {
      ataque = "shuriken";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}!`);
  }

  apresentar() {
    console.log(`Eu sou ${nome}, tenho ${idade} anos e sou um ${tipo}.`);
  }
}

const mago = new heroi("Mago", 60, "mago");
const guerreiro = new heroi("Guerreiro", 60, "guerreiro");
const monge = new heroi("Monge", 60, "monge");
const ninja = new heroi("Ninja", 60, "ninja");

let nome = prompt("Qual o nome do seu herói? ");
console.log("\n");
let idade = prompt("qual a idade do seu herói? ");
console.log("\n");

console.log("Cada herói ataca de maneira diferente como: ");

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();

console.log("\n");
let tipo = prompt(
  "Qual deles seu herói vai ser?(mago, guerreiro, monge, ninja) "
);

let heroiPersonalizado = new heroi(nome, idade, tipo);

console.log("\n");
heroiPersonalizado.apresentar();
heroiPersonalizado.atacar();
