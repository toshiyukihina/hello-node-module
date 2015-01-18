(function() {
  var hello, test;

  hello = require('../');

  test = require('tape');

  test('say', function(t) {
    var en, ja, undef, unknown;
    en = hello('en').say();
    t.equal(en, 'Hello John Doe!');
    en = hello('en').say('Tom');
    t.equal(en, 'Hello Tom!');
    ja = hello('ja').say();
    t.equal(ja, 'こんにちわ、名無しさん！');
    ja = hello('ja').say('やまだ');
    t.equal(ja, 'こんにちわ、やまださん！');
    unknown = hello('unknown').say();
    t.equal(unknown, 'Hello John Doe!');
    undef = hello().say();
    t.equal(undef, 'Hello John Doe!');
    return t.end();
  });

}).call(this);
