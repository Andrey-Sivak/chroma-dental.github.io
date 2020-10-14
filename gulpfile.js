const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const del = require('del');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const webpack = require('webpack-stream');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const replace = require('gulp-replace');

let isDev = true;
let isProd = !isDev;

let webpackConfig = {
	output: {
		filename: 'main.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/' //исключения
			}
		]
	},
	mode: isDev ? 'development' : 'production'
};

function fonts() {
	return gulp.src('./app/fonts/*')
		.pipe(gulp.dest('./dist/fonts'));
}

function scss() {
	return gulp.src('./app/sass/**/*.scss')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(postcss([ autoprefixer() ]))
		.pipe(gulp.dest('app/css'));
}

function styles() {
	return gulp.src('app/css/*.css')
		.pipe(rename({ suffix: '.min' }))
		.pipe(replace(/([../]{3,})/g, '../'))
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.stream());
}

/*function styles() {

	const dist = './dist/css';
	return gulp.src('./app/sass/!**!/!*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(postcss([ autoprefixer() ]))
        .pipe(rename('all.css'))
		.pipe(sourcemaps.write('.'))
		.pipe(replace(/([../]{3,})/g, '../'))
		.pipe(gulp.dest( dist ))
		.pipe(browserSync.stream());
}*/

function scripts() {
	return gulp.src('app/js/main.js')
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest('dist/js'))
		.pipe(browserSync.stream());
}

function img() {
	return gulp.src('./app/img/**/**/**/*')
		/*.pipe(imagemin([
	    imagemin.gifsicle({interlaced: true}),
	    imagemin.mozjpeg({progressive: true}),
	    imagemin.optipng({optimizationLevel: 5})
		]))*/
		.pipe(gulp.dest('./dist/img'))
}

function svg() {
	return gulp.src('app/img/*.svg')
		.pipe(gulp.dest('dist/img'));
}

function watch() {
	browserSync.init({
    server: {
      baseDir: './'
    }//,
    //proxy: 'test',
    //tunnel: true
  });
	gulp.watch('./app/sass/**/*.scss', gulp.series( scss, styles ));
	gulp.watch('./app/js/**/*.js', scripts);
	gulp.watch('./*.html', html);
}	

function clean() {
	return del(['dist/*']);
}

function html() {
	return gulp.src('*.html')
		.pipe(browserSync.stream());
}

// gulp.task('style', gulp.series( scss, styles ));
gulp.task('watch', watch);

gulp.task('img', img);
gulp.task('fonts', fonts);

let build = gulp.series(clean,
	gulp.parallel(gulp.series( scss, styles ), scripts, img, svg, html, fonts)
);

gulp.task('build', build);
gulp.task('dev', gulp.series('build', 'watch'));
