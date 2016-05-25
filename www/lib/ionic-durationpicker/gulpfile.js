// Plugins
var gulp = require('gulp');
var del = require('del');
var templateCache = require('gulp-angular-templatecache');
var concat = require('gulp-concat');
var css2js = require('gulp-css2js');
var minifyHtml = require('gulp-minify-html');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

// Plugin Settings
var templateCacheOptions = {
  module: 'ionic-durationpicker.templates',
  standalone: true,
  templateHeader: '(function() {\n\t\t\'use strict\';\n\t\tangular\n\t\t\t\t.module("<%= module %>"<%= standalone %>)\n\t\t\t\t.run(cacheTemplates);\n\n\t\tcacheTemplates.$inject = ["$templateCache"];\n\n\t\tfunction cacheTemplates($templateCache) {\n',
  templateBody: '\t\t\t\t$templateCache.put("<%= url %>","<%= contents %>");\n',
  templateFooter: '\t\t}\n})();'
};

// Tasks
gulp.task('default', ['del', 'css2js', 'cache-templates', 'concat', 'uglify']);

gulp.task('del', function() {
  del(['./src/templates.js', './src/styles.js', './dist/*']);
});

gulp.task('cache-templates', ['del'], function(done) {
  gulp.src('./src/templates/*.html')
    .pipe(minifyHtml())
    .pipe(templateCache(templateCacheOptions))
    .pipe(gulp.dest('./src'))
    .on('end', done);
});

gulp.task('css2js', ['del'], function(done) {
  gulp.src('./src/css/*.css')
    .pipe(css2js())
    .pipe(gulp.dest('./src'))
    .on('end', done);
});

gulp.task('concat', ['cache-templates', 'css2js'], function(done) {
  gulp.src(['./src/templates.js', './src/module.js', './src/directives.js', './src/styles.js'])
    .pipe(concat('ionic-durationpicker.js'))
    .pipe(gulp.dest('./dist'))
    .on('end', done);
});

gulp.task('uglify', ['concat'], function(done) {
  gulp.src('./dist/ionic-durationpicker.js')
    .pipe(uglify())
    .pipe(rename('ionic-durationpicker.min.js'))
    .pipe(gulp.dest('./dist'))
    .on('end', done);
});
