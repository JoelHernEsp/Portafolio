// async /await

function descargarNuevosClientes(){
    return new Promise(resolve =>{
        console.log('descargando clientes... espere...');

        setTimeout( () =>{
            resolve('Los clientes fueron Descargados');
        },5000);



    });
}

function descargarNuevosPedidos(){
    return new Promise(resolve =>{
        console.log('descargando pedidos... espere...');

        setTimeout( () =>{
            resolve('Los pedidos fueron Descargados');
        },3000);



    });
}

async function app(){
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarNuevosPedidos();
        // console.log(clientes)
        // console.log(pedidos)

        const resultado = await Promise.all([descargarNuevosClientes(),descargarNuevosPedidos()]);
        console.log(resultado[0])
        console.log(resultado[1])
    } catch (error) {
        console.log(error);
    }
}

app();




// setTimeout( function(){ //timeout manda una sola vez la accion luego del tiempo establecido
//     console.log('set timeout...')
// }, 5000);

// setInterval( function(){ //Interval repite la accion el tiempo establecido
//     console.log('set timeout...')
// }, 5000);

