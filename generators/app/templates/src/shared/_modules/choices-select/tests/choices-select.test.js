<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */
<% } %>'use strict';

import ChoicesSelect from '../choices-select';

describe('ChoicesSelect View', function() {

    beforeEach(() => {
        this.choicesSelect = new ChoicesSelect();
    });

    it('Should run a few assertions', () => {
        expect(this.choicesSelect)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.exist<% } %>;
    });

});
