Package.describe({
    name: 'universe:ui-react-menu',
    summary: 'Menu component for UniCMS.',
    version: '0.1.0',
    readme: 'README.md'
});

Package.onUse(function (api) {
    api.use([
        'universe:modules@0.6.7',
        'universe:ui-react@0.1.0'
    ]);

    api.addFiles([
        'index.import.js',

        'lib/MenuBuilder.import.jsx',

        'components/Menu.import.jsx',
        'components/MenuLink.import.jsx'
    ]);
});
