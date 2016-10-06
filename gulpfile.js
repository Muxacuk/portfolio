var gulp = require("gulp"),
	plumber = require('gulp-plumber'),
	jade = require('gulp-jade'),
	sass = require('gulp-sass'),
	browserSync = require("browser-sync"),
	spritesmith = require('gulp.spritesmith'),
	autoprefixer = require('gulp-autoprefixer'),
	svgSprite = require('gulp-svg-sprite'),
	svgmin = require('gulp-svgmin'),
	cheerio = require('gulp-cheerio'),
	replace = require('gulp-replace'),
	concat = require('gulp-concat'),
	tsify = require("tsify"),
	browserify = require('browserify'),
	source = require('vinyl-source-stream');

var path = ["node_modules/jquery/dist/jquery.min.js"];

gulp.task('jade',function () {
	gulp.src('app/_jade/*.jade')
	    .pipe(plumber())
	    .pipe(jade({
      				pretty: true
    	}))
	    .pipe(gulp.dest('app/'));
});


gulp.task('sass', function () {
  gulp.src('app/_sass/*.scss')
  	.pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'));
});

gulp.task('server',function(){
		browserSync({
			port: 9000,
			server: {
				baseDir: 'app'
			}
		})
});

gulp.task('autoprefix', function () {
	return gulp.src('app/css/main.css')
		.pipe(plumber())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('app/css/'));
});


gulp.task('spritePng', function () {
  var spriteData = gulp.src('app/pictures/sprite/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.scss',
    padding: 20
  }));

  var imgStream = spriteData.img
    .pipe(buffer())
    .pipe(imagemin())
    .pipe(gulp.dest('app/pictures/'));

  var cssStream = spriteData.css
    .pipe(gulp.dest('app/_sass/common/'));

  return merge(imgStream, cssStream);
});

gulp.task('svgSpriteBuild', function () {
	return gulp.src('app/pictures/svgIcons/*.svg')

		// remove all fill, style and stroke declarations in out shapes
		.pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: {xmlMode: true}
		}))
		// cheerio plugin create unnecessary string '&gt;', so replace it.
		.pipe(replace('&gt;', '>'))
		// build svg sprite
		.pipe(svgSprite({
			mode: {
				symbol: {
					sprite: "../pictures/sprite.svg",
					render: {
						scss: {
							dest:'../_sass/common/_spriteSvg.scss',
							template: "app/_sass/templates/_sprite_template.scss"
						}
					}
				}
			}
		}))
		.pipe(gulp.dest('app'));
});
gulp.task('jsLibs', function() {
	return gulp.src(path)
	  .pipe(concat('foundation.js'))
	  .pipe(gulp.dest('app/js/'))
});


gulp.task("jsBuild", function(){
    return browserify({
        basedir: 'app',
        debug: true,
        entries: ['ts/main.ts']
    })
        .plugin(tsify)
        .bundle()
    	.on('error', function (error) { console.error(error.toString()); })
        .pipe(source('main.js'))
        .pipe(gulp.dest("app/js"));
});

gulp.task('watch', function(){
	gulp.watch([
			'app/index.html',
			'app/js/**/*.js',
			'app/css/*.css'
	]).on('change', browserSync.reload);
	gulp.watch('app/_sass/**/*',['sass','autoprefix']);
	gulp.watch('app/_jade/**/*',['jade']);
	gulp.watch('app/pictures/sprite//*',['spritePng']);
	gulp.watch('app/pictures/svgIcons/*',['svgSpriteBuild']);
	gulp.watch('app/ts/**/*',['jsBuild']);

});

gulp.task('default',['server','watch','jsLibs']);