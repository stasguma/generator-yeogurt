/**
* Generate files specific to the styles folder
*/

'use strict';

const styleFiles = function styleFiles() {
    const templates = [];
    if (this.jsPreprocessor === 'none') {
        templates.push(
            { from: 'src/shared/_scripts/main.js', to: 'src/_scripts/main.js' },
            { from: 'src/shared/_modules/footer/footer.js', to: 'src/_modules/footer/footer.js' },
            { from: 'src/shared/_modules/header/header.js', to: 'src/_modules/header/header.js' },
            { from: 'src/shared/_modules/tabs/tabs.js', to: 'src/_modules/tabs/tabs.js' }
        );
    }
    else {
        templates.push(
            { from: 'src/shared/_scripts/main.es6.js', to: 'src/_scripts/main.js' },
            { from: 'src/shared/_modules/footer/footer.es6.js', to: 'src/_modules/footer/footer.js' },
            { from: 'src/shared/_modules/header/header.es6.js', to: 'src/_modules/header/header.js' },
            { from: 'src/shared/_modules/tabs/tabs.es6.js', to: 'src/_modules/tabs/tabs.js' }
        );
    }

    for (let file of templates) {
        this.fs.copyTpl(
            this.templatePath(file.from),
            this.destinationPath(file.to),
            { ...this.answers }
        );
    }
};

module.exports = styleFiles;
