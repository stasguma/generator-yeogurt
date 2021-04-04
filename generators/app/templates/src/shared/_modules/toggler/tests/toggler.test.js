<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */
<% } %>'use strict';

import Toggler from '../toggler';

describe('Toggler View', function() {

    beforeEach(() => {
        this.toggler = new Toggler();
    });

    it('Should run a few assertions', () => {
        expect(this.toggler)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.exist<% } %>;
    });

});
