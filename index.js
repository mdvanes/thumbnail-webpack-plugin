#!/usr/bin/env node
/* eslint-env node */

//const thumb = require('');

function ThumbnailPlugin(options) {
    // Setup the plugin instance with options...
}

ThumbnailPlugin.prototype.apply = function(compiler) {
    compiler.plugin('done', function() {
        console.log('Hello World!');
    });
};

module.exports = ThumbnailPlugin;