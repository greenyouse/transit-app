define(["Modernizr","createElement","testStyles","isSVG"],function(n,e,i,t){n.addTest("unicode",function(){var n,d=e("span"),f=e("span");return i("#modernizr{font-family:Arial,sans;font-size:300em;}",function(e){d.innerHTML=t?"妇":"&#5987",f.innerHTML=t?"☆":"&#9734",e.appendChild(d),e.appendChild(f),n="offsetWidth"in d&&d.offsetWidth!==f.offsetWidth}),n})});