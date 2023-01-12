let mix = require('laravel-mix');

mix.webpackConfig({
    devServer: {
        proxy: {
            '*': 'http://127.0.0.1:8000/'
        }
    }
});