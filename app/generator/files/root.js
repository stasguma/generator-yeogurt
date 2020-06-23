/**
* Generate files specific to the root directory
*/
const titleize = require('titleize');

'use strict';

const rootFiles = function rootFiles() {
    // Create needed Directories
    let templates = [];
    let files = [];

    // root (/)
    templates.push(
        { from: 'gulpfile.babel.js', to: 'gulpfile.babel.js' },
        { from: 'babel.config.js', to: 'babel.config.js' }
    );
    templates.push(
        { from: '_package.json', to: 'package.json' },
        { from: 'README.md', to: 'README.md' }
    );

    files.push(
        { from: 'gitignore', to: '.gitignore' },
        { from: 'gitattributes', to: '.gitattributes' },

        { from: 'src/shared/robots.txt', to: 'src/robots.txt' },
        { from: 'src/shared/favicon.ico', to: 'src/favicon.ico' },

        { from: 'editorconfig', to: '.editorconfig' },

        { from: 'browserslistrc', to: '.browserslistrc' }
    );
    templates.push({ from: 'eslintrc', to: '.eslintrc' });

    for (let file of files) {
        this.fs.copy(
            this.templatePath(file.from),
            this.destinationPath(file.to)
        );
    }
    for (let file of templates) {
        this.fs.copyTpl(
            this.templatePath(file.from),
            this.destinationPath(file.to),
            { ...this.answers, titleize, pkg: this.pkg }
        );
    }
};

module.exports = rootFiles;
