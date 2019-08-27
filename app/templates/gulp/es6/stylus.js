'use strict';

import path from 'path';
import autoprefixer from 'autoprefixer';
import gulpif from 'gulp-if';
import log from 'fancy-log';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
    let dirs = config.directories;
    let entries = config.entries;
    let dest = path.join(taskTarget, dirs.styles.replace(/^_/, ''));

    // Stylus compilation
    gulp.task('stylus', () => {
        return gulp.src(entries.css, { cwd: path.join(dirs.source, dirs.styles) })
            .pipe(plugins.plumber())
            .pipe(gulpif(!args.production, plugins.sourcemaps.init()))
            .pipe(plugins.stylus({
                compress: true,
                'include css': true
            }))
            .on('error', function(err) {
                log(err);
            })
            .on('error', plugins.notify.onError(config.defaultNotification))
            .pipe(plugins.postcss([ autoprefixer() ]))
            .pipe(plugins.rename(function(path) {
                // Remove 'source' directory as well as prefixed folder underscores
                // Ex: 'src/_styles' --> '/styles'
                path.dirname = path.dirname.replace(dirs.source, '').replace('_', '');
                path.basename = args.production ? path.basename + '.min' : path.basename;
            }))
            .pipe(gulpif(args.production, plugins.cssnano({rebase: false})))
            .pipe(gulpif(!args.production, plugins.sourcemaps.write('./')))
            .pipe(gulp.dest(dest))
            .pipe(browserSync.stream({match: '**/*.css'}));
    });
}
