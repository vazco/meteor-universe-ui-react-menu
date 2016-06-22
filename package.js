Package.describe({
    name: 'universe:ui-react-menu',
    summary: 'Menu component for UniCMS.',
    version: '0.1.0',
    readme: 'README.md'
});

Package.onUse(function (api) {
    api.use([
        'universe:ui-react@0.1.0',
        'ecmascript'
    ]);

    api.addFiles([
        'index.js'
    ]);
    api.mainModule('index.js');
});
