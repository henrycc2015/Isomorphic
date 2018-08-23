require('babel-polyfill') //模拟全功能ES6环境
require('babel-register')({
  ignore: /\/(build|node_modules)\//,
  presets: ['env', 'babel-preset-react', 'stage-0'],
  plugins: ['add-module-exports','syntax-dynamic-import',"dynamic-import-node","react-loadable/babel"]
});
// Css required hook 
require('css-modules-require-hook')({
    extensions: ['.scss'],
    preprocessCss: (data, filename) =>
        require('node-sass').renderSync({
            data,
            file: filename
        }).css,
    camelCase: true,
    generateScopedName: '[name]'
})

require('./server');
