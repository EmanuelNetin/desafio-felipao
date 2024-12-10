let nomePlayer = "Emanuel";
let xpPlayer = "10001";

if (xpPlayer < 1000) {
    let rankAtual = "Ferro"
    console.log(`O Herói de nome ${nomePlayer}, está no rank ${rankAtual}.`)
} else if((xpPlayer > 1000) && (xpPlayer < 2000)) {
    let rankAtual = "Bronze"
    console.log(`O Herói de nome ${nomePlayer}, está no rank ${rankAtual}.`)
} else if ((xpPlayer > 2000) && (xpPlayer < 5000)) {
    let rankAtual = "Prata"
    console.log(`O Herói de nome ${nomePlayer}, está no rank ${rankAtual}.`)
} else if ((xpPlayer > 5000) && (xpPlayer < 7000)) {
    let rankAtual = "Ouro"
    console.log(`O Herói de nome ${nomePlayer}, está no rank ${rankAtual}.`)
} else if ((xpPlayer > 7000) && (xpPlayer < 8000)) {
    let rankAtual = "Platina"
    console.log(`O Herói de nome ${nomePlayer}, está no rank ${rankAtual}.`)
} else if ((xpPlayer > 8000) && (xpPlayer < 9000)) {
    let rankAtual = "Ascendente"
    console.log(`O Herói de nome ${nomePlayer}, está no rank ${rankAtual}.`)
}else if  ((xpPlayer > 9000) && (xpPlayer < 10000)) {
    let rankAtual = "Imortal"
    console.log(`O Herói de nome ${nomePlayer}, está no rank ${rankAtual}.`)
} else if (xpPlayer >= 10001) {
    let rankAtual = "Radiante"
    console.log(`O Herói de nome ${nomePlayer}, está no rank ${rankAtual}.`)
}