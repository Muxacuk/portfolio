var gulp = require("gulp"),
	plumber = require('gulp-plumber'),
	pug = require('gulp-pug'),
	sass = require('gulp-sass'),
	browserSync = require("browser-sync"),
	spritesmith = require('gulp.spritesmith'),
	autoprefixer = require('gulp-autoprefixer'),
	svgSprite = require('gulp-svg-sprite'),
	svgmin = require('gulp-svgmin'),
	cheerio = require('gulp-cheerio'),
	replace = require('gulp-replace'),
	concat = require('gulp-concat'),
	webpackStream = require('webpack-stream'),
	webpack = require('webpack');

var path = ["node_modules/jquery/dist/jquery.min.js"];

gulp.task('pug', function () {
	gulp.src('app/_jade/*.pug')
	    .pipe(plumber())
	    .pipe(pug({
      				pretty: true
    	}))
	    .pipe(gulp.dest('dist/'));
});

gulp.task('sass', function () {
  gulp.src('app/_sass/*.scss')
  	.pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('server',function(){
		browserSync({
			port: 9000,
			server: {
				baseDir: 'dist'
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
		.pipe(gulp.dest('dist/css/'));
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
					sprite: "../../dist/pictures/sprite.svg",
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
	  .pipe(gulp.dest('dist/js/'))
});

gulp.task('jsBuild', () => {
	return gulp.src('app/js/main.js')
		.pipe(webpackStream({
			watch: true,

			output: {
			  filename: 'main.js',
			  library: 'app'
			},

			devtool: "source-map",

			module: {
				rules: [
					{
						test: /\.js$/,
						loader: 'babel-loader',
						query: {
							presets: ['es2015']
						}
					}
				]
			}/*,
			plugins: [
				new webpack.optimize.UglifyJsPlugin({
					compress: {
						warnings: false,
						drop_console: true,
						unsafe: true
					}
				})
			]*/
		},webpack))
		.on('error', function handleError() {
		      this.emit('end'); // Recover from errors
		})
		.pipe(gulp.dest('dist/js/'));
});

gulp.task('imgCopy', () => {
	gulp.src('app/img/*')
		.pipe(gulp.dest('dist/img/'));
	gulp.src('app/pictures/*')
		.pipe(gulp.dest('dist/pictures/'));

});

gulp.task('watch', function(){
	gulp.watch([
			'dist/*.html',
			'dist/js/*.js',
			'dist/css/*.css'
	]).on('change', browserSync.reload);
	gulp.watch('app/_sass/**/*',['sass','autoprefix']);
	gulp.watch('app/_jade/**/*',['pug']);
	gulp.watch('dist/pictures/sprite//*',['spritePng']);
	gulp.watch('app/pictures/svgIcons/*',['svgSpriteBuild']);
});

gulp.task('default',['server','watch','jsLibs','imgCopy', 'jsBuild']);