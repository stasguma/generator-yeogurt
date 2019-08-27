/**
* Generate files specific to unit testing
*/

'use strict';

const testingFiles = function testingFiles() {
    let templates = [];
    if (this.testFramework !== 'none') {
        templates.push({ from: 'test/karma/karma.conf.js', to: 'karma.conf.js' });
        if (this.jsPreprocessor === 'none') {
            templates.push(
                { from: 'src/shared/_modules/footer/tests/footer.test.js', to: 'src/_modules/footer/tests/footer.test.js' },
                { from: 'src/shared/_modules/header/tests/header.test.js', to: 'src/_modules/header/tests/header.test.js' },
                { from: 'src/shared/_modules/tabs/tests/tabs.test.js', to: 'src/_modules/tabs/tests/tabs.test.js' }
            );
        }
        else {
            templates.push(
                { from: 'src/shared/_modules/footer/tests/footer.test.es6.js', to: 'src/_modules/footer/tests/footer.test.js' },
                { from: 'src/shared/_modules/header/tests/header.test.es6.js', to: 'src/_modules/header/tests/header.test.js' },
                { from: 'src/shared/_modules/tabs/tests/tabs.test.es6.js', to: 'src/_modules/tabs/tests/tabs.test.js' }
            );
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

module.exports = testingFiles;
