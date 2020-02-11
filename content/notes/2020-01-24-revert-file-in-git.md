---
title: Revert a Single File in Git
date: '2020-01-24'
tags:
  - git
---

Revert a single file to its previous status.

**the file isn’t committed yet:**

```sh
git checkout filename
```

**the file is already committed:**

_filename_ is the path to the target file, _hash_ is the hash of the commit you want to switch to.

```sh
git checkout hash filename

# or

git reset hash filename
```

If there are changes across several commits to a file we can use a branch too instead of a hash:

```sh
git checkout master -- filename
```
