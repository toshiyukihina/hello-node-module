# Hello Node.js Modeule


Practice for creating node.js module. 
This module provides meaning-less feature which outputs hello message.

# Example

```
var hello = require('hello');
	
hello('en').say('Tom');  // => 'Hello, Tom!'
hello('ja').say('やまだ');  // => 'こんにちわ、やまださん！'

hello('en').say();  // => 'Hello, John Doe!'
hello('ja').say();  // => 'こんにちわ、名無しさん！'

hello('???').say(); // => 'Hello, John Doe!'
hello().say();      // => 'Hello, John Doe!'
```

# Methods

## .say(name)

Say hello message in given locale.

# License

MIT