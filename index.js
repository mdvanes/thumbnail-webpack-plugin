#!/usr/bin/env node
/* eslint-env node */

'use strict';

const thumb = require('node-thumbnail').thumb;

class ThumbnailPlugin {
    constructor(options) {
        if(Array.isArray(options)) {
            this.options = options;
        } else {
            throw new Error('Expecting array of node-thumbnail configuration objects');
        }
        //console.log('init' + options + ' ' + options.source);
    }

    apply(compiler) {
        compiler.plugin('emit', () => {
            //console.log('Emitting files. configured with options: ' + this.options);
            //thumb(this.options[0]);
            const thumbPromises = this.options.map(config => thumb(config));
            Promise
                .all(thumbPromises)
                .catch(err => {
                    throw new Error('Failed to transform' + err);
                });
        });

        // compiler.plugin('done', function() {
        //     console.log('ThumbnailPlugin completed');
        // });
    }
}

module.exports = ThumbnailPlugin;