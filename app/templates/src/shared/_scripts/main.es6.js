// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

// import $ from 'jquery';
import objectFitImages from 'object-fit-images';
import Header from '../_modules/header/header';
import Footer from '../_modules/footer/footer';
import Tabs from '../_modules/tabs/tabs';

(() => {
    objectFitImages();
    new Tabs('.js-badger-accordion');
    console.log('Welcome to Yeogurt!');
})();
