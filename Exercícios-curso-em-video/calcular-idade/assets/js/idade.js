
function calcula () {
    let data = new Date()
    let year = data.getFullYear()
    
    let idade = Number(document.getElementById ('selecione').value)
    let sub = year - idade

    let gen = document.getElementById ('gen').value.toLowerCase()
    let genero = document.getElementById ('genero')
    
    let img = document.getElementById ('img')
    let imagem = new Image()

    let age = document.querySelector ('#age')
    age.innerHTML = `Você tem (ou fará) ${sub} anos neste ano`;

    if (sub <= 15 && gen === "masculino") { 
         //masculino abaixo de 16 anos
        img.innerHTML = '';
        imagem.src = "assets/img/carl-crianca.png";
        genero.innerHTML = `Jovem de ${sub} anos`
    } else if (sub <= 50 && gen === "masculino") { 
        //masculino entre 16 e 50 anos
        img.innerHTML = '';
        imagem.src = "assets/img/adulto.png";
        genero.innerHTML = `Adulto de ${sub} anos`
    }  else if (sub > 50 && gen === "masculino") { 
        //masculino acima de 50 anos
        img.innerHTML = '';
        imagem.src = "assets/img/idoso.png";
        genero.innerHTML = `Idoso de ${sub} anos`
    } 

    // Mulher criança
    
   else if (sub <= 15 && gen === "feminino") { 
        //feminino abaixo de 16 anos
       img.innerHTML = '';
       imagem.src = "assets/img/ellie-kid.png";
       genero.innerHTML = `Jovem de ${sub} anos`
   } else if (sub <= 50 && gen === "feminino") { 
       //feminino entre 16 e 50 anos
       img.innerHTML = '';
       imagem.src = "assets/img/ellie-jovem.png";
       genero.innerHTML = `Adulta de ${sub} anos`
   }  else if (sub > 50 && gen === "feminino") { 
       //feminino acima de 50 anos
       img.innerHTML = '';
       imagem.src = "assets/img/idosa.png";
       genero.innerHTML = `Idosa de ${sub} anos`
   } else {
    age.innerHTML = '';
    img.innerHTML = '';
    genero.innerHTML = '';

    age.innerHTML = 'Digite um valor valido';
    img.innerHTML = '';
    genero.innerHTML = 'Digite um ano entre 1910 e 2024, e no campo "Gênero" digite "Feminino ou "Masculino"';

   }


    img.appendChild(imagem)

}