const {src , dest , watch , series , task} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles(){
    return src('**/*.scss' , { sourcemaps: true }).pipe(sass({outputStyle : 'compressed'})).pipe(dest('dist/css' , { sourcemaps: true }))
}

function WatchTask(){
    watch(['main.scss','**/*.scss'] , buildStyles)
}

task('style' , WatchTask);