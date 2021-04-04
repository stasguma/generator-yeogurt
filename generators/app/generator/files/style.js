/**
* Generate files specific to the styles folder
*/

'use strict';

const styleFiles = function styleFiles() {
    const templates = [];

    if (this.cssOption === 'sass') {
        if (this.sassSyntax === 'sass') {
            templates.push(
                { from: 'src/static/styles/main.sass', to: 'src/_styles/main.sass' },
                { from: 'src/static/styles/main-styleguide.sass', to: 'src/_styles/main-styleguide.sass' },
                { from: 'src/static/styles/helpers/_functions.sass', to: 'src/_styles/helpers/_functions.sass' },
                { from: 'src/static/styles/helpers/_helpers.sass', to: 'src/_styles/helpers/_helpers.sass' },
                { from: 'src/static/styles/helpers/_mixins.sass', to: 'src/_styles/helpers/_mixins.sass' },
                { from: 'src/static/styles/vars/_checkbox.sass', to: 'src/_styles/vars/_checkbox.sass' },
                { from: 'src/static/styles/vars/_colors.sass', to: 'src/_styles/vars/_colors.sass' },
                { from: 'src/static/styles/vars/_easing.sass', to: 'src/_styles/vars/_easing.sass' },
                { from: 'src/static/styles/vars/_fonts.sass', to: 'src/_styles/vars/_fonts.sass' },
                { from: 'src/static/styles/vars/_global.sass', to: 'src/_styles/vars/_global.sass' },
                { from: 'src/static/styles/vars/_input.sass', to: 'src/_styles/vars/_input.sass' },
                { from: 'src/static/styles/vars/_layout.sass', to: 'src/_styles/vars/_layout.sass' },
                { from: 'src/static/styles/vars/_radio.sass', to: 'src/_styles/vars/_radio.sass' },
                { from: 'src/static/styles/vars/_select.sass', to: 'src/_styles/vars/_select.sass' },
                { from: 'src/static/styles/vars/_textarea.sass', to: 'src/_styles/vars/_textarea.sass' },
                { from: 'src/static/styles/vars/_index.sass', to: 'src/_styles/vars/_index.sass' },
                { from: 'src/static/styles/base/_typography.sass', to: 'src/_styles/base/_typography.sass' },
                { from: 'src/static/styles/layout/_base.sass', to: 'src/_styles/layout/_base.sass' },
                { from: 'src/static/styles/vendors/hamburgers/_settings.sass', to: 'src/_styles/vendors/hamburgers/_settings.sass' },
                { from: 'src/static/styles/vendors/badger-accordion/custom.sass', to: 'src/_styles/vendors/badger-accordion/custom.sass' },
                { from: 'src/shared/_styles/footer/footer.sass', to: 'src/_modules/footer/footer.sass' },
                { from: 'src/shared/_styles/header/header.sass', to: 'src/_modules/header/header.sass' },
                { from: 'src/shared/_styles/header/dropdown.sass', to: 'src/_modules/header/dropdown.sass' },
                { from: 'src/shared/_styles/choices-select/choices-select.sass', to: 'src/_modules/choices-select/choices-select.sass' },
                { from: 'src/shared/_styles/svg/svg.sass', to: 'src/_modules/svg/svg.sass' },
                { from: 'src/shared/_styles/tabs/tabs.sass', to: 'src/_modules/tabs/tabs.sass' },
                { from: 'src/shared/_styles/toggler/toggler.sass', to: 'src/_modules/toggler/toggler.sass' },
                { from: 'src/shared/_styles/accordion/accordion.sass', to: 'src/_modules/accordion/accordion.sass' },
                { from: 'src/shared/_styles/upload-btn/upload-btn.sass', to: 'src/_modules/upload-btn/upload-btn.sass' },
                { from: 'src/shared/_styles/modal/modal.sass', to: 'src/_modules/modal/modal.sass' },
                { from: 'src/shared/_styles/overlay/overlay.sass', to: 'src/_modules/overlay/overlay.sass' },
                { from: 'src/shared/_styles/scroll-to/scroll-to.sass', to: 'src/_modules/scroll-to/scroll-to.sass' },
                { from: 'src/shared/_styles/scroll-top/scroll-top.sass', to: 'src/_modules/scroll-top/scroll-top.sass' },
                { from: 'src/static/styles/components/_avatar.sass', to: 'src/_styles/components/_avatar.sass' },
                { from: 'src/static/styles/components/_badge.sass', to: 'src/_styles/components/_badge.sass' },
                { from: 'src/static/styles/components/_breadcrumbs.sass', to: 'src/_styles/components/_breadcrumbs.sass' },
                { from: 'src/static/styles/components/_button.sass', to: 'src/_styles/components/_button.sass' },
                { from: 'src/static/styles/components/_checkbox.sass', to: 'src/_styles/components/_checkbox.sass' },
                { from: 'src/static/styles/components/_dropdown.sass', to: 'src/_styles/components/_dropdown.sass' },
                { from: 'src/static/styles/components/_horizontal-rule.sass', to: 'src/_styles/components/_horizontal-rule.sass' },
                { from: 'src/static/styles/components/_icon.sass', to: 'src/_styles/components/_icon.sass' },
                { from: 'src/static/styles/components/_icons.sass', to: 'src/_styles/components/_icons.sass' },
                { from: 'src/static/styles/components/_input.sass', to: 'src/_styles/components/_input.sass' },
                { from: 'src/static/styles/components/_keyframes.sass', to: 'src/_styles/components/_keyframes.sass' },
                { from: 'src/static/styles/components/_link.sass', to: 'src/_styles/components/_link.sass' },
                { from: 'src/static/styles/components/_list.sass', to: 'src/_styles/components/_list.sass' },
                { from: 'src/static/styles/components/_radio.sass', to: 'src/_styles/components/_radio.sass' },
                { from: 'src/static/styles/components/_search.sass', to: 'src/_styles/components/_search.sass' },
                { from: 'src/static/styles/components/_select.sass', to: 'src/_styles/components/_select.sass' },
                { from: 'src/static/styles/components/_socials.sass', to: 'src/_styles/components/_socials.sass' },
                { from: 'src/static/styles/components/_spinner.sass', to: 'src/_styles/components/_spinner.sass' },
                { from: 'src/static/styles/components/_subscribe-input.sass', to: 'src/_styles/components/_subscribe-input.sass' },
                { from: 'src/static/styles/components/_textarea.sass', to: 'src/_styles/components/_textarea.sass' },
                { from: 'src/static/styles/components/_form.sass', to: 'src/_styles/components/_form.sass' },
                { from: 'src/static/styles/pages/home/_index.sass', to: 'src/_styles/pages/home/_index.sass' }
            );
        }
        else {
            templates.push(
                { from: 'src/static/styles/main.scss', to: 'src/_styles/main.scss' },
                { from: 'src/static/styles/main-styleguide.scss', to: 'src/_styles/main-styleguide.scss' },
                { from: 'src/static/styles/helpers/_functions.scss', to: 'src/_styles/helpers/_functions.scss' },
                { from: 'src/static/styles/helpers/_helpers.scss', to: 'src/_styles/helpers/_helpers.scss' },
                { from: 'src/static/styles/helpers/_mixins.scss', to: 'src/_styles/helpers/_mixins.scss' },
                { from: 'src/static/styles/vars/_checkbox.scss', to: 'src/_styles/vars/_checkbox.scss' },
                { from: 'src/static/styles/vars/_colors.scss', to: 'src/_styles/vars/_colors.scss' },
                { from: 'src/static/styles/vars/_easing.scss', to: 'src/_styles/vars/_easing.scss' },
                { from: 'src/static/styles/vars/_fonts.scss', to: 'src/_styles/vars/_fonts.scss' },
                { from: 'src/static/styles/vars/_global.scss', to: 'src/_styles/vars/_global.scss' },
                { from: 'src/static/styles/vars/_input.scss', to: 'src/_styles/vars/_input.scss' },
                { from: 'src/static/styles/vars/_layout.scss', to: 'src/_styles/vars/_layout.scss' },
                { from: 'src/static/styles/vars/_radio.scss', to: 'src/_styles/vars/_radio.scss' },
                { from: 'src/static/styles/vars/_select.scss', to: 'src/_styles/vars/_select.scss' },
                { from: 'src/static/styles/vars/_textarea.scss', to: 'src/_styles/vars/_textarea.scss' },
                { from: 'src/static/styles/vars/_index.scss', to: 'src/_styles/vars/_index.scss' },
                { from: 'src/static/styles/base/_typography.scss', to: 'src/_styles/base/_typography.scss' },
                { from: 'src/static/styles/layout/_base.scss', to: 'src/_styles/layout/_base.scss' },
                { from: 'src/static/styles/vendors/hamburgers/_settings.scss', to: 'src/_styles/vendors/hamburgers/_settings.scss' },
                { from: 'src/static/styles/vendors/badger-accordion/custom.scss', to: 'src/_styles/vendors/badger-accordion/custom.scss' },
                { from: 'src/shared/_styles/footer/footer.scss', to: 'src/_modules/footer/footer.scss' },
                { from: 'src/shared/_styles/header/header.scss', to: 'src/_modules/header/header.scss' },
                { from: 'src/shared/_styles/header/dropdown.scss', to: 'src/_modules/header/dropdown.scss' },
                { from: 'src/shared/_styles/choices-select/choices-select.scss', to: 'src/_modules/choices-select/choices-select.scss' },
                { from: 'src/shared/_styles/svg/svg.scss', to: 'src/_modules/svg/svg.scss' },
                { from: 'src/shared/_styles/tabs/tabs.scss', to: 'src/_modules/tabs/tabs.scss' },
                { from: 'src/shared/_styles/toggler/toggler.scss', to: 'src/_modules/toggler/toggler.scss' },
                { from: 'src/shared/_styles/accordion/accordion.scss', to: 'src/_modules/accordion/accordion.scss' },
                { from: 'src/shared/_styles/upload-btn/upload-btn.scss', to: 'src/_modules/upload-btn/upload-btn.scss' },
                { from: 'src/shared/_styles/modal/modal.scss', to: 'src/_modules/modal/modal.scss' },
                { from: 'src/shared/_styles/overlay/overlay.scss', to: 'src/_modules/overlay/overlay.scss' },
                { from: 'src/shared/_styles/scroll-to/scroll-to.scss', to: 'src/_modules/scroll-to/scroll-to.scss' },
                { from: 'src/shared/_styles/scroll-top/scroll-top.scss', to: 'src/_modules/scroll-top/scroll-top.scss' },
                { from: 'src/static/styles/components/_avatar.scss', to: 'src/_styles/components/_avatar.scss' },
                { from: 'src/static/styles/components/_badge.scss', to: 'src/_styles/components/_badge.scss' },
                { from: 'src/static/styles/components/_breadcrumbs.scss', to: 'src/_styles/components/_breadcrumbs.scss' },
                { from: 'src/static/styles/components/_button.scss', to: 'src/_styles/components/_button.scss' },
                { from: 'src/static/styles/components/_checkbox.scss', to: 'src/_styles/components/_checkbox.scss' },
                { from: 'src/static/styles/components/_dropdown.scss', to: 'src/_styles/components/_dropdown.scss' },
                { from: 'src/static/styles/components/_horizontal-rule.scss', to: 'src/_styles/components/_horizontal-rule.scss' },
                { from: 'src/static/styles/components/_icon.scss', to: 'src/_styles/components/_icon.scss' },
                { from: 'src/static/styles/components/_icons.scss', to: 'src/_styles/components/_icons.scss' },
                { from: 'src/static/styles/components/_input.scss', to: 'src/_styles/components/_input.scss' },
                { from: 'src/static/styles/components/_keyframes.scss', to: 'src/_styles/components/_keyframes.scss' },
                { from: 'src/static/styles/components/_link.scss', to: 'src/_styles/components/_link.scss' },
                { from: 'src/static/styles/components/_list.scss', to: 'src/_styles/components/_list.scss' },
                { from: 'src/static/styles/components/_radio.scss', to: 'src/_styles/components/_radio.scss' },
                { from: 'src/static/styles/components/_search.scss', to: 'src/_styles/components/_search.scss' },
                { from: 'src/static/styles/components/_select.scss', to: 'src/_styles/components/_select.scss' },
                { from: 'src/static/styles/components/_socials.scss', to: 'src/_styles/components/_socials.scss' },
                { from: 'src/static/styles/components/_spinner.scss', to: 'src/_styles/components/_spinner.scss' },
                { from: 'src/static/styles/components/_subscribe-input.scss', to: 'src/_styles/components/_subscribe-input.scss' },
                { from: 'src/static/styles/components/_textarea.scss', to: 'src/_styles/components/_textarea.scss' },
                { from: 'src/static/styles/components/_form.scss', to: 'src/_styles/components/_form.scss' },
                { from: 'src/static/styles/pages/home/_index.scss', to: 'src/_styles/pages/home/_index.scss' }
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

module.exports = styleFiles;
