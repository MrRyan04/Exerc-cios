let bot = document.getElementById ('botao')
bot.addEventListener ('click', clique)
let numale = Math.floor(Math.random() * 100) + 1
function clique() {
    
    let num = Number(document.getElementById ('player').value)
    let res = document.getElementById ('resposta')

if (num == numale) {res.innerHTML = "Vc ganhou"}
else {res.innerHTML = "Vc perdeu"}

}

let dic = document.getElementById ('botao2')
dic.addEventListener ('click', clique2)

function clique2 (){ 
    let dica1 = Number(document.getElementById ('dica').value)
    let res2 = document.getElementById ('res2')
    if (dica1 > numale) {res2.innerText = 'O número é menor'
    } else if (dica1 < numale) {res2.innerHTML = 'O número é maior'
    } else {res2.innerHTML = 'vc acertou'}

}