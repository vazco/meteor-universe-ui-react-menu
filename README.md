<h1 align="center">
    <a href="https://github.com/vazco">vazco</a>/Universe UI React Menu
</h1>

&nbsp;

<h3 align="center">
  -- Abandonware. This package is deprecated! --
</h3>

&nbsp;

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

### License

<img src="https://vazco.eu/banner.png" align="right">

**Like every package maintained by [Vazco](https://vazco.eu/), Universe UI React Menu is [MIT licensed](https://github.com/vazco/uniforms/blob/master/LICENSE).**
