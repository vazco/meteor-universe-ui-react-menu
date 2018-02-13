## Abandonware

# universe:ui-react-menu

### MenuBuilder
```js
import {MenuBuilder} from '{universe:ui-react-menu}';

export default new MenuBuilder();
```

### Adding link
```js
import menuBuilder from './menuBuilder';

menuBuilder.add({
    text: 'Add',
    type: 'link',
    icon: 'plus', // SemanticUI icon

    link: '/add'    // link href
    action: () => { // link onClick
        console.log('Add clicked.');
    }}
});
```

### Adding submenu
```js
import menuBuilder from './menuBuilder';

menuBuilder.add({
    icon: 'view',
    link: '/path/to/view',
    text: 'Name',
    type: 'menu',

    items: [
        {
            text: 'Add',
            type: 'link',
            icon: 'plus',

            link: '/add',
            action: () => {
                console.log('Add clicked.');
            }}
        }
    ]
});
```

### Usage
```js
import menuBuilder from './menuBuilder';

const ExampleTopLevelVerticalMenu = React.createClass({
    render () {
        return (
            <Menu className="vertical fluid" topLevel={true} {...menuBuilder.export()}/>
        );
    }
});
```
