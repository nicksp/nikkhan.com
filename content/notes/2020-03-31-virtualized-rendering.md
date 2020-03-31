---
title: Concept of Virtualized Rendering
date: '2020-03-31'
tags:
  - virtualized
---

Libraries like [React Virtualized](https://github.com/bvaughn/react-virtualized) or [React Window](https://github.com/bvaughn/react-window) and alike are meant to solve one and specific problem usually associated with rendering large lists and tabular data. That is efficient data rendering without sacrificing user experience.

Those who deal with extensive data rendering might be familiar with these libraries and concepts behind them and might already be using them in their projects. For those who are kinda new, I'd love to share some quick notes of what it is and how it can benefit one.

Given tabular or list data fits well within a viewport (think CSS overflow), it is possible to render only the visible rows and skip rendering the rest. This technique is called _virtualization_.

The biggest constraint of virtualization is that you need a viewport of some sort. You could treat even the browser window as such. Often, however, you set up something more limited. A simple way to achieve this is to fix width/height of a container and set `overflow: auto` property through CSS. The data will then be displayed within the container.

The greatest advantage of virtualization is that it cuts down the amount of rendering substantially. Often viewports are somewhat limited. Instead of thousands of rows, you will end up rendering tens of rows at the worst case. That is a massive difference even if you skip performing `shouldComponentUpdate` per row. The need for that simply disappears.

## Additional Reading

- [React-Virtualized: Why, When and How you should use it (Sep 11, 2018)](https://blog.theodo.com/2018/09/use-react-virtualized/)
- [Rendering Lists Using React Virtualized (Dec 13, 2018)](https://css-tricks.com/rendering-lists-using-react-virtualized/)
- [Rendering large lists with React Virtualized (May 31, 2018)](https://blog.logrocket.com/rendering-large-lists-with-react-virtualized-82741907a6b3/)
