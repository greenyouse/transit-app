define(["Modernizr","prefixed"],function(a,e){a.addTest("batteryapi",!!e("battery",navigator),{aliases:["battery-api"]})});