define(["Modernizr","createElement","addTest"],function(A,e,s){A.addAsyncTest(function(){var A,i,t,n=e("img"),a="sizes"in n;!a&&"srcset"in n?(i="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",A="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",t=function(){s("sizes",2==n.width)},n.onload=t,n.onerror=t,n.setAttribute("sizes","9px"),n.srcset=A+" 1w,"+i+" 8w",n.src=A):s("sizes",a)})});