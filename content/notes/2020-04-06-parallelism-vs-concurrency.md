---
title: Parallelism vs. Concurrency
date: '2020-04-06'
tags:
  - engineering concepts
---

I noticed developers often confuse both terms, so I thought I'd clarify then and keep as a quick reference for myself.

**Parallelism** is about _doing_ lot of things at once. This requires CPU has `> 1` cores so we can run multiple threads in parallel to speed up our program.

**Concurrency** is about _dealing_ with lot of things at once. Typically, concurrency is applied when:

1. we have a shared resource that 2 threads need to access or update
1. there are multiple threads that need to coordinate

Parallelism and concurrency usually go hand in hand, like in the following scenario:

- split the sequantial flow into independent components
- use threads or threadpools to parallelize these components (& thus to speed up)
- whenever shared resource is to be updated or accessed, or whenever multiple threads want to coordinate with each other, we use concurrency tools to ensure the program runs correctly.
