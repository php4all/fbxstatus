var path = require('path');
var gulp = require('gulp');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sequence = require('gulp-sequence');

gulp.task('templates', function () {
	gulp.src('src/templates/**/*.hbs')
		.pipe(handlebars({
			handlebars: require('handlebars')
		}))
		.pipe(wrap('Handlebars.template(<%= contents %>)'))
		.pipe(declare({
			namespace: 'fbxstatus.templates',
			noRedeclare: true
		}))
		.pipe(concat('templates.js'))
//		.pipe(uglify())
		.pipe(gulp.dest('app/js'));

	gulp.src('src/templates/partial/**/*.hbs')
		.pipe(handlebars({
			handlebars: require('handlebars')
		}))
		.pipe(wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>))', {}, {
			imports: {
				processPartialName: function (fileName) {
					return JSON.stringify(path.basename(fileName, '.js'));
				}
			}
		}))
		.pipe(concat('partials.js'))
//		.pipe(uglify())
		.pipe(gulp.dest('app/js'));

});

gulp.task('helpers', function () {
	gulp.src('src/helpers/**/*.js')
		.pipe(concat('helpers.js'))
		.pipe(gulp.dest('app/js'));
});

gulp.task('default', function () {
	sequence('templates, helpers')
});
