---
title: Git Cheatsheet
date: '2020-04-03'
tags:
  - git
---

This cheatsheet is based on the excellent video here https://www.youtube.com/watch?v=jtEthlTz1Q0

## Terminology

- `Working Tree` (aka _Working Directory_) — files that you are currently working on
- `Index` (aka _Staging Area_) — staged files to be committed later
- `HEAD` — current branch or last committed state on current branch

## Basics

```bash
git init
git status
git add file1 file 2 # adds or updates files from the working tree into your index
git commit -m "Add new files"
git commit -a # stages changes and commits the current contents of you working tree in one step
```

## Reset

- **Soft**: move HEAD
- **Mixed** (default): move HEAD and update the index
- **Hard** (can cause data loss!): move HEAD, update the index and Working Tree

```bash
git reset --soft HEAD~1
git reset HEAD~1
git reset --hard HEAD~1
```

## Stash

```bash
git stash -u
git stash save -u 'Description'
git stash list
git stash show
git stash show stash@{0}
git stash pop
git stash apply
git stash branch new-branch-name stash@{0}
```

## Reflog

```bash
git log
git reflog
git reset --hard commit_hash
get checkout -b new-branch-name commit_hash
git reflog show feature-ranch
git reflog show master@{1.week.ago}
```

## Interactive rebase

```bash
git rebase -i HEAD~8
```

## Blame

```bash
git blame lib/index.js
git show commit_hash
```

## Aliases

```bash
# Soft reset: git undo
git config --global alias.undo 'reset --soft HEAD~1'

# Mixed reset: git unstage [file1]
git config --global alias.unstage 'reset HEAD --'
```
