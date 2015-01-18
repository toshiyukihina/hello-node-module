(function() {
  var Hello,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  module.exports = function(locale) {
    return new Hello(locale);
  };

  Hello = (function() {
    function Hello(locale) {
      this.say = __bind(this.say, this);
      this.locale = locale;
    }

    Hello.prototype.say = function(to) {
      if (to == null) {
        to = this.locale === 'ja' ? '名無し' : 'John Doe';
      }
      if (this.locale === 'ja') {
        return "こんにちわ、" + to + "さん！";
      } else {
        return "Hello " + to + "!";
      }
    };

    return Hello;

  })();

}).call(this);
