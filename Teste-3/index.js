const button = document.getElementById('botao');
const resultado = document.getElementById('resultado');
const mat = [];
const final = [];
let words = '';

button.addEventListener('click', ()=>{
    const numeros = document.getElementById('numeros').value;
    
    for(let i = 0;i < numeros.length;i++){
        mat.push(numeros[i]);
    }
        for(let ordem = mat.length - 1;ordem > 0;ordem--){                    
            for(let i = 0;i < ordem;i++){                        
                if(mat[i] > mat[i+1]){                            
                    [mat[i], mat[i+1]] = [mat[i+1], mat[i]]

                        }
    }
}

    resultado.innerHTML = mat; 
});



//Essa função é para entrada de numeros com o input para text, Ela lê numeros com duas casas.

//button.addEventListener('click', ()=>{
//    const numeros = document.getElementById('numeros').value;
//    
//        mat.push(numeros.split(' '));
//
//        //          TESTE
//        //mat.push(numeros);
//        //for(let i = 0;i < mat[0].length;i++){
//        //    if(mat[0][i] == " " && mat[0][i] == "" ){
//        //        teste[i] = mat[0][i];
//        //        words += teste[i];
//        //    }else{ // if(mat[0][i] == " "){
//        //        
//        //        final.push(words);
//        //        words = ' ';
//        //    }
//        //}
//
//        for(let z = 0;z < mat.length;z++){
//        for(let ordem = mat[z].length - 1;ordem > 0;ordem--){                    
//            for(let i = 0;i < ordem;i++){                        
//                if(mat[z][i] > mat[z][i+1]){                            
//                    [mat[z][i], mat[z][i+1]] = [mat[z][i+1], mat[z][i]]
//                        
//                        }
//        	        }
//        	    }
//        }
//    resultado.innerHTML = mat; 
//});


numeros.addEventListener('focus',()=>{
    document.getElementById('numeros').value = '';
});