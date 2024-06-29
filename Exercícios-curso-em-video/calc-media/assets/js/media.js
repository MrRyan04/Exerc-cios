let array = [];
console.log(array.length)

const botao1 = document.querySelector ('#botao1');
const botao2 = document.querySelector ('#botao2');
const pe = document.querySelector ('#res');

botao2.disabled = true;

function adc(){
    let input = Number(document.getElementById ('input').value);
    document.getElementById ('input').value = ''

    if (input == "" || input == 0){
        pe.innerHTML = 'O número não pode estar vazio ou valer 0';
        pe.style.color = 'red';
    } else if (array.includes(input)){
        pe.innerHTML = 'O valor digitado não pode se repetir';
        pe.style.color = 'red';
    } else {
        pe.innerHTML = ''
        array.push(input)
        botao2.disabled = false;
    }
}

function fin(){
    if (array.length == 0) {
        pe.innerHTML = 'Você precisa inserir números para jogar.'
        pe.style.color = 'red';
    } else {
    let qnt = array.length;
    let soma = 0;
    let media = 0;

    for (i=0; i<qnt;i++){
        soma = soma + array[i];
    } 
        media = soma / qnt;

        pe.innerHTML = `Você inseriu ${qnt} número(s); <br><br>A soma desse(s) número(s) é ${soma};<br><br>A média desse(s) número(s) é ${media}.<br><br>Obrigado por jogar.`;
        pe.style.color = 'green';
        array.length = 0;
    }
}
