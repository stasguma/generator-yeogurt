<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */
<% } %>'use strict';

import UploadBtn from '../upload-btn';

describe('UploadBtn View', function() {

    beforeEach(() => {
        this.uploadBtn = new UploadBtn();
    });

    it('Should run a few assertions', () => {
        expect(this.uploadBtn)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.exist<% } %>;
    });

});
