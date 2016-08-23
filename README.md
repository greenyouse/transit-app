# Transit App

An application for navigating the train system in the Twin Cities. Built
for Udacity's Senior Web Developer Nanodegree.


## Features

This is a
[Progressive Web App](https://en.wikipedia.org/wiki/Progressive_web_app)
and comes with many of the things you would expect to see from a PWA.

Here's an overview of some of the cool features in this app:

- an app shell architecture (for fast start-up times)
- a service worker for caching data and updating the app
- offline-first functionality
- responsive design
- HTTPS only
- easy to add to the home screen on mobile for an app-like feel


## Try It Out

There's a live version [hosted here](https://greenyouse.github.io/transit-app).

To run the app locally, first make sure you have
[polymer-cli](https://github.com/Polymer/polymer-cli):
```sh
npm install -g polymer-cli
```

Then clone and build the app:
```sh
git clone https://github.com/greenyouse/transit-app
cd transit-app
polymer build
```

Finally, serve up the app and view it at [localhost:8080](http://localhost:8080):
```sh
cd build/bundled
polymer serve
```
