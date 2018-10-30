const visit = require('unist-util-visit');

module.exports = function (options) {
  if (!options || !options.domainRegex) {
    throw Error('Missing required "domainRegex" option');
  }

  function visitor(node) {
    if (options.domainRegex.test(node.url)) {
      node.url = node.url.replace(options.domainRegex, '/');
    }
  }

  function transform(tree) {
    visit(tree, ['link', 'linkReference'], visitor);
  }

  return transform;
};