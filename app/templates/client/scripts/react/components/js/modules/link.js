/**
*   Link Component
*   Handles pushState route changes within app
*   Usage: DOM(Link, {url: '/linkUrl'}, 'Link Title')
*/


'use strict';

var React = require('react');
var routeActions = require('../../actions/routes');

// Alias for React DOM
var DOM = React.createElement;

var LinkComponent = React.createClass({

    propTypes: {
        url: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            DOM('a', React.__spread({
                onClick: this.handleClick,
                href: this.props.url
            }, this.props), this.props.children)
        );
    },

    handleClick: function(e) {
        e.preventDefault();
        routeActions.setRoute(this.props.url);
    }

});

module.exports = LinkComponent;