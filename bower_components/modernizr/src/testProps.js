define(["contains","mStyle","createElement","nativeTestProps","is","cssToDOM"],function(e,t,n,i,r,f){function d(d,l,s,o){function u(){m&&(delete t.style,delete t.modElem)}if(o=!r(o,"undefined")&&o,!r(s,"undefined")){var y=i(d,s);if(!r(y,"undefined"))return y}for(var m,c,a,p,v,E=["modernizr","tspan"];!t.style;)m=!0,t.modElem=n(E.shift()),t.style=t.modElem.style;for(a=d.length,c=0;c<a;c++)if(p=d[c],v=t.style[p],e(p,"-")&&(p=f(p)),void 0!==t.style[p]){if(o||r(s,"undefined"))return u(),"pfx"!=l||p;try{t.style[p]=s}catch(e){}if(t.style[p]!=v)return u(),"pfx"!=l||p}return u(),!1}return d});