(function(document) {
  'use strict';

  var app = document.querySelector("#app");

  // offline detection with event handlers for monitoring the network state
  app.online = function() {
    var ua = navigator.userAgent,
        mozExpr =  /rv:([^\)]+)\) Gecko\/\d{8}/;

    if (!mozExpr.test(ua))
      return navigator.onLine;

    // navigator.onLine doesn't really work in FF so we'll test the network instead
    // inspired by: https://developer.mozilla.org/en-US/Apps/Fundamentals/Offline
    var req = new window.XMLHttpRequest({mozSystem: true});
    req.open('HEAD', 'https://developer.cdn.mozilla.net/static/img/favicon32.e02854fdcf73.png');
    req.timeout = 3000;

    req.addEventListener('load', function() {
      app.online = true;
    });

    req.addEventListener('error', function() {
      app.online = false;
    });

    req.addEventListener('timeout', function() {
      app.online = false;
    });

    req.send(null);
  }();

  window.addEventListener('online', function() {
    app.online = true;
  });

  window.addEventListener('offline', function() {
    app.online = false;
  });

  /**
   * Metro Transit data for relevant stations. Scraped from their GTFS file and route data API.
   * Northstar and Blue line routes are North/South, while Green line is East/West.
   */
  app.stations =
    [
      {id: 56037, title: "Fairview Ave Station", direction: "W", latitude: 44.95632, longitude: -93.178405, route: "green", position: 12},
      {id: 56007, title: "Fairview Ave Station", direction: "E", latitude: 44.956235, longitude: -93.178463, route: "green", position: 12},
      {id: 56011, title: "Victoria St Station", direction: "E", latitude: 44.955695, longitude: -93.136305, route: "green", position: 8},
      {id: 56033, title: "Victoria St Station", direction: "W", latitude: 44.955774, longitude: -93.13668, route: "green", position: 16},
      {id: 51405, title: "MOA Transit Station", direction: "S", latitude: 44.854287, longitude: -93.238861, route: "blue", position: 19},
      {id: 51405, title: "MOA Transit Station", direction: "N", latitude: 44.854287, longitude: -93.238861, route: "blue", position: 1},
      {id: 55994, title: "Target Field Station Platform 1", direction: "W", latitude: 44.983099, longitude: -93.277372, route: "green", position: 1},
      {id: 55994, title: "Target Field Station Platform 1", direction: "S", latitude: 44.983099, longitude: -93.277372, route: "blue", position: 1},
      {id: 55997, title: "Target Field Station Platform 1", direction: "E", latitude: 44.982995, longitude: -93.277364, route: "green", position: 23},
      {id: 55997, title: "Target Field Station Platform 1", direction: "N", latitude: 44.982995, longitude: -93.277364, route: "blue", position: 19},
      {id: 56036, title: "Snelling Ave Station", direction: "W", latitude: 44.955708, longitude: -93.167232, route: "green", position: 13},
      {id: 56008, title: "Snelling Ave Station", direction: "E", latitude: 44.955663, longitude: -93.166721, route: "green", position: 11},
      {id: 53344, title: "Coon Rapids Riverdale Station & Platform", direction: "N", latitude: 45.191261, longitude: -93.351718, route: "northstar", position: 3},
      {id: 53351, title: "Coon Rapids Riverdale Station & Platform", direction: "S", latitude: 45.191134, longitude: -93.351833, route: "northstar", position: 5},
      {id: 56002, title: "East Bank Station", direction: "E", latitude: 44.973654, longitude: -93.231177, route: "green", position: 17},
      {id: 56042, title: "East Bank Station", direction: "W", latitude: 44.97366, longitude: -93.231045, route: "green", position: 7},
      {id: 51418, title: "Fort Snelling Station", direction: "S", latitude: 44.893204, longitude: -93.198093, route: "blue", position: 13},
      {id: 51433, title: "Fort Snelling Station", direction: "N", latitude: 44.893534, longitude: -93.197948, route: "blue", position: 7},
      {id: 51413, title: "Lake St / Midtown Station", direction: "S", latitude: 44.948367, longitude: -93.238911, route: "blue", position: 8},
      {id: 51428, title: "Lake St / Midtown Station", direction: "N", latitude: 44.948365, longitude: -93.238837, route: "blue", position: 12},
      {id: 56013, title: "Western Ave Station", direction: "E", latitude: 44.955725, longitude: -93.11596, route: "green", position: 6},
      {id: 56031, title: "Western Ave Station", direction: "W", latitude: 44.955837, longitude: -93.116366, route: "green", position: 18},
      {id: 56009, title: "Hamline Ave Station", direction: "E", latitude: 44.955671, longitude: -93.156624, route: "green", position: 10},
      {id: 56035, title: "Hamline Ave Station", direction: "W", latitude: 44.955748, longitude: -93.157049, route: "green", position: 14},
      {id: 55995, title: "Target Field Station Platform 2", direction: "W", latitude: 44.983868, longitude: -93.279332, route: "green", position: 24},
      {id: 55996, title: "Target Field Station Platform 2", direction: "N", latitude: 44.983827, longitude: -93.279371, route: "blue", position: 20},
      {id: 17874, title: "Warehouse Hennepin Ave Station", direction: "E", latitude: 44.980015, longitude: -93.273136, route: "green", position: 22},
      {id: 17874, title: "Warehouse Hennepin Ave Station", direction: "S", latitude: 44.980015, longitude: -93.273136, route: "blue", position: 2},
      {id: 17875, title: "Warehouse Hennepin Ave Station", direction: "W", latitude: 44.980149, longitude: -93.273145, route: "green", position: 2},
      {id: 17875, title: "Warehouse Hennepin Ave Station", direction: "N", latitude: 44.980149, longitude: -93.273145, route: "blue", position: 18},
      {id: 51411, title: "Cedar Riverside Station", direction: "S", latitude: 44.968289, longitude: -93.250968, route: "blue", position: 6},
      {id: 51426, title: "Cedar Riverside Station", direction: "N", latitude: 44.968495, longitude: -93.251065, route: "blue", position: 14},
      {id: 51417, title: "VA Medical Center Station", direction: "S", latitude: 44.902638, longitude: -93.202214, route: "blue", position: 12},
      {id: 51432, title: "VA Medical Center Station", direction: "N", latitude: 44.902984, longitude: -93.202324, route: "blue", position: 8},
      {id: 51412, title: "Franklin Ave Station", direction: "S", latitude: 44.962612, longitude: -93.247074, route: "blue", position: 7},
      {id: 51427, title: "Franklin Ave Station", direction: "N", latitude: 44.962443, longitude: -93.246923, route: "blue", position: 13},
      {id: 51419, title: "Terminal 1 Lindbergh Station", direction: "S", latitude: 44.880732, longitude: -93.205067, route: "blue", position: 14},
      {id: 51434, title: "Terminal 1 Lindbergh Station", direction: "N", latitude: 44.880732, longitude: -93.204932, route: "blue", position: 6},
      {id: 56015, title: "Robert St Station", direction: "E", latitude: 44.954041, longitude: -93.097459, route: "green", position: 4},
      {id: 56029, title: "Robert St Station", direction: "W", latitude: 44.954168, longitude: -93.097548, route: "green", position: 20},
      {id: 53279, title: "American Blvd 34th Ave Station", direction: "S", latitude: 44.858305, longitude: -93.22323, route: "blue", position: 16},
      {id: 53280, title: "American Blvd 34th Ave Station", direction: "N", latitude: 44.859151, longitude: -93.223072, route: "blue", position: 4},
      {id: 51429, title: "38th St Station", direction: "N", latitude: 44.934857, longitude: -93.229545, route: "blue", position: 11},
      {id: 51414, title: "38th St Station", direction: "S", latitude: 44.934613, longitude: -93.229421, route: "blue", position: 9},
      {id: 56016, title: "10th St Station", direction: "E", latitude: 44.950513, longitude: -93.097507, route: "green", position: 3},
      {id: 56028, title: "10th St Station", direction: "W", latitude: 44.950568, longitude: -93.097372, route: "green", position: 21},
      {id: 51421, title: "Bloomington Central Station", direction: "S", latitude: 44.856387, longitude: -93.226402, route: "blue", position: 17},
      {id: 51436, title: "Bloomington Central Station", direction: "N", latitude: 44.856371, longitude: -93.226163, route: "blue", position: 3},
      {id: 51422, title: "28th Ave Station", direction: "S", latitude: 44.855684, longitude: -93.231815, route: "blue", position: 18},
      {id: 51437, title: "28th Ave Station", direction: "N", latitude: 44.855775, longitude: -93.231638, route: "blue", position: 2},
      {id: 53347, title: "Big Lake Station & Platform", direction: "S", latitude: 45.329807, longitude: -93.729774, route: "northstar", position: 1},
      {id: 53347, title: "Big Lake Station & Platform", direction: "N", latitude: 45.329807, longitude: -93.729774, route: "northstar", position: 7},
      {id: 53345, title: "Anoka Station & Platform", direction: "N", latitude: 45.207876, longitude: -93.384132, route: "northstar", position: 4},
      {id: 53350, title: "Anoka Station & Platform", direction: "S", latitude: 45.207668, longitude: -93.384224, route: "northstar", position: 4},
      {id: 56004, title: "Prospect Park Station", direction: "E", latitude: 44.971591, longitude: -93.215328, route: "green", position: 15},
      {id: 56040, title: "Prospect Park Station", direction: "W", latitude: 44.971498, longitude: -93.21532, route: "green", position: 9},
      {id: 56018, title: "Union Depot Station", direction: "E", latitude: 44.948263, longitude: -93.086677, route: "green", position: 1},
      {id: 56026, title: "Union Depot Station", direction: "W", latitude: 44.948165, longitude: -93.086889, route: "green", position: 23},
      {id: 51415, title: "46th St Station", direction: "S", latitude: 44.920808, longitude: -93.220028, route: "blue", position: 10},
      {id: 51430, title: "46th St Station", direction: "N", latitude: 44.92083, longitude: -93.219815, route: "blue", position: 10},
      {id: 56097, title: "Ramsey Station & Platform", direction: "N", latitude: 45.231961, longitude: -93.461709, route: "northstar", position: 5},
      {id: 56098, title: "Ramsey Station & Platform", direction: "S", latitude: 45.231838, longitude: -93.46177, route: "northstar", position: 3},
      {id: 53346, title: "Elk River Station & Platform", direction: "N", latitude: 45.282553, longitude: -93.542079, route: "northstar", position: 6},
      {id: 53349, title: "Elk River Station & Platform", direction: "S", latitude: 45.282467, longitude: -93.54221, route: "northstar", position: 2},
      {id: 56010, title: "Lexington Pkwy Station", direction: "E", latitude: 44.95568, longitude: -93.146275, route: "green", position: 9},
      {id: 56034, title: "Lexington Pkwy Station", direction: "W", latitude: 44.955802, longitude: -93.146863, route: "green", position: 15},
      {id: 53342, title: "Target Field Rail Platform", direction: "N", latitude: 44.98332, longitude: -93.277014, route: "northstar", position: 1},
      {id: 53342, title: "Target Field Rail Platform", direction: "S", latitude: 44.98332, longitude: -93.277014, route: "northstar", position: 7},
      {id: 56014, title: "Capitol / Rice St Station", direction: "E", latitude: 44.955736, longitude: -93.105322, route: "green", position: 5},
      {id: 56030, title: "Capitol / Rice St Station", direction: "W", latitude: 44.955749, longitude: -93.105534, route: "green", position: 19},
      {id: 56038, title: "Raymond Ave Station", direction: "W", latitude: 44.963332, longitude: -93.195861, route: "green", position: 11},
      {id: 56006, title: "Raymond Ave Station", direction: "E", latitude: 44.963244, longitude: -93.195938, route: "green", position: 13},
      {id: 56043, title: "West Bank Station", direction: "W", latitude: 44.972101, longitude: -93.245573, route: "green", position: 6},
      {id: 56001, title: "West Bank Station", direction: "E", latitude: 44.972024, longitude: -93.245553, route: "green", position: 18},
      {id: 51409, title: "Government Plaza Station", direction: "N", latitude: 44.976778, longitude: -93.265861, route: "blue", position: 16},
      {id: 51409, title: "Government Plaza Station", direction: "S", latitude: 44.976778, longitude: -93.265861, route: "blue", position: 4},
      {id: 51409, title: "Government Plaza Station", direction: "E", latitude: 44.976778, longitude: -93.265861, route: "green", position: 20},
      {id: 51424, title: "Government Plaza Station", direction: "W", latitude: 44.976854, longitude: -93.265927, route: "green", position: 4},
      {id: 53343, title: "Fridley Station & Platform", direction: "N", latitude: 45.078653, longitude: -93.270868, route: "northstar", position: 2},
      {id: 53352, title: "Fridley Station & Platform", direction: "S", latitude: 45.078661, longitude: -93.271015, route: "northstar", position: 6},
      {id: 56027, title: "Central Station", direction: "W", latitude: 44.94607, longitude: -93.092202, route: "green", position: 22},
      {id: 56017, title: "Central Station", direction: "E", latitude: 44.946097, longitude: -93.092446, route: "green", position: 2},
      {id: 56219, title: "U.S. Bank Stadium Station", direction: "W", latitude: 44.975112, longitude: -93.259691, route: "green", position: 5},
      {id: 56219, title: "U.S. Bank Stadium Station", direction: "S", latitude: 44.975112, longitude: -93.259691, route: "blue", position: 5},
      {id: 56220, title: "U.S. Bank Stadium Station", direction: "E", latitude: 44.97496, longitude: -93.259671, route: "green", position: 19},
      {id: 56220, title: "U.S. Bank Stadium Station", direction: "N", latitude: 44.97496, longitude: -93.259671, route: "blue", position: 15},
      {id: 56003, title: "Stadium Village Station", direction: "E", latitude: 44.974831, longitude: -93.223114, route: "green", position: 16},
      {id: 56041, title: "Stadium Village Station", direction: "W", latitude: 44.974907, longitude: -93.223072, route: "green", position: 8},
      {id: 56012, title: "Dale St Station", direction: "E", latitude: 44.955682, longitude: -93.125945, route: "green", position: 7},
      {id: 56032, title: "Dale St Station", direction: "W", latitude: 44.955761, longitude: -93.126602, route: "green", position: 17},
      {id: 51423, title: "Nicollet Mall Station", direction: "W", latitude: 44.97859, longitude: -93.26999, route: "green", position: 3},
      {id: 51423, title: "Nicollet Mall Station", direction: "S", latitude: 44.97859, longitude: -93.26999, route: "blue", position: 3},
      {id: 51408, title: "Nicollet Mall Station", direction: "E", latitude: 44.978491, longitude: -93.269912, route: "green", position: 21},
      {id: 51408, title: "Nicollet Mall Station", direction: "N", latitude: 44.978491, longitude: -93.269912, route: "blue", position: 17},
      {id: 51420, title: "Terminal 2 Humphrey Station", direction: "S", latitude: 44.874125, longitude: -93.224133, route: "blue", position: 15},
      {id: 51435, title: "Terminal 2 Humphrey Station", direction: "N", latitude: 44.874259, longitude: -93.224184, route: "blue", position: 5},
      {id: 56005, title: "Westgate Station", direction: "E", latitude: 44.967372, longitude: -93.206256, route: "green", position: 14},
      {id: 56039, title: "Westgate Station", direction: "W", latitude: 44.967591, longitude: -93.206566, route: "green", position: 10},
      {id: 51416, title: "50th St - Minnehaha Station", direction: "S", latitude: 44.91246, longitude: -93.2103, route: "blue", position: 11},
      {id: 51431, title: "50th St - Minnehaha Station", direction: "N", latitude: 44.912485, longitude: -93.21016, route: "blue", position: 9}
    ];

  // generate station names without any duplicates
  app.listStations = function(stations) {
    var titles = stations.map(s => {
      return s.title;
    });

    titles = new Set(titles);

    // sort function from http://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript
    return Array.from(titles).sort(function(a, b){
      var nameA=a.toLowerCase(),
          nameB=b.toLowerCase();
      if (nameA < nameB) //sort string ascending
        return -1;
      if (nameA > nameB)
        return 1;
      return 0; //default return value (no sorting)
    });
  };

  app.stationNames = app.listStations(app.stations);

})(document);
