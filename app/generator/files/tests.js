/**
* Generate files specific to unit testing
*/

'use strict';

const testingFiles = function testingFiles() {
    let templates = [];
    if (this.testFramework !== 'none') {
        templates.push({ from: 'test/karma/karma.conf.js', to: 'karma.conf.js' });

        templates.push(
            { from: 'src/shared/_modules/header/tests/header.test.js', to: 'src/_modules/header/tests/header.test.js' },
            { from: 'src/shared/_modules/choices-select/tests/choices-select.test.js', to: 'src/_modules/choices-select/tests/choices-select.test.js' },
            { from: 'src/shared/_modules/tabs/tests/tabs.test.js', to: 'src/_modules/tabs/tests/tabs.test.js' },
            { from: 'src/shared/_modules/accordion/tests/accordion.test.js', to: 'src/_modules/accordion/tests/accordion.test.js' },
            { from: 'src/shared/_modules/toggler/tests/toggler.test.js', to: 'src/_modules/toggler/tests/toggler.test.js' },
            { from: 'src/shared/_modules/overlay/tests/overlay.test.js', to: 'src/_modules/overlay/tests/overlay.test.js' },
            { from: 'src/shared/_modules/upload-btn/tests/upload-btn.test.js', to: 'src/_modules/upload-btn/tests/upload-btn.test.js' },
            { from: 'src/shared/_modules/modal/tests/modal.test.js', to: 'src/_modules/modal/tests/modal.test.js' },
            { from: 'src/shared/_modules/scroll-to/tests/scroll-to.test.js', to: 'src/_modules/scroll-to/tests/scroll-to.test.js' },
            { from: 'src/shared/_modules/scroll-top/tests/scroll-top.test.js', to: 'src/_modules/scroll-top/tests/scroll-top.test.js' },
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

module.exports = testingFiles;
