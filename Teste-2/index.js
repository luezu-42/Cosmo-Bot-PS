const button = document.getElementById('button');
const results = document.getElementById('results');


button.addEventListener('click', ()=>{
    const words = document.getElementById('words').value;
    const separador = words.split(' ');
    
    var texto = '';
    for(i = 0;i < separador.length;i++){
        
        if(i > 0){
        texto += `;${separador[i]}`;
        }
        results.innerHTML = `"${separador[0]}` + texto + `"`;
    }
    //results.innerHTML = `"${separador[0]}` + texto + `"`;
});

//console.log(`"${teste[0]};${teste[1]};${teste[2]}"`);