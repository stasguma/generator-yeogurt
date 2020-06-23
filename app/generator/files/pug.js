/**
* Generate files specific to the pug folder
*/

'use strict';

const pugFiles = function pugFiles() {
    let templates = [];
    if (this.htmlOption === 'pug') {
        templates.push(
            { from: 'src/static/pug/_layouts/mixins.pug', to: 'src/_layouts/mixins.pug' },
            { from: 'src/static/pug/_layouts/base.pug', to: 'src/_layouts/base.pug' },
            { from: 'src/static/pug/_modules/footer/footer.pug', to: 'src/_modules/footer/footer.pug' },
            { from: 'src/static/pug/_modules/header/header.pug', to: 'src/_modules/header/header.pug' },
            { from: 'src/static/pug/_modules/choices-select/choices-select.pug', to: 'src/_modules/choices-select/choices-select.pug' },
            { from: 'src/static/pug/_modules/svg/svg.pug', to: 'src/_modules/svg/svg.pug' },
            { from: 'src/static/pug/_modules/tabs/tabs.pug', to: 'src/_modules/tabs/tabs.pug' },
            { from: 'src/static/pug/_modules/toggler/toggler.pug', to: 'src/_modules/toggler/toggler.pug' },
            { from: 'src/static/pug/_modules/accordion/accordion.pug', to: 'src/_modules/accordion/accordion.pug' },
            { from: 'src/static/pug/_modules/overlay/overlay.pug', to: 'src/_modules/overlay/overlay.pug' },
            { from: 'src/static/pug/_modules/upload-btn/upload-btn.pug', to: 'src/_modules/upload-btn/upload-btn.pug' },
            { from: 'src/static/pug/_modules/modal/modal.pug', to: 'src/_modules/modal/modal.pug' },
            { from: 'src/static/pug/_modules/scroll-to/scroll-to.pug', to: 'src/_modules/scroll-to/scroll-to.pug' },
            { from: 'src/static/pug/_modules/scroll-top/scroll-top.pug', to: 'src/_modules/scroll-top/scroll-top.pug' },
            { from: 'src/static/pug/_pages/index.pug', to: 'src/_pages/index.pug' },
            { from: 'src/static/pug/_pages/styleguide.pug', to: 'src/_pages/styleguide.pug' }
        );
    }

    for (let file of templates) {
        this.fs.copyTpl(
            this.templatePath(file.from),
            this.destinationPath(file.to),
            { ...this.answers, pkg: this.pkg }
        );
    }
};

module.exports = pugFiles;
