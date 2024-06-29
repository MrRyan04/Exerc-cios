function calcular(){
    let input1 = Number(document.querySelector('#first').value);
    let input2 = Number(document.querySelector('#second').value);
    let input3 = Number(document.querySelector('#third').value);
    let bot = document.getElementById('bot');
    let pe = document.querySelector ('#pe')

    
    if (input3 <= 0 ) {
        pe.style.display = 'block'
        pe.innerHTML = 'Select a number greater than 0'
   } else if (input3 == '') {
        pe.innerHTML = ''
        pe.innerHTML = 'Inputs cannot be empty'
        pe.style.display = 'block'
    }   else if (input1 < input2) {
        pe.innerHTML = ''
        pe.style.display = 'block'
        pe.innerHTML = 'Counting'
       for(let N = input1; N <= input2; N = N + input3){
        pe.innerHTML += ` ...${N}`
       } 
         pe.innerHTML += ' ...done'
       pe.innerHTML += `<br>ps: Any other addition would result a number greater than ${input2}`

    } else if (input1 > input2) {
        pe.innerHTML = ''
        pe.style.display = 'block'
        pe.innerHTML = 'Counting'
       for(let N = input1; N >= input2; N = N - input3){
        pe.innerHTML += ` ...${N}`
        }
        pe.innerHTML += ' ...done'
         pe.innerHTML += `<br>ps: Any other subtraction would result a number less than ${input2}`

    } else if (input1 == input2) {
        pe.innerHTML = "Numbers can't be the same"
        pe.style.display = 'block'
    }
}
