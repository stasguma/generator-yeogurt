'use strict';

const util = require('util');
// const _ = require('lodash');
const camelCase = require('camelcase');
const Generator = require('yeoman-generator');
const path = require('path');
const pjson = require(path.join(process.cwd(), './package.json'));
const config = pjson.config;
const directories = config.directories;
require('colors');
const replace = require('replace-in-file');
const slash = require('slash');

class ModuleGenerator extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.option('atomic', {
            desc: 'Defines if this module is used in atomic design. ' +
            'if so, allow it to be put in a atom, molecule, or organism folder',
            type: Boolean,
            required: false
        });

        const fileJSON = this.config.get('config');

        // options
        // this.projectName = fileJSON.projectName;
        // this.jsFramework = fileJSON.jsFramework;
        // this.singlePageApplication = fileJSON.singlePageApplication;
        // this.jsOption = fileJSON.jsOption;
        // this.jsTemplate = fileJSON.jsTemplate;
        this.cssOption = fileJSON.cssOption;
        this.sassSyntax = fileJSON.sassSyntax;
        this.testFramework = fileJSON.testFramework;
        this.htmlOption = fileJSON.htmlOption;

        this.names = this.options._;
        this.moduleFiles = [];
        this.testFiles = [];

        this.stylesDir = config ?
            path.join(directories.source, directories.styles) :
            'src/_styles';
        this.scriptsDir = config ?
            path.join(directories.source, directories.scripts) :
            'src/_scripts';
    }

    ask() {
        this.atomic = false;
        if (this.options.atomic) {
            this.atomic = this.options.atomic;
        }

        const moduleDir = config ?
            path.join(directories.source, directories.modules) :
            'src/_modules';

        this.names.forEach((name) => {

            this.path = name.toLowerCase();
            // Get the last piece of the path
            // Ex: `button` of `cool/awesome/button`
            this.name = path.parse(name).name;

            this.moduleFiles.push(path.join(
                moduleDir,
                this.path,
                this.name
            ));

            this.testFiles.push(path.join(
                moduleDir,
                this.path,
                'tests',
                this.name
            ));
        });

        if (['atom', 'molecule', 'organism'].includes(this.atomic)) {
            this.names.forEach((name) => {
                this.path = name.toLowerCase();
                this.name = path.parse(name).name;

                this.moduleFiles.push(path.join(
                    moduleDir,
                    this.atomic + 's',
                    this.path,
                    this.name
                ));

                this.testFiles.push(path.join(
                    moduleDir,
                    this.atomic + 's',
                    this.path,
                    'tests',
                    this.name
                ));
            });
        }
        else if (this.atomic) {
            console.error('Error: Incorrect value given for --atomic option: '.red + this.atomic);
            console.error('Error: Only "atom", "molecule", or "organism" are valid values.'.red);
            this.abort = true;
        }
    }

    files() {
        let templates = [];
        const names = this.names;

        if (this.abort) {
            return;
        }

        const htmlSuffix = (this.htmlOption === 'pug') ? '.pug' : '.nunjucks';
        const jsSuffix = '.es6.js';
        const cssSuffix = _getCssSuffix(this.cssOption, this.sassSyntax);

        this.moduleFiles.forEach((file) => {
            const name = path.parse(file).name;

            templates.push(
                { from: 'module' + htmlSuffix, to: file + htmlSuffix, name },
                { from: 'module' + jsSuffix, to: file + '.js', name },
                { from: 'module.css', to: file + cssSuffix, name }
            );
        });

        this.testFiles.forEach((file) => {
            const name = path.parse(file).name;

            templates.push({ from: 'module.test' + jsSuffix, to: file + '.test.js', name });
        });

        for (let file of templates) {
            const camelizedName = camelCase(file.name);
            this.fs.copyTpl(
                this.templatePath(file.from),
                this.destinationPath(file.to),
                {
                    layout: this.layout,
                    name: file.name,
                    className: camelizedName.charAt(0).toUpperCase() + camelizedName.slice(1),
                    camelizedName: camelizedName,
                    testFramework: this.testFramework
                }
            );

        }

        const replaceOptionsForStyles = {
            files: this.destinationPath(path.join(this.stylesDir, `main${cssSuffix}`)),
            from: '// yo:update -- module',
            to: createUpdatedStyleStr(this.names, directories)
        };
        replace(replaceOptionsForStyles);

        const replaceOptionsForScripts = {
            files: this.destinationPath(path.join(this.scriptsDir, `main.js`)),
            from: ['// yo:update -- moduleImport', '// yo:update -- moduleInit'],
            to: createUpdatedScriptStr(this.names, directories)
        };
        replace(replaceOptionsForScripts);

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
        function createUpdatedStyleStr(names, dirs) {
            let updateStr = '';

            names.forEach((name, i, arr) => {
                const filepath = name.toLowerCase();
                const filename = path.parse(name).name;

                const updatePath = path.join('../', dirs.modules, filepath, filename);
                updateStr += `@import '${slash(updatePath)}';\n`;

                if (i === arr.length - 1) {
                    updateStr += '// yo:update -- module';
                }
            });

            return updateStr;
        }
        function createUpdatedScriptStr(names, dirs) {
            let updateImportStr = '';
            let updateInitStr = '';

            names.forEach((name, i, arr) => {
                const filepath = name.toLowerCase();
                const filename = path.parse(name).name;
                const camelizedName = camelCase(filename);
                const className = camelizedName.charAt(0).toUpperCase() + camelizedName.slice(1);
                const updatePath = path.join('../', dirs.modules, filepath, filename);

                updateImportStr += `import ${className} from '${slash(updatePath)}';\n`;
                updateInitStr += `new ${className}();\n\t`;

                if (i === arr.length - 1) {
                    updateImportStr += '// yo:update -- moduleImport';
                    updateInitStr += `// yo:update -- moduleInit`;
                }
            });

            return [updateImportStr, updateInitStr];
        }
    }
}

module.exports = ModuleGenerator;
