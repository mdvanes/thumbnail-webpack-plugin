#!/usr/bin/env node
/* eslint-env node */
'use strict';

const expect = require('chai').expect;
const ThumbnailWebpackPlugin = require('../index');
//var path = require('path');
//var tests = require('./tests');

describe('clean-webpack-plugin', () => {
    this.ThumbnailWebpackPlugin = ThumbnailWebpackPlugin;

    //var _this = this;
    let thumbnailWebpackPlugin;
    let result;

    // before(function () {
    //     // tests.createDir(_this.projectRoot);
    //     // tests.createDir(_this.outsideProjectRoot);
    // });
    //
    // after(function () {
    //     //thumbnailWebpackPlugin = new ThumbnailWebpackPlugin([_this.projectRoot, _this.outsideProjectRoot], { root: _this.projectDir });
    //     thumbnailWebpackPlugin = new ThumbnailWebpackPlugin();
    //     thumbnailWebpackPlugin.apply();
    // });

    //tests.run(_this);

    it('should be defined', function () {
        thumbnailWebpackPlugin = new ThumbnailWebpackPlugin();
        //result = thumbnailWebpackPlugin.apply();

        expect(thumbnailWebpackPlugin).to.be.ok;
    });

});