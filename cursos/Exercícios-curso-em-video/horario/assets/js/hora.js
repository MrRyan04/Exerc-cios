function carregar() {
    let data = new Date();
    let hora = data.getHours();
    let min = data.getMinutes();
    let body = document.getElementById ('corpo');
    let img = document.getElementById ('img');
    let agora = document.getElementById ('horario');
    let bom = document.getElementById ('bom');

    if (hora >= 12 && hora <= 17) {
        body.style.background = "rgb(153, 229, 213)";
        img.src = "assets/img/meio dia2.png";
        agora.innerHTML = `Agora são exatamente ${hora}:${min.toString().padStart(2, '0')}`;
        bom.innerHTML = 'Boa tarde!';
    } else if (hora >= 18 && hora <= 21) {
        body.style.background = "rgba(6, 12, 66, 0.792)";
        img.src = "assets/img/evening2.png";
        agora.innerHTML = `Agora são exatamente ${hora}:${min.toString().padStart(2, '0')}`;
        bom.innerHTML = 'Boa noite!';
        let cor = document.getElementById ('h1'); 
        cor.style.color = "white";
    } else if (hora >= 22 || hora <= 4) {
        body.style.background = "rgba(2, 5, 31, 0.925)";
        img.src = "assets/img/noite2.png";
        agora.innerHTML = `Agora são exatamente ${hora}:${min.toString().padStart(2, '0')}`;
        bom.innerHTML = 'Boa noite!';
        let cor = document.getElementById ('h1'); 
        cor.style.color = "white";

    } else {
        body.style.background = "chocolate";
        img.src = "assets/img/day.png";
        agora.innerHTML = `Agora são exatamente ${hora}:${min.toString().padStart(2, '0')}`;
        bom.innerHTML = 'Bom dia!';
    }
}