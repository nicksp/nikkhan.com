---
title: Clean Coding and Refactoring
date: '2019-11-18'
---

There are two unbreakable rules to become the best programmer you can be:

1. The first golden rule is: aim to write clean code first time
1. The second golden rule is: learn to change the structure of your code without changing its external behavior (refactoring).

## Common Code Smells

### Poor Names

Follow consistent naming conventions and choose identifiers names that are:

- not too short, not too long
- meaningful
- reveal intention
- chosen from the problem domain you're working on

### Poor Function Signatures

Sometimes functions logic is dependant on a boolean param. Typically, not always, boolean flags in functions are code smells because usually, depending on if they're set to `true` or `false`, that function will be doing different things. And the more boolean parameters we have in a function, the more complex that function becomes. There will be so many different execution paths depending on various combinations of these boolean flags. So, try to avoid them as much as you can.

When writing function **always** triple check:

- the return type
- the name of the function
- the parameters

and make sure all these 3 elements are logically related.

### Long Parameter List

The more parameters we have for the function the harder it gets to understand that function and its intention.

```js
checkNotifications(null, 1, true, false, Date.now())
```

Limit the number of function parameters to 3.

### Variable Declarations at the Top

Declare variables close to their usage to prevent mental disconnect.

### Magic Numbers

Magic numbers make code hard to read, hard to understand and hard to change. And this is smth. we should avoid at all times. Either extract them into a constant or use enums (in case of TypeScript or Flow).

### Nested Conditionals

```js
if (a) {
  if (b) {
    if (c) {
      ...
    } else {
      ...
    }
  }
}
```

The problem with nested conditionals is they make programs hard to read, hard to change, hard to understand and hard to test. The more nested conditionals we have, the more execution paths we have. We can use some techniques to simplify conditional statements.

#### Use Ternary Operator

```js
// bad
if (customer.totalOrders > 50) {
  discount = 0.1
} else {
  discount = 0.01
}

// good
discount = customer.totalOrders > 50 ? 0.1 : 0.01
```

Do not abuse ternary operator and avoid nested ones.

#### Simplify true/false

```js
// bad
if (customer.totalOrders > 50) {
  isGoldCustomer = true
} else {
  isGoldCustomer = false
}

// good
isGoldCustomer = customer.totalOrders > 50
```

#### Combine

```js
// bad
if (a) {
  if (b) {
    statement
  }
}

// good
if (a && b) {
  statement
}
```

#### Early Exit

Get rid of nested levels.

```js
// bad
if (a) {
  if (b) {
    statement
  }
}

// good
if (!a) {
  return
}

if (!b) {
  return
}

statement

// even better: early exit + combine
if (!a || !b) {
  return
}

statement
```

#### Swap Orders

```js
// bad
if (a) {
  if (b) {
    isValid = true
  }
}

if (c) {
  if (b) {
    isValid = true
  }
}

// good: reduced 4 if statements to 3
if (b) {
  if (a) {
    isValid = true
  }

  if (c) {
    isValid = true
  }
}

// better: combine technique
if (b) {
  if (a || c) {
    isValid = true
  }
}

// even better: combine again (reduced to 1 if statement)
if (b && (a || c)) {
  isValid = true
}

// much better: simplify true/false
isValid = b && (a || c)
```

Simplify conditionals so that others understand it. Try to make code expressive and readable.

### Duplicated Code

Whenever you see duplicated code, remember the [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) (Don't Repeat Yourself) principle. Move the duplicated code into one place and then see if where you move the function is the right place. If not, feel free to move it around.

### Comments

Comments that state the obvious just create noise in the code and are redundant. The code should be self-explanatory, so it doesn't need any comments.

Also, do not write comments that represent version history, they are completely useless and we can always use version control system.

```js
// Prior to v1.3
if (isActive) {}

// 2 Jan 2000 - John Smith: ...
// 4 Jun 2002 - Andy Graham: ...
...
...
class WorkScheduleer {}
```

No need to keep dead code commented out. If you don't need it, just delete it. You can always pull it back from the source code repository.

As a rule of thumbs, if you write a comment, make sure to explain "Whys" and "Hows", not "Whats" (the obvious). The code itself should be self-descriptive that doesn't need any comments to explain what it's doing.

### Long Functions

A long function is one that is more than ~10-15 LOC.

Problems with long functions:

- hard to understand
- hard to change
- hard to re-use

#### Cohesion Principle

- Things that are related, should be together.
- Things that are not related, should not be together.

This principle is applicable at both the Class and the Function/Method levels.

#### Single Responsibility Principle

- A class/function/method should do only one thing, and do it very well.

In summary, functions should be short and concise and should do only one thing.
