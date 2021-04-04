/**
 * Generate files specific to needed images
 */

'use strict';

const imageFiles = function imageFiles() {
    let files = [
        { from: 'src/shared/_images/yeogurt-swirl.png', to: 'src/_images/yeogurt-swirl.png' },
        // { from: 'src/shared/_images/favicons', to: 'src/_images/favicons' },
        { from: 'src/shared/_images/svg/sprite/icons/facebook.svg', to: 'src/_images/svg/sprite/icons/facebook.svg' },
        { from: 'src/shared/_images/svg/sprite/icons/check.svg', to: 'src/_images/svg/sprite/icons/check.svg' },
        { from: 'src/shared/_images/svg/sprite/icons/icon-search.svg', to: 'src/_images/svg/sprite/icons/icon-search.svg' },
        { from: 'src/shared/_images/svg/sprite/icons/icon-send.svg', to: 'src/_images/svg/sprite/icons/icon-send.svg' },
        { from: 'src/shared/_images/svg/sprite/icons/instagram.svg', to: 'src/_images/svg/sprite/icons/instagram.svg' },
        { from: 'src/shared/_images/svg/sprite/icons/twitter.svg', to: 'src/_images/svg/sprite/icons/twitter.svg' },
        { from: 'src/shared/_images/svg/sprite/icons/youtube.svg', to: 'src/_images/svg/sprite/icons/youtube.svg' },
        { from: 'src/shared/_images/svg/sprite/imgs/logo.svg', to: 'src/_images/svg/sprite/imgs/logo.svg' },
    ];

    for (let file of files) {
        this.fs.copy(
            this.templatePath(file.from),
            this.destinationPath(file.to),
            { ...this.answers }
        );
    }
};

module.exports = imageFiles;
