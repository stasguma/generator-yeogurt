/**
* Setup extra generator options
*/

'use strict';

const endConfig = function endConfig() {
    if (!this.options['skip-install']) {
        this.log('\n' + 'Everything looks ready!'.blue +
        ' Get started by running "' + 'gulp serve'.green + '".\n'
        );
    } else {
        this.log(`After installed dependencies get started by running ${'gulp serve'.green}`);
    }
};

module.exports = endConfig;
