define(["Modernizr"],function(n){n.addTest("blobconstructor",function(){try{return!!new Blob}catch(n){return!1}},{aliases:["blob-constructor"]})});