function metadata(e){var r=[];return file.walkSync(viewRoot,function(e,a,n){n.forEach(function(a){if(".DS_Store"!==a){var n,s=fs.readFileSync(e+"/"+a,"utf8"),t=/\/\*\!([\s\S]*)\!\*\//m,o=s.match(t),l=/\/\*\sDOC([\s\S]*?)\*\//m,i=s.match(l),c=/define\((\[[^\]]*\]),/,f=s.match(c);if(o&&o[1])try{n=JSON.parse(o[1])}catch(e){throw new Error("Error Parsing Metadata: "+a+"\nInput: `"+o[1]+"`")}else n={};var p=null;i&&i[1]&&(p=marked(i[1].trim())),n.doc=p;var d,u=[];if(!f||!f[1])throw new Error("Couldn't find the define for `"+a+"`");try{d=JSON.parse(f[1].replace(/'/g,'"'))}catch(e){throw new Error("Couldn't parse dependencies for `"+a+"`:\n`"+f[1]+"\n`")}d.forEach(function(e){"Modernizr"!==e&&u.push(e)}),n.deps=u;var h=__dirname.replace(/lib$/,"");n.path="./"+(e+"/"+a).replace(h,"").replace(/\\/g,"/"),n.amdPath=n.path.replace(/^\.\/feature\-detects/,"test").replace(/\.js$/i,""),n.name||(n.name=n.amdPath);var m=[];n.polyfills&&n.polyfills.length&&n.polyfills.forEach(function(e){if(!polyfills[e])throw new Error(n.name+": Polyfill not found in `"+a+"`: "+e);m.push(polyfills[e])}),n.polyfills=m,n.async||(n.async=!1),n.notes||(n.notes=[]),n.warnings||(n.warnings=[]),n.caniuse||(n.caniuse=null),!n.cssclass&&n.property?n.cssclass=n.property:n.cssclass=null,!n.doc&&n.docs&&(n.doc=n.docs,delete n.docs),n.tags||(n.tags=[]),n.authors||(n.authors=[]),n.knownBugs||(n.knownBugs=[]),r.push(n)}})}),e&&"function"==typeof e?e(r):r}var fs=require("fs"),file=require("file"),marked=require("marked"),polyfills=require("./polyfills.json"),viewRoot=fs.realpathSync(__dirname+"/../feature-detects");module.exports=metadata;