var gulp = require('gulp');
var path = require('path');
var del = require('del');
var gutil=require('gulp-util');
var runSequence = require('run-sequence').use(gulp);
var webpack = require("webpack");

var html_dir = require('./f2eci.json').output;
var build_dir = require('./f2eci.json').dist;



gulp.task('clean', function () {
    return del([
        build_dir + "/**/**"
    ]);
});

gulp.task('html', function () {
    return gulp.src(['./' + html_dir + '/**/*.*'])
        .pipe(gulp.dest(build_dir));
});


gulp.task('webpack', function (cb) {
    webpack(require('./webpack.config'), function(err, stats) {
        if(err) { throw new gutil.PluginError('webpack:build', err,{showStack: true}); }
        gutil.log('[webpack:build]', stats.toString({
            // chunks: false, // Makes the build much quieter
            colors: true
        }));
        var jsonStats = stats.toJson();
        if(jsonStats.errors.length > 0)
            throw new gutil.PluginError('webpack:build',jsonStats.errors.toString(),{showStack: true});
        cb();
    });
});


gulp.task('default', function () {
    runSequence('clean', 'html');
});

