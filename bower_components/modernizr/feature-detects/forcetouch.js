define(["Modernizr","hasEvent","prefixed"],function(e,n,o){e.addTest("forcetouch",function(){return!!n(o("mouseforcewillbegin",window,!1),window)&&(MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN&&MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN)})});