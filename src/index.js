const visit = require('unist-util-visit');

module.exports = (options = {}) => {
  if (!options.domainRegex) {
    throw Error('Missing required "domainRegex" option');
  }

  function visitor(node) {
    if (options.domainRegex.test(node.url)) {
      node.url = node.url.replace(options.domainRegex, '/');
    }
  }

  function transform(tree) {
    visit(tree, 'link', visitor);
    visit(tree, 'linkReference', visitor);
  }

  return transform;
};
