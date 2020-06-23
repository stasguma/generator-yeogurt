/**
* Generate files specific to the styles folder
*/

'use strict';

const styleFiles = function styleFiles() {
    const templates = [];

    templates.push(
        { from: 'src/shared/_scripts/main.es6.js', to: 'src/_scripts/main.js' },
        { from: 'src/shared/_modules/header/header.js', to: 'src/_modules/header/header.js' },
        { from: 'src/shared/_modules/choices-select/choices-select.js', to: 'src/_modules/choices-select/choices-select.js' },
        { from: 'src/shared/_modules/tabs/tabs.js', to: 'src/_modules/tabs/tabs.js' },
        { from: 'src/shared/_modules/accordion/accordion.js', to: 'src/_modules/accordion/accordion.js' },
        { from: 'src/shared/_modules/overlay/overlay.js', to: 'src/_modules/overlay/overlay.js' },
        { from: 'src/shared/_modules/toggler/toggler.js', to: 'src/_modules/toggler/toggler.js' },
        { from: 'src/shared/_modules/upload-btn/upload-btn.js', to: 'src/_modules/upload-btn/upload-btn.js' },
        { from: 'src/shared/_modules/modal/modal.js', to: 'src/_modules/modal/modal.js' },
        { from: 'src/shared/_modules/scroll-to/scroll-to.js', to: 'src/_modules/scroll-to/scroll-to.js' },
        { from: 'src/shared/_modules/scroll-top/scroll-top.js', to: 'src/_modules/scroll-top/scroll-top.js' },
        { from: 'src/static/scripts/helpers/deviceType.js', to: 'src/_scripts/helpers/deviceType.js' },
        { from: 'src/static/scripts/helpers/scrollTo.js', to: 'src/_scripts/helpers/scrollTo.js' },
    );

    for (let file of templates) {
        this.fs.copyTpl(
            this.templatePath(file.from),
            this.destinationPath(file.to),
            { ...this.answers }
        );
    }
};

module.exports = styleFiles;
