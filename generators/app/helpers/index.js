const chalk = require('chalk');

module.exports = {
    printLogo
};

function printLogo(pkg) {
    this.log('\n');
    this.log(`${chalk.magenta('██╗   ██╗███████╗ ██████╗  ██████╗ ██╗   ██╗██████╗ ████████╗')}`);
    this.log(`${chalk.magenta('╚██╗ ██╔╝██╔════╝██╔═══██╗██╔════╝ ██║   ██║██╔══██╗╚══██╔══╝')}`);
    this.log(`${chalk.magenta(' ╚████╔╝ █████╗  ██║   ██║██║  ███╗██║   ██║██████╔╝   ██║')}`);
    this.log(`${chalk.magenta('  ╚██╔╝  ██╔══╝  ██║   ██║██║   ██║██║   ██║██╔══██╗   ██║')}`);
    this.log(`${chalk.magenta('   ██║   ███████╗╚██████╔╝╚██████╔╝╚██████╔╝██║  ██║   ██║')}`);
    this.log(`${chalk.magenta('   ╚═╝   ╚══════╝ ╚═════╝  ╚═════╝  ╚═════╝ ╚═╝  ╚═╝   ╚═╝')}\n`);
    this.log(chalk.white.bold.underline(`${pkg.forkHomepage}\n`));
    this.log(chalk.white('Welcome to Yeogurt ') + chalk.yellow(`v${pkg.version}`));
    this.log(chalk.white(`Application files will be generated in folder: ${chalk.yellow(process.cwd())}`));
}
