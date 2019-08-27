/**
* Generate files specific to the pug folder
*/

'use strict';

const pugFiles = function pugFiles() {
    let templates = [];
    if (this.htmlOption === 'pug') {
        templates.push(
            { from: 'src/static/pug/_layouts/base.pug', to: 'src/_layouts/base.pug' },
            { from: 'src/static/pug/_modules/footer/footer.pug', to: 'src/_modules/footer/footer.pug' },
            { from: 'src/static/pug/_modules/header/header.pug', to: 'src/_modules/header/header.pug' },
            { from: 'src/static/pug/_modules/svg/svg.pug', to: 'src/_modules/svg/svg.pug' },
            { from: 'src/static/pug/_modules/tabs/tabs.pug', to: 'src/_modules/tabs/tabs.pug' },
            { from: 'src/static/pug/_pages/index.pug', to: 'src/_pages/index.pug' }
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
