---
title: Call a Dynamic Function with Dynamic Params
date: '2020-01-11'
tags:
  - js
  - rest params
---

Useful for wrapper APIs or communicating with external interfaces:
**Note:** This won't work in a _strict_ mode.

```js
function callFunction(fn, ...rest) {
  this[fn].apply(this, rest)
}
```

```js
callFunction('alert', 'Ping')
callFunction('setTimeout', () => alert('Timeout after 1s'), 1000)
```
