define(["Modernizr","createElement","test/canvas"],function(t,e){t.addTest("canvastext",function(){return t.canvas===!1?!1:"function"==typeof e("canvas").getContext("2d").fillText})});