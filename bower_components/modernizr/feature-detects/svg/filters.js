define(["Modernizr"],function(n){n.addTest("svgfilters",function(){var n=!1;try{n="SVGFEColorMatrixElement"in window&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(n){}return n})});