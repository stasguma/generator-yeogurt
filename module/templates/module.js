'use strict';

// Constructor
var <%= className %> = function() {
    this.name = '<%= name %>';
    console.log('%s module', this.name.toLowerCase());
};

module.exports = <%= className %>;
