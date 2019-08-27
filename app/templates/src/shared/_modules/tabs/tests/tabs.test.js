<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */
<% } %>'use strict';

var Tabs = require('../tabs');

describe('Tabs View', function() {

    beforeEach(function() {
        this.tabs = new Tabs();
    });

    it('Should run a few assertions', function() {
        expect(this.tabs)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.exist<% } %>;
    });

});
