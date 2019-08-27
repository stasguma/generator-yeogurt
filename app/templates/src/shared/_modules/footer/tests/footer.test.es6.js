<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */
<% } %>'use strict';

import Footer from '../footer';

describe('Footer View', function() {

    beforeEach(() => {
        this.footer = new Footer();
    });

    it('Should run a few assertions', () => {
        expect(this.footer)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.exist<% } %>;
    });

});
