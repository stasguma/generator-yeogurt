// Main javascript entry point
// Should handle bootstrapping/starting application

import objectFitImages from 'object-fit-images';
import Header from '../_modules/header/header';
import ChoicesSelect from '../_modules/choices-select/choices-select';
import Tabs from '../_modules/tabs/tabs';
import Accordion from '../_modules/accordion/accordion';
import Modal from '../_modules/modal/modal';
import Overlay from '../_modules/overlay/overlay';
import ScrollTo from '../_modules/scroll-to/scroll-to';
import ScrollTop from '../_modules/scroll-top/scroll-top';
import Toggler from '../_modules/toggler/toggler';
import UploadBtn from '../_modules/upload-btn/upload-btn';
// yo:update -- modulePath

(() => {
    console.log('Welcome to Yeogurt!');
    objectFitImages();
    new Header();
    new ChoicesSelect();
    new Tabs();
    new Accordion();
    new Modal();
    new Overlay();
    new ScrollTo();
    new ScrollTop();
    new Toggler();
    new UploadBtn();
    // yo:update -- moduleInit
})();
