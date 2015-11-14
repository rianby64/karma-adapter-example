var path = require('path');

var createPattern = function(path) {
  return {pattern: path, included: true, served: true, watched: false};
};

var initGherkin = function(files) {
  files.unshift(createPattern(__dirname + '/adapter.js'));
};

initGherkin.$inject = ['config.files'];

module.exports = {
  'framework:gherkin': ['factory', initGherkin]
};
