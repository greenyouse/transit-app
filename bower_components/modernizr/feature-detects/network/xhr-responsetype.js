define(["Modernizr"],function(e){e.addTest("xhrresponsetype",function(){if("undefined"==typeof XMLHttpRequest)return!1;var e=new XMLHttpRequest;return e.open("get","/",!0),"response"in e}())});