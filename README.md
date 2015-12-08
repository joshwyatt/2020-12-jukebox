# Jukebox

> Learn how React works by implementing a Jukebox web application with it.

## Table of Contents

1. [Introduction](#introduction)
1. [Environment](#environment)
  1. [Requirements](#requirements)
  1. [Installing Dependencies](#installing-dependencies)
1. [Objectives](#objectives)
  1. [Basic Requirements](#basic-requirements)
  1. [Extra Credit](#extra-credit)
  1. [Nightare Mode](#nightmare-mode)
1. [Getting Help](#getting-help)
1. [Extra Resources](#extra-resources)
1. [Contributing](#contributing)

## Introduction

## What is ReactJS?

> ReactJS is not a full stack MVC solution and it doesn't claim to be. React is the V in MVC, which means as a developer
you are in charge of finding and/or implementing your own M and C. React's claim to fame is an ultra performant virtual
DOM that understands when the real DOM needs to be updated (and when it doesn't!).

### What are we doing?

Your mission is to create a Jukebox web application utilizing ReactJS components.
To get a solid understanding of what problems React solves (and does not solve),
you should avoid using Flux until you get to the extra credit section. You can
use any other utility libraries you'd like (i.e. lodash, bluebird).

Evaluate the web application as a whole, and then break it down into smaller 
components. Then break those components down, again and again until you feel
you've created a solid View Component that doesn't try to "do to many things"
but is also not completely useless.

CSS is your friend, or at least will become friendlier as you master it. Put
your skills to the test and focus on making the application beautiful AND 
functional.

### What's in the Repo already?

A bare-bones web application that you will flesh out with React components
to create your very own Jukebox web application. Dependencies can be installed
via bower and are already linked from the index.html.

## Environment

### Requirements

  - Node 0.10.x
  - Bower

### Installing Dependencies

```bash
npm install -g bower
npm install
bower install
```

### Installing Development Dependencies

Jukebox has some nice features that allow developers to work more efficiently.
To install the development dependencies run:

```bash
npm install -g nodemon
```

### Running the Application

Like many node applications, Jukebox can be started with `npm start`. If you
are doing development on the application, you should instead run `npm run dev`.
This development command starts the application with nodemon, which automatically
restarts the server anytime a file is changed.

## Objectives

  1. Distinguish front-to-back vs back-to-front development.
  1. Understand React's data flow and View layer solution.
  1. Learn about React component's life cycles.
  1. Get a better CSS foundation

### Basic Requirements

We need an application that allows users to search for, queue up, and play music. You'll notice that
these requirements are not step by step and left open to interpretation. That's done on purpose! We
want to see how granular you decide to make your React components and whether you find ways to
reuse any of them. Have fun!

  - [ ] Design your user interface and user experience (a quick hand sketch is recommended).
  - [ ] The application should utilize Sound Cloud for finding music. 
  - [ ] Users should be able to select songs from the search results to add to their current playlist. 
  - [ ] The application should be able to play the user's playlist.

### Extra Credit

  - [ ] Implement a full playback control panel (seek, next, previous, loop, etc...)
  - [ ] The application should autoplay the next song when the current song ends.

### Nightmare Mode:

  - [ ] Add CSS animations and transitions to UI components.
  - [ ] Add audio visualizations

## Getting Help

  - React Docs: https://facebook.github.io/react/docs/getting-started.html
  - **Halp** at [remote-bookstrap.hackreactor.com/help]

## Extra Resources

  - Some Best Practices: http://blog.siftscience.com/blog/2015/best-practices-for-building-large-react-applications
  - React's Diffing: http://calendar.perfplanet.com/2013/diff/
  - React/Angular Performance: http://blog.500tech.com/is-reactjs-fast/
  - Discussion on React's License: https://news.ycombinator.com/item?id=8985541

## Contributing

This repository uses [semantic versioning][].
See CONTRIBUTING.md for contribution guidelines.

## License

Copyright 2014, Hack Reactor. All rights reserved. Unauthorized distribution of
any code contained herein is prohibited.

[node-inspector]: https://github.com/node-inspector/node-inspector
[semantic versioning]: http://semver.org/spec/v2.0.0.html
[CONTRIBUTING.md]: CONTRIBUTING.md
[remote-bookstrap.hackreactor.com/help]: http://remote-bookstrap.hackreactor.com/help

