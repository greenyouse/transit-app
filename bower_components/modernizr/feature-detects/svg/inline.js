define(["Modernizr","createElement"],function(e,n){e.addTest("inlinesvg",function(){var e=n("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)})});