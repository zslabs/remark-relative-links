const visit = require('unist-util-visit');

module.exports = function (options) {
  if (!options || !options.domainRegex) {
    throw Error('Missing required "domainRegex" option');
  }

  let domainRegex = options.domainRegex

  // special for plain strings: they are not "instanceof String"
  if (typeof domainRegex === "string"){
    domainRegex = new RegExp(domainRegex);
  }

  if (!domainRegex instanceof RegExp) {
    throw Error('Required "domainRegex" option need to be a RegEx or RegExp-String');
  }

  function visitor(node) {
    if (domainRegex.test(node.url)) {
      node.url = node.url.replace(domainRegex, '/');
    }
  }

  function transform(tree) {
    visit(tree, ['link', 'linkReference'], visitor);
  }

  return transform;
};
