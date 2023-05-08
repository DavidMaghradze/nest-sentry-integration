"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const webpack_plugin_1 = require("@sentry/webpack-plugin");
module.exports = {
    entry: './src/main.ts',
    output: {
        path: path_1.default.resolve(__dirname, 'dist'),
        filename: 'main.ts',
    },
    target: 'node',
    devtool: 'source-map',
    plugins: [
        new webpack_plugin_1.default({
            release: 'backend-sentry-github@v0.1.0',
            include: './dist',
        }),
    ],
};
//# sourceMappingURL=webpack.config.js.map