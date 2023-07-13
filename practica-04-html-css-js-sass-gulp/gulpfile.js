const { src, dest, watch, parallel } = require("gulp");

//CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

//IMAGENES

const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif')

//JavaScript
const terser = require('gulp-terser-js');

function css(done){
    src('src/scss/**/*.scss')    //Identificar el archivo de SASS
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass())             //Compilarlo
        .pipe(postcss( [ autoprefixer(), cssnano() ]) )//este se agrega al concluir la pagina para que se pueda optimizar la hoja de estilos
        .pipe(sourcemaps.write('.'))//da un mejor formato a la hoja de estilos evitando que todo este en una sola linea y sea facil manipularla despues
        .pipe(dest("build/css"))   //Guardarla en el HDD
    done();//callback que avisa a gulp cuando se llega al final de la ejecucion
}

function imagenes(done){
    const opciones= {
        optimizationLevel: 3
    }
    src('src/img/**/*.{png,jpg}')
        .pipe( cache( imagemin(opciones) ) )
        .pipe( dest('build/img') )
    done();
}

function versionWebp(done){
    const opciones = {
        queality:50
    };
    src('src/img/**/*.{png,jpg}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'))
    done();
}

function versionAvif(done){
    const opciones = {
        queality:50
    };
    src('src/img/**/*.{png,jpg}')
        .pipe(avif(opciones))
        .pipe(dest('build/img'))
    done();
}

function javascript(done){
    src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/js'))

    done();
}


function dev(done){
    watch( 'src/scss/**/*.scss',css );
    watch( 'src/js/**/*.js',javascript );
    done();
}

exports.css = css;
exports.javascript = javascript;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(imagenes,versionWebp,versionAvif,javascript,dev);