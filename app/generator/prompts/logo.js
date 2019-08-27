/**
 * Generate logo prompt
 */

'use strict';

const logoPrompt = function logoPrompt() {
  const yeogurtLogo = '' +
    '                                    _   \n'.red +
    '  ' + 'Welcome to'.green + '                       | |  \n'.red +
    '  _   _  ___  ___   __ _ _   _ _ __| |_ \n'.red +
    ' | | | |/ _ \\\/ _ \\ \/ _` | | | | \'__| __|\n'.red +
    ' | |_| |  __/ (_) | (_| | |_| | |  | |_ \n'.red +
    '  \\__, |\\___|\\___/ \\__, |\\__,_|_|   \\__|\n'.red +
    '   __/ |            __/ |\n'.red +
    '  |___/            |___/  '.red +
    '               \n';

  // have Yeogurt greet the user.
  this.log(yeogurtLogo);
};

module.exports = logoPrompt;
