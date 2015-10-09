/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module hast-doctype
 * @fileoverview Test suite for `hast-doctype`.
 */

'use strict';

/* eslint-env node */

/*
 * Dependencies.
 */

var test = require('tape');
var hast = require('hast');
var doctype = require('./');

/*
 * Tests.
 */

test('doctype', function (t) {
    t.throws(function () {
        hast().use(doctype, 6).process('');
    }, '1:1: Expected valid doctype name, got `6`')

    t.deepEqual(
        hast().use(doctype).process(''),
        '<!DOCTYPE html>'
    );

    t.deepEqual(
        hast().use(doctype).process('<!DOCTYPE html>'),
        '<!DOCTYPE html>'
    );

    t.deepEqual(
        hast().use(doctype).process('<html></html>'),
        '<!DOCTYPE html><html></html>'
    );

    t.deepEqual(
        hast().use(doctype).process('<!foo>\n<html></html>'),
        '<!DOCTYPE html><!foo>\n<html></html>'
    );

    t.end();
});
