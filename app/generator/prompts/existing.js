/**
* Check for existing yo-rc.json configuration file
*/

'use strict';

const existingConfigPrompt = async function existingConfigPrompt() {
    if (this.config.get('config')) {
        const answers = await this.prompt([{
            type: 'confirm',
            name: 'existingConfig',
            message: 'Existing .yo-rc configuration found, would you like to use it?',
            default: true
        }]);

        this.existingConfig = answers.existingConfig;
    } else {
        return false;
    }
};

module.exports = existingConfigPrompt;
