/**
* Generate files specific to the styles folder
*/

'use strict';

const styleFiles = function styleFiles() {
    const templates = [];
    if (this.cssOption === 'less') {
        templates.push(
            { from: 'src/shared/_styles/main.less', to: 'src/_styles/main.less' },
            { from: 'src/shared/_styles/helpers/_functions.less', to: 'src/_styles/helpers/_functions.less' },
            { from: 'src/shared/_styles/helpers/_helpers.less', to: 'src/_styles/helpers/_helpers.less' },
            { from: 'src/shared/_styles/helpers/_mixins.less', to: 'src/_styles/helpers/_mixins.less' },
            { from: 'src/shared/_styles/helpers/_vars.less', to: 'src/_styles/helpers/_vars.less' },
            { from: 'src/shared/_styles/base/_typography.less', to: 'src/_styles/base/_typography.less' },
            { from: 'src/shared/_styles/layout/_base.less', to: 'src/_styles/layout/_base.less' },
            { from: 'src/shared/_styles/vendors/badger-accordion/custom.less', to: 'src/_styles/vendors/badger-accordion/custom.less' },
            { from: 'src/shared/_styles/footer/footer.less', to: 'src/_modules/footer/footer.less' },
            { from: 'src/shared/_styles/header/header.less', to: 'src/_modules/header/header.less' },
            { from: 'src/shared/_styles/header/dropdown.less', to: 'src/_modules/header/dropdown.less' },
            { from: 'src/shared/_styles/svg/svg.less', to: 'src/_modules/svg/svg.less' },
            { from: 'src/shared/_styles/tabs/tabs.less', to: 'src/_modules/tabs/tabs.less' },
            { from: 'src/shared/_styles/components/_avatar.less', to: 'src/_styles/components/_avatar.less' },
            { from: 'src/shared/_styles/components/_badge.less', to: 'src/_styles/components/_badge.less' },
            { from: 'src/shared/_styles/components/_breadcrumbs.less', to: 'src/_styles/components/_breadcrumbs.less' },
            { from: 'src/shared/_styles/components/_button.less', to: 'src/_styles/components/_button.less' },
            { from: 'src/shared/_styles/components/_checkbox.less', to: 'src/_styles/components/_checkbox.less' },
            { from: 'src/shared/_styles/components/_dropdown.less', to: 'src/_styles/components/_dropdown.less' },
            { from: 'src/shared/_styles/components/_horizontal-rule.less', to: 'src/_styles/components/_horizontal-rule.less' },
            { from: 'src/shared/_styles/components/_icon.less', to: 'src/_styles/components/_icon.less' },
            { from: 'src/shared/_styles/components/_icons.less', to: 'src/_styles/components/_icons.less' },
            { from: 'src/shared/_styles/components/_input.less', to: 'src/_styles/components/_input.less' },
            { from: 'src/shared/_styles/components/_keyframes.less', to: 'src/_styles/components/_keyframes.less' },
            { from: 'src/shared/_styles/components/_link.less', to: 'src/_styles/components/_link.less' },
            { from: 'src/shared/_styles/components/_list.less', to: 'src/_styles/components/_list.less' },
            { from: 'src/shared/_styles/components/_radio.less', to: 'src/_styles/components/_radio.less' },
            { from: 'src/shared/_styles/components/_search.less', to: 'src/_styles/components/_search.less' },
            { from: 'src/shared/_styles/components/_select.less', to: 'src/_styles/components/_select.less' },
            { from: 'src/shared/_styles/components/_socials.less', to: 'src/_styles/components/_socials.less' },
            { from: 'src/shared/_styles/components/_spinner.less', to: 'src/_styles/components/_spinner.less' },
            { from: 'src/shared/_styles/components/_subscribe-input.less', to: 'src/_styles/components/_subscribe-input.less' },
            { from: 'src/shared/_styles/components/_textarea.less', to: 'src/_styles/components/_textarea.less' },
            { from: 'src/shared/_styles/pages/home/_index.less', to: 'src/_styles/pages/home/_index.less' }
        );
    }
    if (this.cssOption === 'sass') {
        if (this.sassSyntax === 'sass') {
            templates.push(
                { from: 'src/shared/_styles/main.sass', to: 'src/_styles/main.sass' },
                { from: 'src/shared/_styles/helpers/_functions.sass', to: 'src/_styles/helpers/_functions.sass' },
                { from: 'src/shared/_styles/helpers/_helpers.sass', to: 'src/_styles/helpers/_helpers.sass' },
                { from: 'src/shared/_styles/helpers/_mixins.sass', to: 'src/_styles/helpers/_mixins.sass' },
                { from: 'src/shared/_styles/helpers/_vars.sass', to: 'src/_styles/helpers/_vars.sass' },
                { from: 'src/shared/_styles/base/_typography.sass', to: 'src/_styles/base/_typography.sass' },
                { from: 'src/shared/_styles/layout/_base.sass', to: 'src/_styles/layout/_base.sass' },
                { from: 'src/shared/_styles/vendors/hamburgers/_settings.sass', to: 'src/_styles/vendors/hamburgers/_settings.sass' },
                { from: 'src/shared/_styles/vendors/badger-accordion/custom.sass', to: 'src/_styles/vendors/badger-accordion/custom.sass' },
                { from: 'src/shared/_styles/footer/footer.sass', to: 'src/_modules/footer/footer.sass' },
                { from: 'src/shared/_styles/header/header.sass', to: 'src/_modules/header/header.sass' },
                { from: 'src/shared/_styles/header/dropdown.sass', to: 'src/_modules/header/dropdown.sass' },
                { from: 'src/shared/_styles/svg/svg.sass', to: 'src/_modules/svg/svg.sass' },
                { from: 'src/shared/_styles/tabs/tabs.sass', to: 'src/_modules/tabs/tabs.sass' },
                { from: 'src/shared/_styles/components/_avatar.sass', to: 'src/_styles/components/_avatar.sass' },
                { from: 'src/shared/_styles/components/_badge.sass', to: 'src/_styles/components/_badge.sass' },
                { from: 'src/shared/_styles/components/_breadcrumbs.sass', to: 'src/_styles/components/_breadcrumbs.sass' },
                { from: 'src/shared/_styles/components/_button.sass', to: 'src/_styles/components/_button.sass' },
                { from: 'src/shared/_styles/components/_checkbox.sass', to: 'src/_styles/components/_checkbox.sass' },
                { from: 'src/shared/_styles/components/_dropdown.sass', to: 'src/_styles/components/_dropdown.sass' },
                { from: 'src/shared/_styles/components/_horizontal-rule.sass', to: 'src/_styles/components/_horizontal-rule.sass' },
                { from: 'src/shared/_styles/components/_icon.sass', to: 'src/_styles/components/_icon.sass' },
                { from: 'src/shared/_styles/components/_icons.sass', to: 'src/_styles/components/_icons.sass' },
                { from: 'src/shared/_styles/components/_input.sass', to: 'src/_styles/components/_input.sass' },
                { from: 'src/shared/_styles/components/_keyframes.sass', to: 'src/_styles/components/_keyframes.sass' },
                { from: 'src/shared/_styles/components/_link.sass', to: 'src/_styles/components/_link.sass' },
                { from: 'src/shared/_styles/components/_list.sass', to: 'src/_styles/components/_list.sass' },
                { from: 'src/shared/_styles/components/_radio.sass', to: 'src/_styles/components/_radio.sass' },
                { from: 'src/shared/_styles/components/_search.sass', to: 'src/_styles/components/_search.sass' },
                { from: 'src/shared/_styles/components/_select.sass', to: 'src/_styles/components/_select.sass' },
                { from: 'src/shared/_styles/components/_socials.sass', to: 'src/_styles/components/_socials.sass' },
                { from: 'src/shared/_styles/components/_spinner.sass', to: 'src/_styles/components/_spinner.sass' },
                { from: 'src/shared/_styles/components/_subscribe-input.sass', to: 'src/_styles/components/_subscribe-input.sass' },
                { from: 'src/shared/_styles/components/_textarea.sass', to: 'src/_styles/components/_textarea.sass' },
                { from: 'src/shared/_styles/pages/home/_index.sass', to: 'src/_styles/pages/home/_index.sass' }
            );
        }
        else {
            templates.push(
                { from: 'src/shared/_styles/main.scss', to: 'src/_styles/main.scss' },
                { from: 'src/shared/_styles/helpers/_functions.scss', to: 'src/_styles/helpers/_functions.scss' },
                { from: 'src/shared/_styles/helpers/_helpers.scss', to: 'src/_styles/helpers/_helpers.scss' },
                { from: 'src/shared/_styles/helpers/_mixins.scss', to: 'src/_styles/helpers/_mixins.scss' },
                { from: 'src/shared/_styles/helpers/_vars.scss', to: 'src/_styles/helpers/_vars.scss' },
                { from: 'src/shared/_styles/base/_typography.scss', to: 'src/_styles/base/_typography.scss' },
                { from: 'src/shared/_styles/layout/_base.scss', to: 'src/_styles/layout/_base.scss' },
                { from: 'src/shared/_styles/vendors/hamburgers/_settings.scss', to: 'src/_styles/vendors/hamburgers/_settings.scss' },
                { from: 'src/shared/_styles/vendors/badger-accordion/custom.scss', to: 'src/_styles/vendors/badger-accordion/custom.scss' },
                { from: 'src/shared/_styles/footer/footer.scss', to: 'src/_modules/footer/footer.scss' },
                { from: 'src/shared/_styles/header/header.scss', to: 'src/_modules/header/header.scss' },
                { from: 'src/shared/_styles/header/dropdown.scss', to: 'src/_modules/header/dropdown.scss' },
                { from: 'src/shared/_styles/svg/svg.scss', to: 'src/_modules/svg/svg.scss' },
                { from: 'src/shared/_styles/tabs/tabs.scss', to: 'src/_modules/tabs/tabs.scss' },
                { from: 'src/shared/_styles/components/_avatar.scss', to: 'src/_styles/components/_avatar.scss' },
                { from: 'src/shared/_styles/components/_badge.scss', to: 'src/_styles/components/_badge.scss' },
                { from: 'src/shared/_styles/components/_breadcrumbs.scss', to: 'src/_styles/components/_breadcrumbs.scss' },
                { from: 'src/shared/_styles/components/_button.scss', to: 'src/_styles/components/_button.scss' },
                { from: 'src/shared/_styles/components/_checkbox.scss', to: 'src/_styles/components/_checkbox.scss' },
                { from: 'src/shared/_styles/components/_dropdown.scss', to: 'src/_styles/components/_dropdown.scss' },
                { from: 'src/shared/_styles/components/_horizontal-rule.scss', to: 'src/_styles/components/_horizontal-rule.scss' },
                { from: 'src/shared/_styles/components/_icon.scss', to: 'src/_styles/components/_icon.scss' },
                { from: 'src/shared/_styles/components/_icons.scss', to: 'src/_styles/components/_icons.scss' },
                { from: 'src/shared/_styles/components/_input.scss', to: 'src/_styles/components/_input.scss' },
                { from: 'src/shared/_styles/components/_keyframes.scss', to: 'src/_styles/components/_keyframes.scss' },
                { from: 'src/shared/_styles/components/_link.scss', to: 'src/_styles/components/_link.scss' },
                { from: 'src/shared/_styles/components/_list.scss', to: 'src/_styles/components/_list.scss' },
                { from: 'src/shared/_styles/components/_radio.scss', to: 'src/_styles/components/_radio.scss' },
                { from: 'src/shared/_styles/components/_search.scss', to: 'src/_styles/components/_search.scss' },
                { from: 'src/shared/_styles/components/_select.scss', to: 'src/_styles/components/_select.scss' },
                { from: 'src/shared/_styles/components/_socials.scss', to: 'src/_styles/components/_socials.scss' },
                { from: 'src/shared/_styles/components/_spinner.scss', to: 'src/_styles/components/_spinner.scss' },
                { from: 'src/shared/_styles/components/_subscribe-input.scss', to: 'src/_styles/components/_subscribe-input.scss' },
                { from: 'src/shared/_styles/components/_textarea.scss', to: 'src/_styles/components/_textarea.scss' },
                { from: 'src/shared/_styles/pages/home/_index.scss', to: 'src/_styles/pages/home/_index.scss' }
            );
        }
    }
    if (this.cssOption === 'stylus') {
        templates.push(
            { from: 'src/shared/_styles/main.styl', to: 'src/_styles/main.styl' },
            { from: 'src/shared/_styles/helpers/_functions.styl', to: 'src/_styles/helpers/_functions.styl' },
            { from: 'src/shared/_styles/helpers/_helpers.styl', to: 'src/_styles/helpers/_helpers.styl' },
            { from: 'src/shared/_styles/helpers/_mixins.styl', to: 'src/_styles/helpers/_mixins.styl' },
            { from: 'src/shared/_styles/helpers/_vars.styl', to: 'src/_styles/helpers/_vars.styl' },
            { from: 'src/shared/_styles/base/_typography.styl', to: 'src/_styles/base/_typography.styl' },
            { from: 'src/shared/_styles/layout/_base.styl', to: 'src/_styles/layout/_base.styl' },
            { from: 'src/shared/_styles/vendors/badger-accordion/custom.styl', to: 'src/_styles/vendors/badger-accordion/custom.styl' },
            { from: 'src/shared/_styles/footer/footer.styl', to: 'src/_modules/footer/footer.styl' },
            { from: 'src/shared/_styles/header/header.styl', to: 'src/_modules/header/header.styl' },
            { from: 'src/shared/_styles/header/dropdown.styl', to: 'src/_modules/header/dropdown.styl' },
            { from: 'src/shared/_styles/svg/svg.styl', to: 'src/_modules/svg/svg.styl' },
            { from: 'src/shared/_styles/tabs/tabs.styl', to: 'src/_modules/tabs/tabs.styl' },
            { from: 'src/shared/_styles/components/_avatar.styl', to: 'src/_styles/components/_avatar.styl' },
            { from: 'src/shared/_styles/components/_badge.styl', to: 'src/_styles/components/_badge.styl' },
            { from: 'src/shared/_styles/components/_breadcrumbs.styl', to: 'src/_styles/components/_breadcrumbs.styl' },
            { from: 'src/shared/_styles/components/_button.styl', to: 'src/_styles/components/_button.styl' },
            { from: 'src/shared/_styles/components/_checkbox.styl', to: 'src/_styles/components/_checkbox.styl' },
            { from: 'src/shared/_styles/components/_dropdown.styl', to: 'src/_styles/components/_dropdown.styl' },
            { from: 'src/shared/_styles/components/_horizontal-rule.styl', to: 'src/_styles/components/_horizontal-rule.styl' },
            { from: 'src/shared/_styles/components/_icon.styl', to: 'src/_styles/components/_icon.styl' },
            { from: 'src/shared/_styles/components/_icons.styl', to: 'src/_styles/components/_icons.styl' },
            { from: 'src/shared/_styles/components/_input.styl', to: 'src/_styles/components/_input.styl' },
            { from: 'src/shared/_styles/components/_keyframes.styl', to: 'src/_styles/components/_keyframes.styl' },
            { from: 'src/shared/_styles/components/_link.styl', to: 'src/_styles/components/_link.styl' },
            { from: 'src/shared/_styles/components/_list.styl', to: 'src/_styles/components/_list.styl' },
            { from: 'src/shared/_styles/components/_radio.styl', to: 'src/_styles/components/_radio.styl' },
            { from: 'src/shared/_styles/components/_search.styl', to: 'src/_styles/components/_search.styl' },
            { from: 'src/shared/_styles/components/_select.styl', to: 'src/_styles/components/_select.styl' },
            { from: 'src/shared/_styles/components/_socials.styl', to: 'src/_styles/components/_socials.styl' },
            { from: 'src/shared/_styles/components/_spinner.styl', to: 'src/_styles/components/_spinner.styl' },
            { from: 'src/shared/_styles/components/_subscribe-input.styl', to: 'src/_styles/components/_subscribe-input.styl' },
            { from: 'src/shared/_styles/components/_textarea.styl', to: 'src/_styles/components/_textarea.styl' },
            { from: 'src/shared/_styles/pages/home/_index.styl', to: 'src/_styles/pages/home/_index.styl' }
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
