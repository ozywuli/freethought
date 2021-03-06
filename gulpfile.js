var gulp = require('gulp');
var del = require('del');
var fileinclude = require('gulp-file-include');
var minifyHTML = require('gulp-minify-html');
var sass = require('gulp-sass');
var neat = require('node-neat').includePaths;
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var cache = require('gulp-cache');
var plumber = require('gulp-plumber');
var cmq = require('gulp-combine-media-queries');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var streamify = require('gulp-streamify');


// HTML
gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
        .pipe(gulp.dest('dev'));

});

gulp.task('html-build', function() {
  var opts = {
    conditionals: true,
    spare: true
  };

    return gulp.src('dev/*.html')
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('dist'));

});


// CSS
gulp.task('css', function() {
  return gulp.src('src/assets/scss/main.scss')
    .pipe(plumber({
        errorHandler: function (err) {
            console.log(err);
            this.emit('end');
        }
    }))
    .pipe(sass({
        includePaths: require('node-neat').includePaths,
        outputStyle: 'expanded'
    }))

    .pipe( autoprefixer('last 2 version') )
    .pipe( cmq({
        log: true
    }))
    .pipe(gulp.dest('dev/assets/css'));
});

gulp.task('css-build', function() {
    return gulp.src('dev/assets/css/*')
        .pipe( minifycss() )
        .pipe( gulp.dest('dist/assets/css') )
});



// JS
gulp.task('js', function() {
    return gulp.src('src/assets/js/*')
    .pipe(gulp.dest('dev/assets/js'));
});


gulp.task('js-build', function() {
    return gulp.src('dev/assets/js/*')
    .pipe(uglify('main.js'))
    .pipe(gulp.dest('dist/assets/js'));
});





// Images
gulp.task('img', function() {
  return gulp.src('src/assets/img/*.{png,gif,jpg}')
    .pipe(gulp.dest('dev/assets/img'))
});
gulp.task('img-build', function() {
  return gulp.src('dev/assets/img/**')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets/img'))
});



// Clean
// gulp.task('clean', function(cb) {
//     del(['dist'], cb)
// });



// Initialize development
gulp.task('default', function() {
    gulp.start('html', 'css', 'js', 'img');
});

// Watch for changes during development
gulp.task('watch', function() {

    gulp.start('html', 'css', 'js', 'img');

    gulp.watch(['src/*.html', 'src/partials/**/*'], ['html']);

    // Watch .scss files
    gulp.watch('src/assets/scss/**/*', ['css']);

    gulp.watch('src/assets/img/**/*', ['img']);


    gulp.watch('src/assets/js/*', ['js'])



});


// Deploy... great success!
gulp.task('build', function() {
    gulp.start('html-build', 'css-build', 'js-build', 'img-build');
});

