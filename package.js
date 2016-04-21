Package.describe({
    name: 'universe:ui-react-menu',
    summary: 'Menu component for UniCMS.',
    version: '0.2.0',
    readme: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.3.2.3');
    
    api.use([
        'modules',
        'ecmascript',
        'universe:ui-react@0.1.0'
    ]);

    api.mainModule('index.js');
});
