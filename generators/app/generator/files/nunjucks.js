/**
* Generate files specific to the nunjucks folder
*/

'use strict';

const nunjucksFiles = function nunjucksFiles() {
    if (this.htmlOption === 'nunjucks') {
        let templates = [
            { from: 'src/static/nunjucks/_layouts/base.nunjucks', to: 'src/_layouts/base.nunjucks' },
            { from: 'src/static/nunjucks/_modules/footer/footer.nunjucks', to: 'src/_modules/footer/footer.nunjucks' },
            { from: 'src/static/nunjucks/_modules/header/header.nunjucks', to: 'src/_modules/header/header.nunjucks' },
            { from: 'src/static/nunjucks/_modules/svg/svg.nunjucks', to: 'src/_modules/svg/svg.nunjucks' },
            { from: 'src/static/nunjucks/_modules/tabs/tabs.nunjucks', to: 'src/_modules/tabs/tabs.nunjucks' },
            { from: 'src/static/nunjucks/index.nunjucks', to: 'src/_pages/index.nunjucks' }
        ];

        for (let file of templates) {
            this.fs.copyTpl(
                this.templatePath(file.from),
                this.destinationPath(file.to),
                { ...this.answers }
            );
        }
    }
};

module.exports = nunjucksFiles;
