import {Icon} from 'meteor/universe:ui-react';
import React from 'react';

export const MenuLink = React.createClass({
    displayName: 'MenuLink',

    propTypes: {
        action:    React.PropTypes.func,
        active:    React.PropTypes.string,

        icon:      React.PropTypes.string,
        link:      React.PropTypes.string,
        text:      React.PropTypes.string,
        class:     React.PropTypes.string,
        className: React.PropTypes.string
    },

    getDefaultProps () {
        return {active: ''};
    },

    render () {
        const className = [
            this.props.className,
            this.props.class,
            this.props.link && this.props.active.indexOf(this.props.link) === 0 && 'active',
            'item'
        ].filter(x => x).join(' ');

        return (
            <a className={className} href={this.props.link} onClick={this.props.action}>
                {this.props.text}
                <Icon icon={this.props.icon}/>
            </a>
        );
    }
});

export default MenuLink;
