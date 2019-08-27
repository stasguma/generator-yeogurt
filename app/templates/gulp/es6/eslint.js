/*eslint no-process-exit:0 */

'use strict';

import path from 'path';
import gulpif from 'gulp-if';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
    let dirs = config.directories;

    // ESLint
    gulp.task('eslint', (done) => {
        return gulp.src([<% if (jsPreprocessor === 'none') { %>
            'gulpfile.js',<% } else if (jsPreprocessor === 'es6') { %>
            'gulpfile.babel.js',<% } %>
            dirs.source + '/**/*.js',
            // Ignore all vendor folder files
            '!**/vendor/**/*'
        ])
            .pipe(browserSync.reload({stream: true, once: true}))
            .pipe(plugins.eslint({
                useEslintrc: true
            }))
            .pipe(plugins.eslint.format())
            .pipe(gulpif(!browserSync.active, plugins.eslint.failAfterError()))
            .on('error', function() {
                if (!browserSync.active) {
                    process.exit(1);
                }
            });
    });
}
