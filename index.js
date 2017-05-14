#!/usr/bin/env node
/* eslint-env node */

'use strict';

const thumb = require('node-thumbnail').thumb;

// function ThumbnailPlugin(options) {
//     this.options = options;
//     console.log('init' + options + ' ' + options.source);
// }
//
// ThumbnailPlugin.prototype.apply = compiler => {
//     //https://webpack.github.io/docs/plugins.html
//
//     compiler.plugin('emit', () => {
//         console.log('emitting files. configured with options: ' + this.options);
//         thumb(this.options);
//     });
//
//     compiler.plugin('done', function() {
//         console.log('Hello World!');
//     });
// };

class ThumbnailPlugin {
    constructor(options) {
        this.options = options;
        console.log('x init' + options + ' ' + options.source);
    }

    apply(compiler) {
        compiler.plugin('emit', () => {
            console.log('x emitting files. configured with options: ' + this.options);
            thumb(this.options);
        });

        compiler.plugin('done', function() {
            console.log('ThumbnailPlugin completed');
        });
    }
}

module.exports = ThumbnailPlugin;