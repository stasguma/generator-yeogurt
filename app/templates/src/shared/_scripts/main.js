// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

// var $ = require('jquery');
var objectFitImages = require('object-fit-images');
var Header = require('../_modules/header/header');
var Footer = require('../_modules/footer/footer');
var Tabs = require('../_modules/tabs/tabs');

(function() {
    objectFitImages();
    new Tabs('.js-badger-accordion');
    console.log('Welcome to Yeogurt!');
})();
