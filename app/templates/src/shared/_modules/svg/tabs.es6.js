import BadgerAccordion from 'badger-accordion';

'use strict';

export default class Tabs {
    constructor(selector) {
        console.log('Tabs module');

        this.accordionEls = Array.from(document.querySelectorAll(selector));
    }

    init() {
        this.initAccordion();
    }

    initAccordion() {
        if (!this.accordionEls) { return; }

        for (const accordion of this.accordionEls) {
            new BadgerAccordion(accordion, {
                openMultiplePanels: true
            });
        }
    }
}
