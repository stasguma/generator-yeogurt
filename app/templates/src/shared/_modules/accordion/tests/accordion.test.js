<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */
<% } %>'use strict';

import Accordion from '../accordion';

describe('Accordion View', function() {

    beforeEach(() => {
        this.accordion = new Accordion();
    });

    it('Should run a few assertions', () => {
        expect(this.accordion)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.exist<% } %>;
    });

});
