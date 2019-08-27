'use strict';

var path = require('path');
var autoprefixer = require('autoprefixer');
var gulpif = require('gulp-if');
var log = require('fancy-log');

module.exports = function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  var entries = config.entries;
  var dest = path.join(taskTarget, dirs.styles.replace(/^_/, ''));
  // var dest = path.resolve(taskTarget);

  // Sass compilation
  gulp.task('sass', function(done) {
    gulp.src(entries.css, { cwd: path.join(dirs.source, dirs.styles) })
      .pipe(plugins.plumber())
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass({
        outputStyle: 'expanded',
        precision: 10,
        includePaths: [
          path.join(dirs.source, dirs.styles),
          path.join(dirs.source, dirs.modules)
        ]
      }))
      .on('error', function(err) {
        log(err);
      })
      .on('error', plugins.notify.onError(config.defaultNotification))
      .pipe(plugins.postcss([ autoprefixer() ]))
      .pipe(plugins.rename(function(filepath) {
        // Remove 'source' directory as well as prefixed folder underscores
        // Ex: 'src/_styles' --> '/styles'
        filepath.dirname = filepath.dirname.replace(dirs.source, '').replace('_', '');
      }))
      .pipe(gulpif(args.production, plugins.cssnano({rebase: false})))
      .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest(dest))
      .pipe(browserSync.stream({match: '**/*.css'}));

    done();
  });

};
