<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */
<% } %>'use strict';

import Overlay from '../overlay';

describe('Overlay View', function() {

    beforeEach(() => {
        this.overlay = new Overlay();
    });

    it('Should run a few assertions', () => {
        expect(this.overlay)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.exist<% } %>;
    });

});
