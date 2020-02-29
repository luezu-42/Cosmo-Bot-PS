const botao = document.getElementById('botao');
const resultado = document.getElementById('resultado');


botao.addEventListener('click', ()=>{
    const palavras = document.getElementById('palavras').value;
    const separador = palavras.split(' ');
    
    var texto = '';
    for(let i = 0;i < separador.length;i++){
        
        if(i > 0){
        texto += `;${separador[i]}`;
        }
        resultado.innerHTML = `"${separador[0]}` + texto + `"`;
    }
    //results.innerHTML = `"${separador[0]}` + texto + `"`;
});

//console.log(`"${teste[0]};${teste[1]};${teste[2]}"`);