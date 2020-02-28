const result = document.getElementById('result');
const button = document.getElementById('button');

button.addEventListener('click', ()=>{
    const words = document.getElementById('words').value;
    const separador = words.split(' ');    
    
    const reverse = separador.reverse();

    result.innerHTML = reverse;
    
});
