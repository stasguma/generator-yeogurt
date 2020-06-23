<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */
<% } %>'use strict';

import Header from '../header';

describe('Header View', function() {

    beforeEach(() => {
        this.header = new Header();
    });

    it('Should run a few assertions', () => {
        expect(this.header)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.exist<% } %>;
    });

});
