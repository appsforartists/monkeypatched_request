require('prfun');

var Request = require("request");

// Monkeypatch the request methods to be promises.
[
  'put',
  'patch',
  'post',
  'head',
  'del',
  'get'
].forEach(
  function (methodName, methodNames, i) {
    Request[methodName] = Promise.promisify(Request[methodName], true);
  }
);

module.exports = Request;