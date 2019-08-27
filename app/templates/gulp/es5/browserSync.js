'use strict';

module.exports = function(gulp, plugins, args, config, taskTarget, browserSync) {
    let dirs = config.directories;
    // BrowserSync
    gulp.task('browserSync', function() {
        browserSync.init({
            open: args.open ? 'local' : false,
            startPath: dirs.pages.replace(/^_/, ''),
            port: config.port || 3000,
            server: {
                baseDir: taskTarget,
                routes: (function() {
                    var routes = {};

                    // Map base URL to routes
                    routes[dirs.pages.replace(/^_/, '')] = taskTarget;

                    return routes;
                })()
            }
        });
    });
};
