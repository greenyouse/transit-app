# Transit App

An application for navigating the train system in the Twin Cities. Built
for Udacity's Senior Web Developer Nanodegree.

## Try It Out

There's a live version [hosted here](https://greenyouse.github.io/transit-app).

The live version mostly works except that the `Next Departures` part
can't fetch data from Metro Transit since they're not using
HTTPS. Everything else should work well though.

To see the `Next Departures` section try using the `gh-pages` branch
with a local web server.

```sh
git clone https://github.com/greenyouse/transit-app
cd transit-app
git checkout gh-pages
python -m SimpleHTTPServer
```
