/**
* Create prompts for client info
*/

'use strict';

const testingPrompts = async function testingPrompts() {
    if (this.existingConfig) {
        return;
    }

    this.log('\n---- ' + 'Testing'.red.underline + ' ----\n');

    const answers = await this.prompt([{
        type: 'list',
        name: 'testFramework',
        message: 'Which JavaScript ' + 'testing framework'.blue + ' would you like to use?',
        choices: ['Jasmine', 'Mocha', 'None'],
        filter: (val) => {
            const filterMap = {
                'Jasmine': 'jasmine',
                'Mocha': 'mocha',
                'None': 'none'
            };

            return filterMap[val];
        }
    }]);
    
    this.testingPrompts = answers;
};

module.exports = testingPrompts;
