'use strict';

const util = require('util');
const Generator = require('yeoman-generator');
const path = require('path');
const pjson = require(path.join(process.cwd(), './package.json'));
const config = pjson.config;
const directories = config.directories;

class LayoutGenerator extends Generator {
    constructor(args, opts) {
        super(args, opts);

        const fileJSON = this.config.get('config');
        this.option('layout', {
            desc: 'Allow a custom layout for template to extend from',
            type: String,
            required: false
        });

        // options
        this.projectName = fileJSON.projectName;
        this.htmlOption = fileJSON.htmlOption;
        this.names = this.options._;
        this.layoutFiles = [];
    }

    ask() {
        this.layout = 'base';
        if (this.options.layout) {
            this.layout = this.options.layout;
        }

        this.names.forEach((name) => {
            this.layoutFiles.push(path.join(
                config ? path.join(directories.source, directories.layouts) : 'src/_layouts',
                name.toLowerCase()
            ));
        });

    }

    files() {
        let templates = [];

        if (this.htmlOption === 'pug') {
            this.layoutFiles.forEach((file) => {
                templates.push({ from: 'layout.pug', to: file + '.pug', name: file });
            });
        }
        else if (this.htmlOption === 'nunjucks') {
            this.layoutFiles.forEach((file) => {
                templates.push({ from: 'layout.nunjucks', to: file + '.nunjucks', name: file });
            });
        }

        for (let file of templates) {
            this.fs.copyTpl(
                this.templatePath(file.from),
                this.destinationPath(file.to),
                { layout: this.layout, name: file.name }
            );
        }
    }
};

module.exports = LayoutGenerator;
