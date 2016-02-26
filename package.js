Package.describe({
    name: 'universe:ui-react-menu',
    summary: 'Menu component for UniCMS.',
    version: '0.1.0',
    readme: 'README.md'
});

Package.onUse(function (api) {
    api.use([
        'modules@0.5.0-modules.8',
        'ecmascript@0.4.0-modules.8',
        'universe:ui-react@0.1.0'
    ]);

    api.addFiles([
        'index.js',

        'lib/MenuBuilder.jsx',

        'components/Menu.jsx',
        'components/MenuLink.jsx'
    ]);
});
