/**
* Generate files specific to documentation
*/

'use strict';

const docFiles = function docFiles() {
    let templates = [];
    templates.push(
        { from: 'src/shared/_data/README.md', to: 'src/_data/README.md' },
        { from: 'src/shared/_modules/README.md', to: 'src/_modules/README.md' },
        { from: 'src/shared/_layouts/README.md', to: 'src/_layouts/README.md' },
        { from: 'src/shared/_scripts/README.md', to: 'src/_scripts/README.md' },
        { from: 'src/shared/_styles/README.md', to: 'src/_styles/README.md' },
        { from: 'src/shared/_images/README.md', to: 'src/_images/README.md' },
        { from: 'src/shared/README.md', to: 'src/README.md' }
    );
    
    for (let file of templates) {
        this.fs.copyTpl(
            this.templatePath(file.from),
            this.destinationPath(file.to),
            { ...this.answers }
        );
    }
};

module.exports = docFiles;
