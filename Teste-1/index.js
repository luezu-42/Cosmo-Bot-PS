const resultado = document.getElementById('resultado');
const botao = document.getElementById('botao');
const mat = [];
const teste = [];
const final = [];
let words = '';

botao.addEventListener('click', ()=>{
    const palavras = document.getElementById('palavras').value;
    const separador = palavras.split(' ');    
    
    const reverse = separador.reverse();

    resultado.innerHTML = reverse;
    
});



//    Correção do código
//          
//          \|
//         _\|__
//        \    |
//         \  |
//          \|
//
//botao.addEventListener('click', ()=>{
//    mat.length = [];
//    let z = 0;
//    let i = 0;
//
//    const palavras = document.getElementById('palavras').value;
//    mat.push(palavras.split(' ').reverse());
//
//    let texto = '';
//
//    resultado.innerHTML = '';
//
//    for(i = 0;i < mat.length; i++){
//        for(z = 0;z < mat[i].length;z++){
//            
//            if(mat[i][0] == 0){
//
//            texto = `${mat[i][z]}` + ` `;
//            
//            }else{
//                
//            texto += ` ` + `${mat[i][z]}`;
//
//            }
//    }
//    
//    
//}
//resultado.innerHTML = ` ${texto} `;
//});


//  Tentativa de retirada do metodo split() = O(feito) e reverse() = X(falhou)

//botao.addEventListener('click', ()=>{
//    const palavras = document.getElementById('palavras').value;
//    let texto = '';
//    mat.push(palavras);
//
//    // split()
//    for(let i = 0;i < mat[0].length;i++){
//        if(mat[0][i] != " "){
//            teste[i] = mat[0][i];
//            words += teste[i];
//        }else{ // if(mat[0][i] == " "){
//            
//            final.push(words);
//            words = ' ';
//        }
//    }
//
//    final.push(words);
//    final.reverse();
//
//    for(let i = 0;i < final.length; i++){
//        if(final.length == 0){
//        texto = `${final[i]}` + ` ` ;
//        }else{
//        texto += ` ` + `${final[i]}`;
//        }
//    }
//
//    resultado.innerHTML = `${texto}`
//});
//
//palavras.addEventListener('focus', ()=>{
//    document.getElementById('palavras').value = '';
//});
