import {Icon} from '{universe:ui-react}';

import MenuLink from './MenuLink';

export const Menu = React.createClass({
    displayName: 'Menu',

    propTypes: {
        topLevel: React.PropTypes.bool,
        collapse: React.PropTypes.bool,

        active: React.PropTypes.string,

        icon:      React.PropTypes.string,
        link:      React.PropTypes.string,
        text:      React.PropTypes.string,
        class:     React.PropTypes.string,
        className: React.PropTypes.string,

        components: React.PropTypes.object,

        items: React.PropTypes.arrayOf(React.PropTypes.object)
    },

    getDefaultProps () {
        return {active: '', items: []};
    },

    render () {
        const className = [
            this.props.className,
            this.props.class,
            'menu'
        ].filter(x => x).join(' ');

        if (this.props.topLevel) {
            return (
                <div className={`ui ${className}`}>
                    {(this.props.text || this.props.icon) && (
                        <a className={`${this.isActive() ? 'active ' : ''}header item`} href={this.props.link}>
                            {this.props.text}
                            <Icon icon={this.props.icon}/>
                        </a>
                    )}

                    {!this.isCollapsed() && (
                        this.renderItems()
                    )}
                </div>
            );
        }

        return (
            <div className={`${this.isActive() ? 'active ' : ''}item`}>
                {this.props.text && (
                    <a className="header" href={this.props.link}>
                        {this.props.text}
                    </a>
                )}
                <Icon icon={this.props.icon}/>

                {!this.isCollapsed() && this.props.items && this.props.items.length ? (
                    <div className={className}>
                        {this.renderItems()}
                    </div>
                ) : undefined}
            </div>
        );
    },

    renderItems () {
        const components = {
            menu: Menu,
            link: MenuLink,
            ...this.props.components
        };

        return this.props.items.map((item, index) => {
            let Component = components[item.type] || item.component;
            if (Component === undefined) {
                throw new TypeError();
            }

            item.active   = this.props.active;
            item.collapse = this.props.collapse;

            return (
                <Component key={index} {...item}/>
            );
        });
    },

    isActive () {
        return (
            this.props.active.indexOf(this.props.link) === 0 ||
            this.props.topLevel && this.props.text === undefined
        );
    },

    isCollapsed () {
        return this.props.collapse && !this.isActive();
    }
});

export default Menu;
