const resultado = document.getElementById('resultado');
const botao = document.getElementById('botao');

button.addEventListener('click', ()=>{
    const words = document.getElementById('words').value;
    const separador = words.split(' ');    
    
    const reverse = separador.reverse();

    result.innerHTML = reverse;
    
});
