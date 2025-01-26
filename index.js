let nomeHeroi = "Kaelion"
let xpExperiencia = 8675

if (xpExperiencia < 1000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível de ferro.")
} else if (xpExperiencia >= 1001 && xpExperiencia < 2000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível de bronze.")
} else if (xpExperiencia >= 2001 && xpExperiencia < 5000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível de prata.")
} else if (xpExperiencia >= 5001 && xpExperiencia < 8000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível de platina.")
} else if (xpExperiencia >= 8001 && xpExperiencia < 9000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível de ascendente.")
} else if (xpExperiencia >= 9001 && xpExperiencia < 10000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível de radiante.")
} else if (xpExperiencia >= 10001) {
    console.log("O herói de nome " + nomeHeroi + " está no nível de imortal.")
}
