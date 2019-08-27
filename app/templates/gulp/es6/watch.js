'use strict';

import path from 'path';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
    let dirs = config.directories;
    let entries = config.entries;

    // Watch task
    gulp.task('watch', () => {
        if (!args.production) {<% if (cssOption === 'sass') { %>
            // Styles
            gulp.watch([
                dirs.styles + '/**/*.{scss,sass}',
                dirs.modules + '/**/*.{scss,sass}'
            ], { cwd: path.join(dirs.source) }, gulp.series('sass'));<% } else if (cssOption === 'less') { %>
            gulp.watch([
                dirs.styles + '/**/*.less',
                dirs.modules + '/**/*.less'
            ], { cwd: path.join(dirs.source) }, gulp.series('less'));<% } else if (cssOption === 'stylus') { %>
            gulp.watch([
                dirs.styles + '/**/*.styl',
                dirs.modules + '/**/*.styl'
            ], { cwd: path.join(dirs.source) }, gulp.series('stylus'));
            <% } %><% if (htmlOption === 'pug') { %>

            // Pug Templates
            gulp.watch([
                '**/*.pug',
                dirs.data + '/**/*.{json,yaml,yml}'
            ], { cwd: path.join(dirs.source) }, gulp.series('pug'));<% } else if (htmlOption === 'nunjucks') { %>

            // Nunjucks Templates
            gulp.watch([
                '**/*.nunjucks',
                dirs.data + '/**/*.{json,yaml,yml}'
            ], { cwd: path.join(dirs.source) }, gulp.series('nunjucks'));
            <% } %>

            // Copy
            gulp.watch([
                '**/*',
                '!{**/\_*,**/\_*/**}'<% if (htmlOption === 'nunjucks') { %>,
                '!**/*.nunjucks'<% } else if (htmlOption === 'pug') { %>,
                '!**/*.pug'<% } %>
            ], { cwd: path.join(dirs.source) }, gulp.series('copy'));

            // Images
            //  ignore doesn`t work
            gulp.watch([
                entries.image,
                `!${dirs.svgSprite}/**/*`
            ], { cwd: path.join(dirs.source, dirs.images) }, gulp.series('imagemin'));

            // Svg icon sprite
            //  ignore doesn`t work
            gulp.watch([
                '**/*.svg'
            ], { cwd: path.join(dirs.source, dirs.images, dirs.svgSprite, dirs.svgIconSprite) }, gulp.series('svg-icon-sprite'));

            // Svg img sprite
            //  ignore doesn`t work
            gulp.watch([
                '**/*.svg'
            ], { cwd: path.join(dirs.source, dirs.images, dirs.svgSprite, dirs.svgImgSprite) }, gulp.series('svg-img-sprite'));

            // All other files
            gulp.watch([
                '**/*',
                '!**/*.{css,map,html,js}'
            ], { cwd: path.join(dirs.temporary) }).on('change', browserSync.reload);
        }
    });
}
