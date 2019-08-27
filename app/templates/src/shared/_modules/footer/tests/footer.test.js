<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */
<% } %>'use strict';

var Footer = require('../footer');

describe('Footer View', function() {

    beforeEach(function() {
        this.footer = new Footer();
    });

    it('Should run a few assertions', function() {
        expect(this.footer)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.exist<% } %>;
    });

});
