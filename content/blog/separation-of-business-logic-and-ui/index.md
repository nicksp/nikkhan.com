---
title: Separation of Business Logic and User Interface (UI)
date: '2020-04-03'
tags:
  - architecture
  - react
  - code structure
---

Things I'm gonna talk about below can be applied to any systems, guidelines can be applied to any programming language, but some practical tips I'll share in the end will pretty much tie to frontend frameworks like React, Vue, Angular, etc.

The goal to pursue when you write software is to write software that is easy to maintain, test, and enhance in the future. We can do this by organizing code so that things that might change will be easier to change.

When we speak about _separation of UI and Logic_, we usually mean _**avoidance of tight coupling**_. Coupling business logic with UI is a violation of the [_Single Responsibility Principle_](https://en.wikipedia.org/wiki/Single-responsibility_principle). Every time we change these UI elements, we have a risk of potential changes in our business logic. In other words, our logic depends on UI. The desired goal is achieving a **loose coupling**, when two parties involved play disctinct _client_ and _server_ roles, where the client knows the server, but the server does not know the client.

In the case of UI and BL, the best way or arranging connections could be by treating the logic as a _server_, and the UI as a _client_. So, the UI is built for the logic, has knowledge of the logic, and invokes the logic. The logic, on the other hand, knows nothing about the UI (it can potentially be a CLI interface), and simply responds to the requests it receives. The fact these requests may come from UI is unknown to the domain logic.

To put it in more practical terms, nowhere within the source code files of the logic should you find any import statements that refer to UI files, while the source code files of the UI (e.g. React components) might be full of import statements that refer to domain logic files.

The end goal of such a system separation is it should make it possible to plug as many different UIs as you need to the logic, and the whole thing should still work.

You should tend to write your business logic in plain JavaScript. It can be _Plain Old JavaScript Objects_ or simply functions. POJOs / functions are purely focused on their domain. They should have little to none dependencies on frameworks (or any other 3rd party solutions). Hence, they are conceptually simpler and easier to test. Import and use that logic from your Angular services / React/Vue components / etc., such that Angular services, React components, etc. are just acting as a dumb wrapper around your business logic. Make sure _there is no other reason for critical parts of the software to change except for a change in the business rules_.

Another reason that we want to extract business logic is so we can test its use cases in complete isolation. By keeping it entangled with the UI logic, to test them we'd have to create and mount a related React (whatever) component, but we should be able to just call domain object functions and check the result effortlessly.

A nice side effect separating business logic from component UI logic brings is we can now easily track which functions use which values and which props are needed. That also forces us to pass arguments through, which in turn helps clarify the API of components and help us think about what data the function really needs.

If you are looking for some sort of working example, feel free to check out [this project](https://codesandbox.io/s/react-separate-business-logic-from-ui-1kwsd).

## Additional Reading

- [React, Vue, and Business Logic (Feb 7 2020)](https://medium.com/javascript-in-plain-english/react-vue-and-business-logic-19df105698a2)
- [Robert’s Rules of Coders: #5 Organize Your Code (Aug 30 2015)](https://csharpdeveloper.wordpress.com/2015/08/30/roberts-rules-of-coders-5-organize-your-code/)
- [Robert’s Rules of Coders: #11 Separate User Interface Logic From Business Logic (11 Jul 2016)](https://csharpdeveloper.wordpress.com/2016/07/10/roberts-rules-of-coders-11-separate-ui-code-from-business-logic/)
