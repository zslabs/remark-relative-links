# remark-relative-links

Rewrites absolute URLs to relative ones with [**remark**](https://remark.js.org/)

## Installation

```bash
yarn add remark-relative-links
```

## Usage

### Source

```js
const html = require('remark-html');
const remark = require('remark');
const relativeLinks = require('remark-relative-links');

remark()
  .use(relativeLinks, {
    domainRegex: /http[s]*:\/\/[www.]*yoursite\.com[/]?/,
  })
  .use(html)
  .process('[Blog](https://yoursite.com/blog/article/)', (err, file) => {
    if (err) throw err
    console.log(String(file))
  });
```

### Yields

```html
<p><a href="/blog/article/">Blog</a></p>
```

## API

### `remark.use(relativeLinks[, options])`

Add target and rel attributes to external links.

###### `options.domainRegex` **Required**

Regex used to decipher what domain to "relative-ize". The example provided should handle most cases.

## License

[MIT](LICENSE)
