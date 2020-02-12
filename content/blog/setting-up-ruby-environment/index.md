---
title: Setting Up a Ruby Environment on MacOS 10.14 Mojave
date: '2020-02-13'
---

I am on a journey to pick up Ruby knowledge, play around with its OOP capabilities, wire up a couple of test projects and eventually gain a missing skill to re-enter the workforce. Truth be told, I have no prior knowledge of the language. I intend to comprehend language philosophy, approaches, and its strengths so I can apply newly acquired knowledge to my professional daily work.

The first step in the process is setting up the environment. I thought I'd document the commands I used for future reference and to help others with the same needs.

## MacOS 10.14 Mojave Ruby Environment

Before we get started, let’s inspect the standard Ruby version that comes with this OS.

```shell
$ which ruby
/usr/bin/ruby

$ ruby -v
ruby 2.3.7p456 (2018-03-28 revision 63024) [universal.x86_64-darwin18]

$ which gem
/usr/bin/gem

$ gem -v
2.5.2.3

$ gem environment
RubyGems Environment:
  - RUBYGEMS VERSION: 2.5.2.3
  - RUBY VERSION: 2.3.7 (2018-03-28 patchlevel 456) [universal.x86_64-darwin18]
  - INSTALLATION DIRECTORY: /Library/Ruby/Gems/2.3.0
  - USER INSTALLATION DIRECTORY: /Users/nicksp/.gem/ruby/2.3.0
  - RUBY EXECUTABLE: /System/Library/Frameworks/Ruby.framework/Versions/2.3/usr/bin/ruby
  - EXECUTABLE DIRECTORY: /usr/local/bin
  - SPEC CACHE DIRECTORY: /Users/nicksp/.gem/specs
  - SYSTEM CONFIGURATION DIRECTORY: /Library/Ruby/Site
  - RUBYGEMS PLATFORMS:
    - ruby
    - universal-darwin-18
  - GEM PATHS:
     - /Library/Ruby/Gems/2.3.0
     - /Users/nicksp/.gem/ruby/2.3.0
     - /System/Library/Frameworks/Ruby.framework/Versions/2.3/usr/lib/ruby/gems/2.3.0
  - GEM CONFIGURATION:
     - :update_sources => true
     - :verbose => true
     - :backtrace => false
     - :bulk_threshold => 1000
     - "gem" => "--no-document"
  - REMOTE SOURCES:
     - https://rubygems.org/
```

## Install Ruby Version Manager (RVM)

[RVM](https://rvm.io/) is a tool that allows us to work with multiple Ruby environments, including different interpreter versions and sets of gems.

Install with the following command:

```shell
$ \curl -sSL https://get.rvm.io | bash -s stable
```

The installation script will output useful messages, explaining exactly what it is doing and offering hints about what to do after installation is complete. The one critical thing to do is source the rvm script, so that the command is available in the shell. I keep this in my [dotfiles](https://github.com/nicksp/dotfiles), so it's always available.

## Install Ruby

Now, when RVM is installed, let's proceed with installing local versions of [Ruby](https://www.ruby-lang.org). To minimize differences, I first install the same version of Ruby shipped with the OS. RVM makes it easy to install and switch to newer version later.

```shell
$ rvm install 2.3.7
$ rvm use 2.3.7
```

Now, the version of Ruby in use is completely isolated from the system.

```shell
$ which ruby
/Users/nicksp/.rvm/rubies/ruby-2.3.7/bin/ruby

$ which gem
/Users/nicksp/.rvm/rubies/ruby-2.3.7/bin/gem
```

## Conclusion

RVM is now installed, and can be used to manage multiple Ruby environments. Additionally, [gemsets](https://rvm.io/gemsets) can be used to manage which sets of gems are available in each environment. This is a much cleaner and more flexible way to manage a Ruby development system.
