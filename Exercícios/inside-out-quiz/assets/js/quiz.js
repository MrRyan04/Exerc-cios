let alegria = 0;
let tristeza = 0;
let nojinho = 0;
let medo = 0;
let raiva = 0;

let div1 = document.getElementById ('div1');
let div0 = document.getElementById ('div0');

let botalegria1 = document.getElementById('div1alegria');
let bottristeza1 = document.getElementById('div1sadness');
let botnojo1 = document.getElementById('div1disgusing');
let botraiva1 = document.getElementById('div1anger');
let botmedo1 = document.getElementById('div1fear');
let next1 = document.getElementById ('next1');

function a1() {
    
    botalegria1.style.background = 'green';

    botalegria1.disabled = 'true';
    bottristeza1.disabled = 'true';
    botnojo1.disabled = 'true';
    botraiva1.disabled = 'true';
    botmedo1.disabled = 'true';

    next1.style.display = 'block';
    alegria++
}

function t1() {
    
    bottristeza1.style.background = 'green';

    botalegria1.disabled = 'true';
    bottristeza1.disabled = 'true';
    botnojo1.disabled = 'true';
    botraiva1.disabled = 'true';
    botmedo1.disabled = 'true';

    next1.style.display = 'block';
    tristeza++
}

function r1() {
    
    botraiva1.style.background = 'green';

    botalegria1.disabled = 'true';
    bottristeza1.disabled = 'true';
    botnojo1.disabled = 'true';
    botraiva1.disabled = 'true';
    botmedo1.disabled = 'true';

    next1.style.display = 'block';
    raiva++
}

function m1() {
    
    botmedo1.style.background = 'green';

    botalegria1.disabled = 'true';
    bottristeza1.disabled = 'true';
    botnojo1.disabled = 'true';
    botraiva1.disabled = 'true';
    botmedo1.disabled = 'true';

    next1.style.display = 'block';
    medo++
}

function n1() {
    
    botnojo1.style.background = 'green';

    botalegria1.disabled = 'true';
    bottristeza1.disabled = 'true';
    botnojo1.disabled = 'true';
    botraiva1.disabled = 'true';
    botmedo1.disabled = 'true';

    next1.style.display = 'block';
    nojinho++
}

let div2 = document.getElementById ('div2');


function prox1() {
    div1.style.display = 'none';
    div2.style.display = 'block';
}

let opcaoA = document.getElementById('opcaoA');
let opcaoB = document.getElementById('opcaoB');
let opcaoC = document.getElementById('opcaoC');
let opcaoD = document.getElementById('opcaoD');
let opcaoE = document.getElementById('opcaoE');
let next2 = document.getElementById ('next2');

function t2(){
    opcaoA.style.background = 'green';

    opcaoA.disabled = 'true';
    opcaoB.disabled = 'true';
    opcaoC.disabled = 'true';
    opcaoD.disabled = 'true';
    opcaoE.disabled = 'true';

    next2.style.display = 'block';
    tristeza++
}

function a2(){
    opcaoB.style.background = 'green';

    opcaoA.disabled = 'true';
    opcaoB.disabled = 'true';
    opcaoC.disabled = 'true';
    opcaoD.disabled = 'true';
    opcaoE.disabled = 'true';

    next2.style.display = 'block';
    alegria++
}

function r2(){
    opcaoC.style.background = 'green';

    opcaoA.disabled = 'true';
    opcaoB.disabled = 'true';
    opcaoC.disabled = 'true';
    opcaoD.disabled = 'true';
    opcaoE.disabled = 'true';

    next2.style.display = 'block';
    raiva++
}

function m2(){
    opcaoD.style.background = 'green';

    opcaoA.disabled = 'true';
    opcaoB.disabled = 'true';
    opcaoC.disabled = 'true';
    opcaoD.disabled = 'true';
    opcaoE.disabled = 'true';

    next2.style.display = 'block';
    medo++
}

function n2(){
    opcaoE.style.background = 'green';

    opcaoA.disabled = 'true';
    opcaoB.disabled = 'true';
    opcaoC.disabled = 'true';
    opcaoD.disabled = 'true';
    opcaoE.disabled = 'true';

    next2.style.display = 'block';
    nojinho++
}

let div3 = document.getElementById ('div3');
let next3 = document.getElementById ('next3');


function prox2() {
    div2.style.display = 'none';
    div3.style.display = 'block';
}

let opcaoA3 = document.getElementById('opcaoA3');
let opcaoB3 = document.getElementById('opcaoB3');
let opcaoC3 = document.getElementById('opcaoC3');
let opcaoD3 = document.getElementById('opcaoD3');
let opcaoE3 = document.getElementById('opcaoE3');


function m3(){
    opcaoA3.style.background = 'green';

    opcaoA3.disabled = 'true';
    opcaoB3.disabled = 'true';
    opcaoC3.disabled = 'true';
    opcaoD3.disabled = 'true';
    opcaoE3.disabled = 'true';

    next3.style.display = 'block';
    medo++
}

function n3(){
    opcaoB3.style.background = 'green';

    opcaoA3.disabled = 'true';
    opcaoB3.disabled = 'true';
    opcaoC3.disabled = 'true';
    opcaoD3.disabled = 'true';
    opcaoE3.disabled = 'true';

    next3.style.display = 'block';
    nojinho++
}

function a3(){
    opcaoC3.style.background = 'green';

    opcaoA3.disabled = 'true';
    opcaoB3.disabled = 'true';
    opcaoC3.disabled = 'true';
    opcaoD3.disabled = 'true';
    opcaoE3.disabled = 'true';

    next3.style.display = 'block';
    alegria++
}

function t3(){
    opcaoD3.style.background = 'green';

    opcaoA3.disabled = 'true';
    opcaoB3.disabled = 'true';
    opcaoC3.disabled = 'true';
    opcaoD3.disabled = 'true';
    opcaoE3.disabled = 'true';

    next3.style.display = 'block';
    tristeza++
}

function r3(){
    opcaoE3.style.background = 'green';

    opcaoA3.disabled = 'true';
    opcaoB3.disabled = 'true';
    opcaoC3.disabled = 'true';
    opcaoD3.disabled = 'true';
    opcaoE3.disabled = 'true';

    next3.style.display = 'block';
    raiva++
}

let div4 = document.getElementById ('div4');
let next4 = document.getElementById ('next4');

function prox3() {
    div3.style.display = 'none';
    div4.style.display = 'block';
}

let opcaoA4 = document.getElementById('opcaoA4');
let opcaoB4 = document.getElementById('opcaoB4');
let opcaoC4 = document.getElementById('opcaoC4');
let opcaoD4 = document.getElementById('opcaoD4');
let opcaoE4 = document.getElementById('opcaoE4');


function a4(){
    opcaoA4.style.background = 'green';

    opcaoA4.disabled = 'true';
    opcaoB4.disabled = 'true';
    opcaoC4.disabled = 'true';
    opcaoD4.disabled = 'true';
    opcaoE4.disabled = 'true';

    next4.style.display = 'block';
    alegria++
}

function t4(){
    opcaoB4.style.background = 'green';

    opcaoA4.disabled = 'true';
    opcaoB4.disabled = 'true';
    opcaoC4.disabled = 'true';
    opcaoD4.disabled = 'true';
    opcaoE4.disabled = 'true';

    next4.style.display = 'block';
    tristeza++
}

function r4(){
    opcaoC4.style.background = 'green';

    opcaoA4.disabled = 'true';
    opcaoB4.disabled = 'true';
    opcaoC4.disabled = 'true';
    opcaoD4.disabled = 'true';
    opcaoE4.disabled = 'true';

    next4.style.display = 'block';
    raiva++
}

function m4(){
    opcaoD4.style.background = 'green';

    opcaoA4.disabled = 'true';
    opcaoB4.disabled = 'true';
    opcaoC4.disabled = 'true';
    opcaoD4.disabled = 'true';
    opcaoE4.disabled = 'true';

    next4.style.display = 'block';
    medo++
}

function n4(){
    opcaoE4.style.background = 'green';

    opcaoA4.disabled = 'true';
    opcaoB4.disabled = 'true';
    opcaoC4.disabled = 'true';
    opcaoD4.disabled = 'true';
    opcaoE4.disabled = 'true';

    next4.style.display = 'block';
    nojinho++
}

let div5 = document.getElementById ('div5');
let next5 = document.getElementById ('next5');

function prox4() {
    div4.style.display = 'none';
    div5.style.display = 'block';
}


let opcaoA5 = document.getElementById('opcaoA5');
let opcaoB5 = document.getElementById('opcaoB5');
let opcaoC5 = document.getElementById('opcaoC5');
let opcaoD5 = document.getElementById('opcaoD5');
let opcaoE5 = document.getElementById('opcaoE5');


function a5(){
    opcaoA5.style.background = 'green';

    opcaoA5.disabled = 'true';
    opcaoB5.disabled = 'true';
    opcaoC5.disabled = 'true';
    opcaoD5.disabled = 'true';
    opcaoE5.disabled = 'true';

    next5.style.display = 'block';
    alegria++
}

function t5(){
    opcaoB5.style.background = 'green';

    opcaoA5.disabled = 'true';
    opcaoB5.disabled = 'true';
    opcaoC5.disabled = 'true';
    opcaoD5.disabled = 'true';
    opcaoE5.disabled = 'true';

    next5.style.display = 'block';
    tristeza++
}

function r5(){
    opcaoC5.style.background = 'green';

    opcaoA5.disabled = 'true';
    opcaoB5.disabled = 'true';
    opcaoC5.disabled = 'true';
    opcaoD5.disabled = 'true';
    opcaoE5.disabled = 'true';

    next5.style.display = 'block';
    raiva++
}

function m5(){
    opcaoD5.style.background = 'green';

    opcaoA5.disabled = 'true';
    opcaoB5.disabled = 'true';
    opcaoC5.disabled = 'true';
    opcaoD5.disabled = 'true';
    opcaoE5.disabled = 'true';

    next5.style.display = 'block';
    medo++
}

function n5(){
    opcaoE5.style.background = 'green';

    opcaoA5.disabled = 'true';
    opcaoB5.disabled = 'true';
    opcaoC5.disabled = 'true';
    opcaoD5.disabled = 'true';
    opcaoE5.disabled = 'true';

    next5.style.display = 'block';
    nojinho++
}

let div6 = document.getElementById ('div6');
let next6 = document.getElementById ('next6');

function prox5() {
    div5.style.display = 'none';
    div6.style.display = 'block';
}


let opcaoA6 = document.getElementById('opcaoA6');
let opcaoB6 = document.getElementById('opcaoB6');
let opcaoC6 = document.getElementById('opcaoC6');
let opcaoD6 = document.getElementById('opcaoD6');
let opcaoE6 = document.getElementById('opcaoE6');


function a6(){
    opcaoA6.style.background = 'green';

    opcaoA6.disabled = 'true';
    opcaoB6.disabled = 'true';
    opcaoC6.disabled = 'true';
    opcaoD6.disabled = 'true';
    opcaoE6.disabled = 'true';

    next6.style.display = 'block';
    alegria++
}

function t6(){
    opcaoB6.style.background = 'green';

    opcaoA6.disabled = 'true';
    opcaoB6.disabled = 'true';
    opcaoC6.disabled = 'true';
    opcaoD6.disabled = 'true';
    opcaoE6.disabled = 'true';

    next6.style.display = 'block';
    tristeza++
}

function r6(){
    opcaoC6.style.background = 'green';

    opcaoA6.disabled = 'true';
    opcaoB6.disabled = 'true';
    opcaoC6.disabled = 'true';
    opcaoD6.disabled = 'true';
    opcaoE6.disabled = 'true';

    next6.style.display = 'block';
    raiva++
}

function m6(){
    opcaoD6.style.background = 'green';

    opcaoA6.disabled = 'true';
    opcaoB6.disabled = 'true';
    opcaoC6.disabled = 'true';
    opcaoD6.disabled = 'true';
    opcaoE6.disabled = 'true';

    next6.style.display = 'block';
    medo++
}

function n6(){
    opcaoE6.style.background = 'green';

    opcaoA6.disabled = 'true';
    opcaoB6.disabled = 'true';
    opcaoC6.disabled = 'true';
    opcaoD6.disabled = 'true';
    opcaoE6.disabled = 'true';

    next6.style.display = 'block';
    nojinho++
}

let div7 = document.getElementById ('div7');
let next7 = document.getElementById ('next7');

function prox6() {
    div6.style.display = 'none';
    div7.style.display = 'block';
}

let opcaoA7 = document.getElementById('opcaoA7');
let opcaoB7 = document.getElementById('opcaoB7');
let opcaoC7 = document.getElementById('opcaoC7');
let opcaoD7 = document.getElementById('opcaoD7');
let opcaoE7 = document.getElementById('opcaoE7');


function a7(){
    opcaoA7.style.background = 'green';

    opcaoA7.disabled = 'true';
    opcaoB7.disabled = 'true';
    opcaoC7.disabled = 'true';
    opcaoD7.disabled = 'true';
    opcaoE7.disabled = 'true';

    next7.style.display = 'block';
    alegria++
}

function t7(){
    opcaoB7.style.background = 'green';

    opcaoA7.disabled = 'true';
    opcaoB7.disabled = 'true';
    opcaoC7.disabled = 'true';
    opcaoD7.disabled = 'true';
    opcaoE7.disabled = 'true';

    next7.style.display = 'block';
    tristeza++
}

function r7(){
    opcaoC7.style.background = 'green';

    opcaoA7.disabled = 'true';
    opcaoB7.disabled = 'true';
    opcaoC7.disabled = 'true';
    opcaoD7.disabled = 'true';
    opcaoE7.disabled = 'true';

    next7.style.display = 'block';
    raiva++
}

function m7(){
    opcaoD7.style.background = 'green';

    opcaoA7.disabled = 'true';
    opcaoB7.disabled = 'true';
    opcaoC7.disabled = 'true';
    opcaoD7.disabled = 'true';
    opcaoE7.disabled = 'true';

    next7.style.display = 'block';
    medo++
}

function n7(){
    opcaoE7.style.background = 'green';

    opcaoA7.disabled = 'true';
    opcaoB7.disabled = 'true';
    opcaoC7.disabled = 'true';
    opcaoD7.disabled = 'true';
    opcaoE7.disabled = 'true';

    next7.style.display = 'block';
    nojinho++
}

let div8 = document.getElementById('div8');

function prox7() {
    let maior = Math.max(alegria, tristeza, medo, nojinho, raiva);
    div7.style.display = 'none';
    div8.style.display = 'block';
    let formu = document.getElementById('formu');
    formu.style.display = 'none';


    if (maior == raiva) {
        let paragrafo = document.createElement ('p');
        let imagem = document.createElement ('img');
        let h2 = document.createElement ('h2');
        imagem.src = '../imagens/anger.png';

        h2.textContent = 'Raiva';
        paragrafo.textContent = 'Muito esquentadinho você hein';

        div8.appendChild(h2);
        div8.appendChild(paragrafo);
        div8.appendChild(imagem);
    } else if (maior == medo) {
       
        let paragrafo = document.createElement ('p');
        let imagem = document.createElement ('img');
        let h2 = document.createElement ('h2');
        imagem.src = '../imagens/fear.png';

        h2.textContent = 'Medo'
        paragrafo.textContent = 'Acalme-se, o mundo não te odeia';

        div8.appendChild(h2);
        div8.appendChild(paragrafo);
        div8.appendChild(imagem);
    } else if (maior == nojinho) {

        let paragrafo = document.createElement ('p');
        let imagem = document.createElement ('img');
        let h2 = document.createElement ('h2');
        imagem.src = '../imagens/disgust.png';

        h2.textContent = 'Nojinho';
        paragrafo.textContent = 'Cuidado, andar olhando pra cima uma hora tropeça';

        div0.appendChild(h2);
        div0.appendChild(paragrafo);
        div8.appendChild(imagem);
    } else if (maior == alegria) {

        let paragrafo = document.createElement ('p');
        let imagem = document.createElement ('img');
        let h2 = document.createElement ('h2');
        imagem.src = '../imagens/joy.png';

        h2.textContent = 'Alegria';
        paragrafo.textContent = 'Tudo em excesso é tóxico';

        div8.appendChild(h2);
        div8.appendChild(paragrafo);
        div8.appendChild(imagem);
    } else if (maior == tristeza) {

        let paragrafo = document.createElement ('p');
        let imagem = document.createElement ('img');
        let h2 = document.createElement ('h2');
        imagem.src = '../imagens/sadness.png';

        h2.textContent = 'Tristeza';
        paragrafo.textContent = 'Você é muito mais do que pensa que é, não se esqueça disso :)';

        div8.appendChild(h2);
        div8.appendChild(paragrafo);
        div8.appendChild(imagem);
    } 
}


