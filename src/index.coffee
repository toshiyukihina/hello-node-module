module.exports = (locale) ->
  new Hello(locale)

class Hello
  constructor: (locale) ->
    @locale = locale

  say: (to) =>
    to ?= if @locale is 'ja' then '名無し' else 'John Doe'
    if @locale is 'ja' then "こんにちわ、#{to}さん！" else "Hello #{to}!"
