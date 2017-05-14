#!/usr/bin/env node
/* eslint-env node */

// Run with `npm run test:e2e`

const ThumbnailPlugin = require('../index');

const common = {

    entry: './test/dummyInput.js',
    output: {
        filename: 'temp/dummyOutput.js'
    },

    plugins: [
        new ThumbnailPlugin([{
            source: './test/fixtures/pictures',
            destination: './temp/thumb'
        }])
    ],

    module: {
        rules: [
            {
                test: /\.js?$/,
                loaders: []
            }
        ]
    }
};

module.exports = common;
