'use strict';

import path from 'path';
import glob from 'glob';
import browserify from 'browserify';
import watchify from 'watchify';
import envify from 'envify';
import babelify from 'babelify';
import vsource from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import gulpif from 'gulp-if';
import colors from 'ansi-colors';
import log from 'fancy-log';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
    let dirs = config.directories;
    let entries = config.entries;

    let browserifyTask = (files) => {
        return files.map((entry) => {
            let dest = path.join(taskTarget, dirs.scripts.replace(/^_/, ''));

            // Options
            let customOpts = {
                basedir: path.join('./', dirs.source, dirs.scripts),
                entries: [entry],
                debug: true,
                transform: [
                    [babelify, { presets: ['@babel/preset-env'] }], // Enable ES6 features
                    envify // Sets NODE_ENV for better optimization of npm packages
                ]
            };

            let bundler = browserify(customOpts);

            if (!args.production) {
                // Setup Watchify for faster builds
                let opts = Object.assign({}, watchify.args, customOpts);
                bundler = watchify(browserify(opts));
            }

            let rebundle = function() {
                let startTime = new Date().getTime();
                bundler.bundle()
                    .on('error', function(err) {
                        log(
                            colors.red('Browserify compile error:'),
                            '\n',
                            err.stack,
                            '\n'
                        );
                        this.emit('end');
                    })
                    .on('error', plugins.notify.onError(config.defaultNotification))
                    .pipe(vsource(entry))
                    .pipe(buffer())
                    .pipe(gulpif(!args.production, plugins.sourcemaps.init({loadMaps: true})))
                    .pipe(gulpif(args.production, plugins.terser({
                        compress: {
                            drop_console: true
                        }
                    })))
                    .on('error', plugins.notify.onError(config.defaultNotification))
                    .pipe(plugins.rename(function(filepath) {
                        // Remove 'source' directory as well as prefixed folder underscores
                        // Ex: 'src/_scripts' --> '/scripts'
                        filepath.dirname = filepath.dirname.replace(dirs.source, '').replace('_', '');
                        filepath.basename = args.production ? filepath.basename + '.min' : filepath.basename;
                    }))
                    .pipe(gulpif(!args.production, plugins.sourcemaps.write('./')))
                    .pipe(gulp.dest(dest))
                    // Show which file was bundled and how long it took
                    .on('end', function() {
                        let time = (new Date().getTime() - startTime) / 1000;
                        console.log(
                            colors.cyan(entry)
                            + ' was browserified: '
                            + colors.magenta(time + 's'));
                        return browserSync.reload('*.js');
                    });
            };

            if (!args.production) {
                bundler.on('update', rebundle); // on any dep update, runs the bundler
                bundler.on('log', log); // output build logs to terminal
            }
            return rebundle();
        });
    };

    // Browserify Task
    gulp.task('browserify', (done) => {
        return glob(entries.js, { cwd: path.join('./', dirs.source, dirs.scripts) }, function(err, files) {
            if (err) {
                done(err);
            }

            return browserifyTask(files);
        });
    });
}
