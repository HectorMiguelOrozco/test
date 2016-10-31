var gulp = require('gulp');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

gulp.task('browserSync', function () {
    browserSync({
        server: { baseDir: 'app' }
    })
});

gulp.task('watch', ['browserSync'], function(){
    gulp.watch('app/**/*.*', browserSync.reload);
});

gulp.task('default', function (callback) {
    runSequence(['browserSync', 'watch'], callback)
});