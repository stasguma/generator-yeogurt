<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */
<% } %>'use strict';

import Tabs from '../tabs';

describe('Tabs View', function() {

  beforeEach(() => {
    this.tabs = new Tabs();
  });

  it('Should run a few assertions', () => {
    expect(this.tabs)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.exist<% } %>;
  });

});
