import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});

// mix.override(config => {
//     // Apply a workaround caused by Laravel Mix using the `webpack-dev-server@v4.0.0-beta`:
//     // https://github.com/webpack/webpack-dev-server/releases/tag/v4.0.0-beta.3.
//     // Basically the `dev` property has been deprecated in favor of `devMiddleware`.
//     if (config.devServer) {
//         config.devServer.devMiddleware = config.devServer.dev;
//         delete config.devServer.dev;
//     }
// });
