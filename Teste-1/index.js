const resultado = document.getElementById('resultado');
const botao = document.getElementById('botao');

botao.addEventListener('click', ()=>{
    const palavras = document.getElementById('palavras').value;
    const separador = palavras.split(' ');    
    
    const reverse = separador.reverse();

    resultado.innerHTML = reverse;
    
});
