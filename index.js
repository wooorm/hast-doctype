/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module hast-doctype
 * @fileoverview Add a doctype to a document, if not already existing.
 */

'use strict';

/* eslint-env commonjs */

/*
 * Dependencies.
 */

var doctype = require('doctype');
var visit = require('unist-util-visit');

/*
 * Constants.
 */

var TYPE = 'directive';
var NAME = '!doctype';
var PREFIX = '!DOCTYPE ';

/**
 * Add a doctype to a document, if not already existing.
 *
 * @param {Hast} hast - Processor.
 * @param {string|number} [options=5] - Name of doctype,
 *   see `wooorm/doctype` for available names and doctypes.
 * @return {Function} - Transformer.
 */
function attacher(hast, options) {
    var name = options || 5;

    /**
     * Add a doctype to a document, if not already existing.
     * When adding, adds a doctype based for the given
     * doctype name (defaulting to `5`).
     *
     * @param {Node} tree - hast root node.
     * @param {VFile} file - Virtual file.
     */
    return function (tree, file) {
        var replacement = doctype(name);
        var found;

        if (!replacement) {
            file.fail('Expected valid doctype name, got `' + name + '`');
        } else {
            visit(tree, 'directive', function (node) {
                if (node.name === '!doctype') {
                    found = true;
                    return false;
                }
            });

            if (!found) {
                tree.children.unshift({
                    'type': TYPE,
                    'name': NAME,
                    'value': PREFIX + replacement
                });
            }
        }
    };
}

/*
 * Expose.
 */

module.exports = attacher;
