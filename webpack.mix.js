let mix = require('laravel-mix');
const path = require('path');

mix.webpackConfig({
    devServer: {
        proxy: {
            '*': 'http://127.0.0.1:8000/'
        }
    }
});