const button = document.getElementById('button');
const resultado = document.getElementById('resultado');
const mat = [];

button.addEventListener('click', ()=>{
    const numeros = document.getElementById('numeros').value;
    mat.push(numeros[0]);

            
    for(let z = 0;z < mat.length; z++){
                
        for(let ordem = mat[z].length - 1;ordem > 0;ordem--){                    
            for(let i = 0;i < ordem;i++){                        
                if(mat[z][i] > mat[z][i+1]){                            
                    [mat[z][i], mat[z][i+1]] = [mat[z][i+1], mat[z][i]]
                        
                        }
        	        }
        	    }
            }
            
    resultado.innerHTML = mat; 
});