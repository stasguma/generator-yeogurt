/**
* Generate files specific to needed images
*/

'use strict';

const gulpFiles = function gulpFiles() {
    const templates = [];
    if (this.jsPreprocessor === 'none') {
        templates.push(
            { from: 'gulp/es5/browserify.js', to: 'gulp/browserify.js' },
            { from: 'gulp/es5/browserSync.js', to: 'gulp/browserSync.js' },
            { from: 'gulp/es5/clean.js', to: 'gulp/clean.js' },
            { from: 'gulp/es5/copy.js', to: 'gulp/copy.js' },
            { from: 'gulp/es5/eslint.js', to: 'gulp/eslint.js' },
            { from: 'gulp/es5/imagemin.js', to: 'gulp/imagemin.js' },
            { from: 'gulp/es5/svg-icon-sprite.js', to: 'gulp/svg-icon-sprite.js' },
            { from: 'gulp/es5/svg-img-sprite.js', to: 'gulp/svg-img-sprite.js' },
            { from: 'gulp/es5/watch.js', to: 'gulp/watch.js' }
        );

        if (this.htmlOption === 'pug') {
            templates.push({ from: 'gulp/es5/pug.js', to: 'gulp/pug.js' });
        }
        else if (this.htmlOption === 'nunjucks') {
            templates.push({ from: 'gulp/es5/nunjucks.js', to: 'gulp/nunjucks.js' });
        }

        if (this.cssOption === 'sass') {
            templates.push({ from: 'gulp/es5/sass.js', to: 'gulp/sass.js' });
        }
        else if (this.cssOption === 'less') {
            templates.push({ from: 'gulp/es5/less.js', to: 'gulp/less.js' });
        }
        if (this.cssOption === 'stylus') {
            templates.push({ from: 'gulp/es5/stylus.js', to: 'gulp/stylus.js' });
        }
    }
    else {
        templates.push(
            { from: 'gulp/es6/browserify.js', to: 'gulp/browserify.js' },
            { from: 'gulp/es6/browserSync.js', to: 'gulp/browserSync.js' },
            { from: 'gulp/es6/clean.js', to: 'gulp/clean.js' },
            { from: 'gulp/es6/copy.js', to: 'gulp/copy.js' },
            { from: 'gulp/es6/eslint.js', to: 'gulp/eslint.js' },
            { from: 'gulp/es6/imagemin.js', to: 'gulp/imagemin.js' },
            { from: 'gulp/es6/svg-icon-sprite.js', to: 'gulp/svg-icon-sprite.js' },
            { from: 'gulp/es6/svg-img-sprite.js', to: 'gulp/svg-img-sprite.js' },
            { from: 'gulp/es6/watch.js', to: 'gulp/watch.js' }
        );

        if (this.htmlOption === 'pug') {
            templates.push({ from: 'gulp/es6/pug.js', to: 'gulp/pug.js'});
        }
        else if (this.htmlOption === 'nunjucks') {
            templates.push({ from: 'gulp/es6/nunjucks.js', to: 'gulp/nunjucks.js'});
        }

        if (this.cssOption === 'sass') {
            templates.push({ from: 'gulp/es6/sass.js', to: 'gulp/sass.js'});
        }
        else if (this.cssOption === 'less') {
            templates.push({ from: 'gulp/es6/less.js', to: 'gulp/less.js'});
        }
        if (this.cssOption === 'stylus') {
            templates.push({ from: 'gulp/es6/stylus.js', to: 'gulp/stylus.js'});
        }
    }

    for (let file of templates) {
        this.fs.copyTpl(
            this.templatePath(file.from),
            this.destinationPath(file.to),
            { ...this.answers }
        );
    }
};

module.exports = gulpFiles;
