'use strict';

import path from 'path';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
    let dirs = config.directories;
    let dest = path.join(taskTarget);

    // Copy
    gulp.task('copy', (done) => {
        return gulp.src([
            '**/*',
            '!{**/\_*,**/\_*/**}'<% if (htmlOption === 'nunjucks') { %>,
            '!**/*.nunjucks'<% } else if (htmlOption === 'pug') { %>,
            '!**/*.pug'<% } %>
        ], { cwd: path.join(dirs.source) })
            .pipe(plugins.changed(dest))
            .pipe(gulp.dest(dest));
    });
}
