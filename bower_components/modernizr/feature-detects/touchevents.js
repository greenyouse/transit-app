define(["Modernizr","prefixes","testStyles"],function(o,e,n){o.addTest("touchevents",function(){var o;if("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)o=!0;else{var t=["@media (",e.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");n(t,function(e){o=9===e.offsetTop})}return o})});