'use strict';

import path from 'path';
import gulpif from 'gulp-if';
import svgmin from 'gulp-svgmin';
import replace from 'gulp-replace';
import svgSprite from 'gulp-svg-sprite';
import cheerio from 'gulp-cheerio';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
    let dirs = config.directories;
    let dest = path.join(taskTarget, dirs.images.replace(/^_/, ''));

    let settings = {
        mode: {
            symbol: {
                sprite: '../icon-sprite.svg',
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
    gulp.task('svg-icon-sprite', () => {
        return gulp.src('*.svg', { cwd: path.join(dirs.source, dirs.images, dirs.svgSprite, dirs.svgIconSprite) })
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
                plugins: [{
                    // collapseGroups: false
                }]
            }))
            // Delete all attributes fill, style and stroke in shapes
            .pipe(cheerio({
                run: function($) {
                    $('[fill]').removeAttr('fill');
                    $('[stroke]').removeAttr('stroke');
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
