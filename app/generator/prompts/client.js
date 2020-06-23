/**
* Create prompts for client info
*/

'use strict';

const clientPrompts = async function clientPrompts() {
    if (this.existingConfig) {
        return;
    }

    this.log('\n---- ' + 'Client'.red.underline + ' ----\n');

    const answers = await this.prompt([{
        type: 'list',
        name: 'htmlOption',
        message: 'Which ' + 'HTML preprocessor'.blue + ' would you like to use?',
        choices: ['Pug', 'Nunjucks'],
        filter: (val) => {
            const filterMap = {
                'Pug': 'pug',
                'Nunjucks': 'nunjucks'
            };

            return filterMap[val];
        }
    }, {
        type: 'list',
        name: 'cssOption',
        message: 'What would you like to use to ' + 'write styles'.blue + '?',
        choices: ['Sass', 'Stylus'],
        filter: (val) => {
            const filterMap = {
                'Sass': 'sass',
                'Stylus': 'stylus'
            };

            return filterMap[val];
        }
    }, {
        when: function(answers) {
            return answers.cssOption === 'sass';
        },
        type: 'list',
        name: 'sassSyntax',
        message: 'What ' + 'Sass syntax'.blue + ' would you like to use ?',
        choices: ['Scss', 'Sass'],
        filter: (val) => {
            const filterMap = {
                'Scss': 'scss',
                'Sass': 'sass'
            };

            return filterMap[val];
        }
    }, {
        type: 'list',
        name: 'cssReset',
        message: 'What ' + 'css reset'.blue + ' would you like to use?',
        choices: ['Eric Meyer\'s CSS reset', 'normalize.css'],
        filter: (val) => {
            const filterMap = {
                'Eric Meyer\'s CSS reset': 'ericmeyer',
                'normalize.css': 'normalize'
            };

            return filterMap[val];
        }
    }]);

    this.clientPrompts = answers;
};

module.exports = clientPrompts;
