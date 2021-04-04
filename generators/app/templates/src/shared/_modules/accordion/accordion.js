import BadgerAccordion from 'badger-accordion';

export default class Accordion {
    constructor(selector) {
        this.name = 'accordion';
        console.log('%s module', this.name.toLowerCase());

        this.accordionEls = Array.from(document.querySelectorAll('.js-badger-accordion'));

        this.init();
    }

    init() {
        this.initAccordion();
    }

    initAccordion() {
        if (!this.accordionEls.length) { return; }

        for (const accordion of this.accordionEls) {
            new BadgerAccordion(accordion, {
                openMultiplePanels: true
            });
        }
    }
}
