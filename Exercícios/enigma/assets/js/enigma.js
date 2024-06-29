let div1 = document.getElementById ('conteudo1');
let div2 = document.getElementById ('conteudo2');
let div3 = document.getElementById ('conteudo3');
let div4 = document.getElementById ('conteudo4');
let div5 = document.getElementById ('conteudo5');

let p1 = document.getElementById ('p1');
let p2 = document.getElementById ('p2');
let p3 = document.getElementById ('p3');
let p4 = document.getElementById ('p4');
let p5 = document.getElementById ('p5');


let bot1 = document.querySelector ('#bot1');
let bot2 = document.querySelector ('#bot2');
let bot3 = document.querySelector ('#bot3');
let bot4 = document.querySelector ('#bot4');
let bot5 = document.querySelector ('#bot5');

let zero = document.getElementById ('zero');

let final = document.querySelector ('#final');
let audio = document.getElementById('background-audio');

function clique0() {
    let aga1 = document.getElementById ('aga1');
    let pause = document.getElementById ('pause');
    
    audio.play();
    pause.style.display = 'block';

    div1.style.display = 'block';
    zero.style.display = 'none';
    aga1.innerHTML = "Sherlock's Challange";
}


function clique1() {
    
    let res1 = document.getElementById ('res1').value.toLowerCase();
    if (res1.includes('sos') || res1.includes('s.o.s') || res1.includes('socorro') || res1.includes('ajuda') || res1.includes('help') ) {
        p1.innerHTML = "Certo";
        p1.style.color = "rgb(8, 71, 7)";
        p1.style.fontWeight = 'bold';
        bot1.style.display = "none";
        div2.style.display = "block";
    }else if(res1 == '') {
        p1.innerHTML = 'Digite alguma coisa';
        p1.style.color = "red";
        p1.style.fontWeight = 'bold';
    } else if (res1.includes('nao sei') || res1.includes('não sei')) {
        p1.style.color = "rgb(8, 71, 7)";
        p1.style.fontWeight = 'bold';
        bot1.style.display = "none";
        div2.style.display = "block";
        p1.innerHTML = "";
    }
    
    else {
        p1.innerHTML = 'Errado';
        p1.style.color = "red";
        p1.style.fontWeight = 'bold';
    }
}

function clique2() {
    let res2 = document.querySelector ('#res2').value.toLowerCase();

    if (res2.includes('223119') || res2.includes('911322') ) {
        p2.innerHTML = "Certo";
        p2.style.color = "rgb(8, 71, 7)";
        p2.style.fontWeight = 'bold';
        bot2.style.display = "none";
        div3.style.display = "block";

    } else if (res2.includes('nao') || res2.includes('não') || res2.includes('sei') || res2.includes('ideia')){
        p2.innerHTML = "A resposta é 223119 (911322 invertido), 911 no calendario faz com que dia 9 seja terça, e dia 1 segunda, a partir dai basta organizar a ordem da semana de cada um";
        p2.style.color = "rgb(8, 71, 7)";
        p2.style.fontWeight = 'bold';
        bot2.style.display = "none";
        div3.style.display = "block";
    }
     else if(res1 == '') {
        p1.innerHTML = 'Digite alguma coisa';
        p1.style.color = "red";
        p1.style.fontWeight = 'bold';   
    } else {
        p2.innerHTML = 'Errado';
        p2.style.color = "red";
        p2.style.fontWeight = 'bold';
    }
}

function clique3() {
    let res3 = document.querySelector ('#res3').value.toLowerCase();
    
    if (res3.includes('relogio') || res3.includes('relógio') || res3.includes('clock')) {
        p3.innerHTML = "Certo";
        p3.style.color = "rgb(8, 71, 7)";
        p3.style.fontWeight = 'bold';
        bot3.style.display = "none";
        div4.style.display = "block";

    } else if(res1 == '') {
        p1.innerHTML = 'Digite alguma coisa';
        p1.style.color = "red";
        p1.style.fontWeight = 'bold';
    } else {
            p3.innerHTML = 'Errado';
            p3.style.color = "red";
            p3.style.fontWeight = 'bold';
    }
}

function clique4() {
    let res4 = document.querySelector ('#res4').value.toLowerCase();
    
    if (res4.includes('caneta') || res4.includes('pen')) {
        p4.innerHTML = "Certo";
        p4.style.color = "rgb(8, 71, 7)";
        p4.style.fontWeight = 'bold';
        bot4.style.display = "none";
        div5.style.display = "block";

    } else if(res1 == '') {
        p1.innerHTML = 'Digite alguma coisa';
        p1.style.color = "red";
        p1.style.fontWeight = 'bold';
     } else {
            p4.innerHTML = 'Errado';
            p4.style.color = "red";
            p4.style.fontWeight = 'bold';
    }
}

function clique5() {
    let res5 = document.querySelector ('#res5').value.toLowerCase();
    let audioBot = document.getElementById ('pause');
    let body = document.getElementsByTagName ('body') [0];

    if (res5.includes('filho') && res5.includes('gay')) {
        p5.innerHTML = "Certo";
        p5.style.color = "blue";
        p5.style.fontWeight = 'bold';
        final.style.display = "block";

        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
        div5.style.display = "none";
        audioBot.style.display = "none";

        body.style.background = 'blue';
        audio.pause();

    } else if (res5.includes('filho') || res5.includes('gay')) {
        p5.innerHTML = 'Near...';
        p5.style.color = "red";
        p5.style.fontWeight = 'bold'; 

    } else if(res1 == '') {
        p1.innerHTML = 'Digite alguma coisa';
        p1.style.color = "red";
        p1.style.fontWeight = 'bold';

    } else {
            p5.innerHTML = 'Errado';
            p5.style.color = "red";
            p5.style.fontWeight = 'bold';
    } 
}


function premio(){
    let link = 'https://www.youtube.com/watch?v=nwhP4MXZ08Q';

    window.open (link, '_blank');
}

function som() {
    let pause = document.getElementById ('pause')

if (audio.paused) {
    audio.play();
   pause.value = '⏸';
} else {
    audio.pause();
    pause.value = '⏩';
}

}

