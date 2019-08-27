'use strict';

var path = require('path');
var gulpif = require('gulp-if');
var svgmin = require('gulp-svgmin');
var replace = require('gulp-replace');
var svgSprite = require('gulp-svg-sprite');
var cheerio = require('gulp-cheerio');

module.exports = function(gulp, plugins, args, config, taskTarget, browserSync) {
    var dirs = config.directories;
    var dest = path.join(taskTarget, dirs.images.replace(/^_/, ''));

    var settings = {
        mode: {
            symbol: {
                sprite: '../img-sprite.svg',
                prefix: '.svg-',
                dimensions: '%s',
                // render: {
                //     scss: {
                //         dest: '_sprite.scss'
                //     }
                // },
            },
            // dest: './aaa'
        }
    };

    // Imagemin
    gulp.task('svg-img-sprite', function() {
        return gulp.src(path.join(dirs.source, dirs.images, dirs.svgImgSprite, '*.svg'))
            .pipe(plugins.changed(dest))
            // .pipe(gulpif(args.production, plugins.imagemin([
            //   plugins.imagemin.jpegtran({progressive: true}),
            //   plugins.imagemin.svgo({plugins: [{removeViewBox: false}]})
            // ], { use: [pngquant({speed: 10})] })))

            // минифицируем svg
            .pipe(svgmin({
                js2svg: {
                    pretty: true
                },
                // plugins: [{}]
            }))
            // удалить все атрибуты fill, style and stroke в фигурах
            .pipe(cheerio({
                run: function($) {
                    $('[style]').removeAttr('style');
                },
                parserOptions: { xmlMode: true }
            }))
            // cheerio плагин заменит, если появилась, скобка '&gt;', на нормальную.
            .pipe(replace('&gt;', '>'))
            // build svg sprite
            .pipe(svgSprite(settings))
            .pipe(gulp.dest(dest));
    });
}
