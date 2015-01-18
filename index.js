var hello = module.exports = function(locale) {
  return new Hello(locale);
};

function Hello(locale) {
  this.locale = locale;
}

Hello.prototype.say = function() {
  var greeting = '';

  switch (this.locale) {
  case 'ja':
    greeting = 'こんにちわ！';
    break;
  case 'en': // fall through
  default:
    greeting = 'Hello!';
    break;
  }
  
  return greeting;
};
