let hero = "Israel"
let xp = 10002git 
let rank = ""

if(xp <= 1000 && xp >= 0){
    rank = "Ferro"
}else if(xp <= 2000 && xp > 1000){
    rank = "Bronze"
}else if(xp <= 5000 && xp > 2000){
    rank = "Prata"
}else if(xp <= 7000 && xp > 5000){
    rank = "Ouro"
}else if(xp <= 8000 && xp > 7000){
    rank = "Platina"
}else if(xp <= 9000 && xp > 8000){
    rank = "Ascendente"
}else if(xp <= 10000 && xp > 9000){
    rank = "Imortal"
}else {
    rank = "Radiante"
}
console.log("O herói " + hero + " está no rank " + rank)
