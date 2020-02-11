---
title: Writing Template Strings in Markdown
date: '2020-01-30'
tags:
  - markdown
---

With template strings, the backtick (`` ` ``) means something in Markdown and in JavaScript. This:

```
To display a message, write `alert(`hello world!`)`.
```

will result in:

> To display a message, write `alert(`hello world!`)`.

To avoid this, we can leverage a little-known feature that’s been in Markdown from the beginning: you can use **multiple backticks** as code delimiters, like this:

```
To display a message, write ``alert(`hello world!`)``.
```

This will now render things correctly:

> To display a message, write `` alert(`hello world!`) ``.
