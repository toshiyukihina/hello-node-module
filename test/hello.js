var hello = require('../');
var test = require('tape');

test('say', function(t) {
  var en = hello('en').say();
  t.equal(en, 'Hello!');

  var ja = hello('ja').say();
  t.equal(ja, 'こんにちわ！');

  var unknown = hello('unknown').say();
  t.equal(en, unknown);

  var undef = hello().say();
  t.equal(en, undef);

  t.end();
});
