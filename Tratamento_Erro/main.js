// function soma (x,y){
//     if( typeof x !== 'number' || typeof y !== 'number'){
//         throw new Error('X e Y precisam ser números!');
//     }
//     return x +y;
// }

// try{
//     console.log(soma(1,2));
//     console.log(soma('1','2'));
// } catch(err){
//     console.log(err);
// }

// try{} É EXECUTADO QUANDO NÃO DA ERRO
// catch{} É EXECUTADO QUANDO DÁ ERRO
// finnaly{} SEMPRE É EXECUTADO  

// try{
//     console.log(a)
//     console.log('Abri um arquivo')
//     console.log('Manipulei o arquivo e deu erro')
//     console.log('Fechei o arquivo')
// } catch(e){
//     console.log('Tratando o erro')
// } finally{
//     console.log('SEMPRE EXECUTO')
// }

function retornaHora (data){
    if(data &&!(data instanceof Date)){
        throw new TypeError('Esperando intancia de DATE');
    };

    if(!data){
        data = new Date();
    };

    return data.toLocaleTimeString('pt-BR',{
        hour : '2-digit',
        minute : '2-digit',
        second : '2-digit',
    });
}

try {
    const data = new Date ('01-01-1970 12:58:12')
    const hora = retornaHora(data);
    console.log(hora)   
} catch(e){
    console.log ('Tratar erro')
} finally{
    console.log ('Tenha um bom dia')
}