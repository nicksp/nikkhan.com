---
title: Shallow Comparison 101
date: '2020-04-15'
tags:
  - engineering concepts
  - react
---

The notes below are in the context of [React](https://reactjs.org/) (`shouldComponentUpdate` in particular) but the underlying idea is the same everywhere. When comparing previous props and state to next, a shallow comparison will check that primitives have the same value (eg, `1` equals `1` or that `true` equals `true`) and that the references are the same between more complex JavaScript values like objects and arrays.

## Never MUTATE

You’ve probably been hearing not to mutate objects and arrays in props and state. If you were to mutate objects in a parent component, your “pure” child components wouldn’t update. Although the values have changed upstream, the child would be comparing the reference to the previous props and not detect a difference.

Instead, return new objects when you make a change by either leveraging ES6 for object and array spreading or using a library to enforce immutability.
