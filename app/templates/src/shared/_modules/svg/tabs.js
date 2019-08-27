var BadgerAccordion = require('badger-accordion');

'use strict';

// Constructor
var Tabs = function(selector) {
  this.name = 'Tabs';
  console.log('%s module', this.name);

  this.accordionEls = document.querySelectorAll(selector);
};

Tabs.prototype.init = function () {
    this.initAccordion();

    return this;
};

Tabs.prototype.initAccordion = function () {
    if (!this.accordionEls) { return; }

    for (var i = 0; i < this.accordionEls.length; i++) {
        var accordion = this.accordionEls[i];

        new BadgerAccordion(accordion, {
            openMultiplePanels: true
        });
    }

    return this;
};

module.exports = Tabs;
