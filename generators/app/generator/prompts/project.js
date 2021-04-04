/**
* Generate Initial project information prompts
*/

'use strict';

const projectPrompts = async function projectPrompts() {
    if (this.existingConfig) {
        return;
    }
    
    this.log('\n---- ' + 'Project Info'.red.underline + ' ----\n');

    const answers = await this.prompt([{
        type: 'input',
        name: 'projectName',
        message: 'What would you like to' + ' name your project'.blue + '?',
        default: 'Sample'
    }]);

    this.projectPrompts = answers;
};

module.exports = projectPrompts;
