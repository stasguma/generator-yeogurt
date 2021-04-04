<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */
<% } %>'use strict';

import Modal from '../Modal';

describe('Modal View', function() {

    beforeEach(() => {
        this.Modal = new Modal();
    });

    it('Should run a few assertions', () => {
        expect(this.modal)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.exist<% } %>;
    });

});
