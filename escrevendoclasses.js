// Escrevendo as Classes de Um Jogo

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idadae = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "um ataque genérico";
        }

        console.log("o " + this.tipo + " atacou usando " + ataque);
    }
}

const mago = new Heroi("Gandalf", 1000, "mago");
const guerreiro = new Heroi("Aragorn", 87, "guerreiro");
const monge = new Heroi("Lee Sin", 35, "monge");
const ninja = new Heroi("Naruto", 17, "ninja");

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();

