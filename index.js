// Run npm i prompt-sync

const prompt = require("prompt-sync")();

let qtVitorias;
let qtDerrotas;
let selector;
var level;

function calcRankedLevel(qtdVitorias, qtdDerrotas){
    let saldoVitorias = qtdVitorias - qtdDerrotas;
    if(saldoVitorias <= 10){
        level = "Ferro"
    }else if(saldoVitorias>=11 && saldoVitorias<=20){
        level = "Bronze"
    }else if(saldoVitorias>=21 && saldoVitorias<=50){
        level = "Prata"
    }else if(saldoVitorias>=51 && saldoVitorias<=80){
        level = "Ouro"
    }else if(saldoVitorias>=81 && saldoVitorias<=90){
        level = "Diamante"
    }else{
        level = "Imortal"
    }
    if(saldoVitorias>0){
        console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de "+level)
    }else{
        console.log("Tu nem nível tem, treine mais!")
    }
}

do{
    qtVitorias = prompt("Digite a quantidade de vitórias: ");
    qtDerrotas = prompt("Digite a quantidade de derrotas: ");
    calcRankedLevel(qtVitorias, qtDerrotas)
    selector = prompt("Deseja continuar? s ou n ")
}while(selector == "s")

