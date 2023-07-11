//promesas

const usuariosAutenticado = new Promise ((resolve,reject) =>{
    const auth = true;

    if(auth){
        resolve('Usuario Autenticado');//se cumple la promesa
    }else{
        reject('No se pudo iniciar sesion');//no se cumple la promesa
    }
})

usuariosAutenticado
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error))


//existen 3 valores en las promesas
//pending: no se ha cumplido pero tampoco se ha rechazado
//fulfilled: se cumplio
//rejected: se ha rechazado o no se pudo cumplir