# hast-doctype [![Build Status](https://img.shields.io/travis/wooorm/hast-doctype.svg?style=flat)](https://travis-ci.org/wooorm/hast-doctype) [![Coverage Status](https://img.shields.io/codecov/c/github/wooorm/hast-doctype.svg)](https://codecov.io/github/wooorm/hast-doctype)

Add a doctype to a document, if not already existing.

## Installation

[npm](https://docs.npmjs.com/cli/install):

```bash
npm install hast-doctype
```

**hast-doctype** is also available for
[bower](http://bower.io/#install-packages), [duo](http://duojs.org/#getting-started),
and for AMD, CommonJS, and globals ([uncompressed](hast-doctype.js) and
[compressed](hast-doctype.min.js)).

## Usage

```js
var hast = require('hast');
var doctype = require('hast-doctype');

hast().use(doctype, 5).process([
    '',
    '<html>',
    '  <head>',
    '    <title>Hello</title>',
    '  </head>',
    '  <body>',
    '    <h1>World!</h1>',
    '  </body>',
    '</html>'
].join('\n'));
```

Yields:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello</title>
  </head>
  <body>
    <h1>World!</h1>
  </body>
</html>
```

## API

### [hast](https://github.com/wooorm/hast#api).[use](https://github.com/wooorm/hast#hastuseplugin-options)(doctype\[, name\])

Add a doctype to a document, if not already existing.

**Parameters**

*   `doctype`
    — This plug-in;

*   `name` (`string` or `number`, optional, default: `5`)
    — Name of an HTML doctype, given to
    [**doctype**](https://github.com/wooorm/doctype#doctypename).

## License

[MIT](LICENSE) © [Titus Wormer](http://wooorm.com)
