<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */
<% } %>'use strict';

import ScrollTo from '../scroll-to';

describe('ScrollTo View', function() {

    beforeEach(() => {
        this.scrollTo = new ScrollTo();
    });

    it('Should run a few assertions', () => {
        expect(this.scrollTo)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.exist<% } %>;
    });

});
