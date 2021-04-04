'use strict';

const util = require('util');
const Generator = require('yeoman-generator');
const path = require('path');
const pjson = require(path.join(process.cwd(), './package.json'));
const config = pjson.config;
const directories = config.directories;
const replace = require('replace-in-file');
const slash = require('slash');

class PageGenerator extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.option('layout', {
            desc: 'Allow a custom layout for template to extend from',
            type: String,
            required: false
        });

        const fileJSON = this.config.get('config');

        // options
        this.projectName = fileJSON.projectName;
        this.cssOption = fileJSON.cssOption;
        this.sassSyntax = fileJSON.sassSyntax;
        this.htmlOption = fileJSON.htmlOption;
        this.names = this.options._;
        this.pageFiles = [];
        this.styleFiles = [];

        this.stylesDir = config ?
            path.join(directories.source, directories.styles) :
            'src/_styles';
        this.layoutDir = config ? directories.layouts : '_layouts';
    }

    ask() {

        this.layout = 'base';
        if (this.options.layout) {
            this.layout = this.options.layout;
        }

        this.pageDir = config ?
            path.join(directories.source, directories.pages) :
            'src/_pages';

        this.names.forEach((name) => {

            this.path = name.toLowerCase();

            this.pageFiles.push(path.join(
                this.pageDir,
                this.path,
                'index'
            ));

            this.styleFiles.push(path.join(
                this.stylesDir,
                'pages',
                this.path,
                '_index'
            ));
        });

    }

    files() {
        let templates = [];

        const htmlSuffix = (this.htmlOption === 'pug') ? '.pug' : '.nunjucks';
        const cssSuffix = _getCssSuffix(this.cssOption, this.sassSyntax);

        this.pageFiles.forEach((file) => {
            const separatored = path.dirname(file).split(path.sep);
            const name = separatored[separatored.length - 1];
            
            templates.push({ from: 'page' + htmlSuffix, to:  file + htmlSuffix, name });
        });

        this.styleFiles.forEach((file) => {
            const separatored = path.dirname(file).split(path.sep);
            const name = separatored[separatored.length - 1];
            
            templates.push({ from: 'page.css', to:  file + cssSuffix, name });
        });

        for (let file of templates) {
            this.fs.copyTpl(
                this.templatePath(file.from),
                this.destinationPath(file.to),
                { layout: this.layout, layoutDir: this.layoutDir, name: file.name }
            );
        }

        const replaceOptions = {
            files: this.destinationPath(path.join(this.stylesDir, `main${cssSuffix}`)),
            from: '// yo:update -- page',
            to: createUpdateStr(this.names, directories)
        };
        replace(replaceOptions);

        function _getCssSuffix(cssOption, sassSyntax) {
            const sassSuffix = `.${sassSyntax}`;
            let _result = '';

            switch (cssOption) {
                case 'sass':
                    _result = sassSuffix;
                    break;
                case 'stylus':
                    _result = '.styl';
                    break;
                default:
                    _result = '.less';
            }

            return _result;
        }
        function createUpdateStr(names, dirs) {
            let updateStr = '';

            names.forEach((name, i, arr) => {
                const filepath = name.toLowerCase();

                const updatePath = path.join(dirs.pages.replace('_', ''), filepath, 'index');
                updateStr += `@import '${slash(updatePath)}';\n`;

                if (i === arr.length - 1) {
                    updateStr += '// yo:update -- page';
                }
            });

            return updateStr;
        }
    }
}

module.exports = PageGenerator;
