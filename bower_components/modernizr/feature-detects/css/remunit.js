define(["Modernizr","createElement"],function(e,t){e.addTest("cssremunit",function(){var e=t("a").style;try{e.fontSize="3rem"}catch(n){}return/rem/.test(e.fontSize)})});