# Transit App

An application for navigating the train system in the Twin Cities. Built
for Udacity's Senior Web Developer Nanodegree.

## Try It Out

There's a live version [hosted here](https://greenyouse.github.io/transit-app).

The live version mostly works except that the `Next Departures` part
can't fetch data from Metro Transit since they're not using
HTTPS. Everything else should work well though.

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
