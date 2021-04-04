'use strict';
<% if (testFramework === 'mocha' || testFramework === 'jasmine') { %>
import path from 'path';<% } %>
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSyncLib from 'browser-sync';
import pjson from './package.json';
import minimist from 'minimist';
import glob from 'glob';

// Load all gulp plugins based on their names
// EX: gulp-copy -> copy
const plugins = gulpLoadPlugins();<% if (testFramework !== 'none') { %>
// Create karma server
const KarmaServer = require('karma').Server;<% } %>

const defaultNotification = function(err) {
    return {
        subtitle: err.plugin,
        message: err.message,
        sound: 'Funk',
        onLast: true,
    };
};

let config = Object.assign({}, pjson.config, defaultNotification);

let args = minimist(process.argv.slice(2));
let dirs = config.directories;
let taskTarget = args.production ? dirs.destination : dirs.temporary;

// Create a new browserSync instance
let browserSync = browserSyncLib.create();

// This will grab all js in the `gulp` directory
// in order to load all gulp tasks
glob.sync('./gulp/**/*.js').filter(function(file) {
    return (/\.(js)$/i).test(file);
}).map(function(file) {
    require(file)(gulp, plugins, args, config, taskTarget, browserSync);
});


// Build production-ready code
gulp.task('build', gulp.series(
    'copy',
    'imagemin',
    'svg-icon-sprite',
    'svg-img-sprite'<% if (htmlOption === 'pug') { %>,
    'pug'<% } else if (htmlOption === 'nunjucks') {  %>,
    'nunjucks'<% } %><% if (cssOption === 'sass') { %>,
    'sass'<% } %>,
    'browserify'
));

// Server tasks with watch
gulp.task('serve', gulp.series(
    gulp.parallel(
        'imagemin',
        'svg-icon-sprite',
        'svg-img-sprite',
        'copy'<% if (htmlOption === 'pug') { %>,
        'pug'<% } else if (htmlOption === 'nunjucks') {  %>,
        'nunjucks'<% } %><% if (cssOption === 'sass') { %>,
        'sass'<% } %>,
        'browserify'
    ),
    gulp.parallel(
        'browserSync',
        'watch'
    )
));

// Testing
gulp.task('test', gulp.series('eslint'<% if (testFramework === 'none') { %>));<% } else { %>, (done) => {
    new KarmaServer({
        configFile: path.join(__dirname, '/karma.conf.js'),
        singleRun: !args.watch,
        autoWatch: args.watch
    }, done).start();
});<% } %>

// Default task
gulp.task('default', gulp.series('clean', 'build', (done) => {
    done();
}));