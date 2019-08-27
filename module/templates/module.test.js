<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */
<% } %>'use strict';

var <%= className %> = require('../<%= name.toLowerCase() %>');

describe('<%= className %> View', function() {

    beforeEach(function() {
        this.<%= camelizedName %> = new <%= className %>();
    });

    it('Should run a few assertions', function() {
        expect(this.<%= camelizedName %>)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.exist<% } %>;
    });

});
