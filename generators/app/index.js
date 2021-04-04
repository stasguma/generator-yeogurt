// const path = require("path");
const Generator = require("yeoman-generator");
const pkg = require("../../package.json");
const { printLogo } = require("./helpers/index");

// Order to load and run generator config files based on their name
// const order = [
//   /* Prompts */
//   "logo",
//   "existing", // Check for existing .yo-rc.json file
//   "project",
//   "server",
//   "client",
//   "testing",
//   /* Config */
//   "answers", // Handle answers and them up for use in templates
//   "save", // Save answers to .yo-rc.json file
//   /* Files */
//   "root",
//   "image",
//   "task",
//   "pug",
//   "nunjucks",
//   "style",
//   "tests",
//   /* Config */
//   "install", // Handle generator options and run `bower install & npm install`
//   "end"
// ];

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option("skip-install", {
      desc: "Skip the automated installation of npm or yarn packages",
      type: Boolean,
      defaults: false
    });

    this.option("yarn", {
      desc: "Choose the yarn as a package manager",
      type: Boolean,
      defaults: false
    });
  }

  initializing() {
    this.pkg = pkg;
    printLogo.call(this, this.pkg);
  }

  prompting() {}

  writing() {}

  install() {}

  end() {}
};
