/**
* Setup extra generator options
*/

'use strict';

const installConfig = function installConfig() {
    this.installDependencies({
        bower: false,
        npm: !this.options.yarn,
        yarn: this.options.yarn,
        skipInstall: this.options['skip-install']
    });
};

module.exports = installConfig;
