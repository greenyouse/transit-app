define(["Modernizr","createElement"],function(e,t){e.addTest("cssremunit",function(){var e=t("a").style;try{e.fontSize="3rem"}catch(e){}return/rem/.test(e.fontSize)})});