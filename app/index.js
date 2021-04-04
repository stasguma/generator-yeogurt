'use strict';

const path = require('path');
const Generator = require('yeoman-generator');
const grabFiles = require('./helpers/grabFiles');
require('colors');

// Order to load and run generator config files based on their name
const order = [
    /* Prompts */
    'logo',
    'existing', // Check for existing .yo-rc.json file
    'project',
    'server',
    'client',
    'testing',
    /* Config */
    'answers',  // Handle answers and them up for use in templates
    'save',   // Save answers to .yo-rc.json file
    /* Files */
    'root',
    'image',
    'task',
    'pug',
    'nunjucks',
    'style',
    'tests',
    /* Config */
    'install',   // Handle generator options and run `bower install & npm install`
    'end'
];

// Create array that will hold all generator config file objects
let config = [];

// Create object that will hold all of the code needed to pass to the YeogurtGenerator
let tasks = {};

// Grab all needed generator config files
// and assign an index based on the order array
config = grabFiles([
    path.join(__dirname, '/generator/prompts'),
    path.join(__dirname, '/generator/config'),
    path.join(__dirname, '/generator/files')
], order);

// Sort config files based on their index ascending (ex. 3, 1, 2 -> 1, 2, 3)
config.sort((a, b) => a.index - b.index);

// Attach to tasks object so that the filename becomes a key
// and the code becomes the value
config.forEach(item => tasks[item.name] = item.code);

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.pkg = require('../package.json');

        this.option('skip-install', {
            desc: 'Skip the automated installation of npm or yarn packages',
            type: Boolean,
            defaults: false
        });
        this.option('yarn', {
            desc: 'Choose the yarn as a package manager',
            type: Boolean,
            defaults: false
        });

        // for (let method in tasks) {
        //     YeogurtGenerator.prototype[method] = tasks[method];
        // }
        Object.assign(YeogurtGenerator.prototype, tasks);
    }

};
// const YeogurtGenerator = yeoman.Base.extend(Object.assign({
//     initializing: function() {
//         this.pkg = require('../package.json');
//     }
// }, tasks));

// module.exports = YeogurtGenerator;
