var gulp = require('gulp');
var ts = require('gulp-typescript');
 
gulp.task('default', function () {
    return gulp.src('*.ts')
        .pipe(ts({
            noImplicitAny: true,
            out: 'compiled.js'
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('reload', ['default'], function () {
	// console.log('\n');
    require('./compiled.js'); // после первого раза уже не запускается, ибо уже зареквайрилось
});

gulp.watch('*.ts', ['default', 'reload']);