<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */
<% } %>'use strict';

var Header = require('../header');

describe('Header View', function() {

    beforeEach(function() {
        this.header = new Header();
    });

    it('Should run a few assertions', function() {
        expect(this.header)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.exist<% } %>;
    });

});
