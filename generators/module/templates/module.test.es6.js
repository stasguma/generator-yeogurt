<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */
<% } %>'use strict';

import <%= className %> from '../<%= name.toLowerCase() %>';

describe('<%= className %> View', function() {

    beforeEach(() => {
        this.<%= camelizedName %> = new <%= className %>();
    });

    it('Should run a few assertions', () => {
        expect(this.<%= camelizedName %>)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.exist<% } %>;
    });

});
