//Metodos de propiedad

const reproductor = {
    reproducir : function(id){
        console.log(`reproduciendo cancion con el ID ${id}`);
    },
    pausar: function(){
        console.log(`Pausando...`);
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproducirPlaylist: function(nombre){
        console.log(`reproduciendo la playlist: ${nombre}`)
    }
}

reproductor.borrarCancion = function(id){
    console.log(`Eliminando la cancion: ${id}`);
}

reproductor.reproducir(3940);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('rock');
reproductor.reproducirPlaylist('rock');