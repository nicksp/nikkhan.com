---
title: Promise Usage Tips
date: '2020-03-31'
tags:
  - es6
  - javascript
  - promises
---

Just some personal observations while working extensively with asynchronous code and [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) in particular.

1. In a promise `then()` function, returned values are automatically resolved, and `throw`'s are automatically rejected.

1. One extremely common anti-pattern I see from JavaScript developers is the misuse of `Promise.reject(...)`. When using `async/await` promise rejection is analogous to throwing an exception, which should not be used for business logic. A good rule of thumb is to `throw` or `reject` only when assumptions made by your business logic have not been met, eg. null parameters and such.

1. `async/await` is just a layer on top of promises. Adding `async` to a function that doesn’t need it (e.g. it doesn’t call `await` inside) will add a wasteful promise wrapper and a next-tick operation. This is because a promise always resolves on a next-tick and `async` methods always return a promise.
