define(["Modernizr","testStyles"],function(i,t){i.addTest("mathml",function(){var i;return t("#modernizr{position:absolute;display:inline-block}",function(t){t.innerHTML+="<math><mfrac><mi>xx</mi><mi>yy</mi></mfrac></math>",i=t.offsetHeight>t.offsetWidth}),i})});