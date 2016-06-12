"use strict";function build(e,i,r){return function(n,a){var t,s={};n=n||{},a=a||function(){},_extend(s,baseRequireConfig),s.rawText={"modernizr-init":e(n)},n.minify?(t=i("compact",n),s.optimize="uglify2",s.uglify2={mangle:{except:["Modernizr"]},beautify:{ascii_only:!0}}):(t=i("full",n),s.optimize="none"),s.out=function(e){e=t+e,e=e.replace(/(,\s*)?define\("modernizr-(init|build)",\s*function\(\)\{\};?\)/g,""),e=e.replace(/__VERSION__/g,r.version),n&&n.classPrefix&&(e=e.replace(/(classPrefix'?\s?:\s?)['""']{2}(,)/,'$1"'+n.classPrefix.replace(/"/g,'\\"')+'"$2')),a(e)},requirejs.optimize(s)}}var inBrowser="function"==typeof define&&"object"==typeof define.amd,_extend=function(e,i){for(var r in i){var n=i[r];"[object Object]"===Object.prototype.toString.call(n)?(e[r]=e[r]||{},_extend(e[r],n)):e[r]=i[r]}},baseRequireConfig={optimize:"none",generateSourceMaps:!1,optimizeCss:"none",useStrict:!0,include:["modernizr-init"],fileExclusionRegExp:/^(.git|node_modules|modulizr|media|test)$/,wrap:{start:"\n;(function(window, document, undefined){",end:"})(window, document);"},onBuildWrite:function(e,i,r){return"uglify2"===this.optimize&&(r=r.replace(/\/\*\![\s\S]*\!\*\//m,"")),/define\(.*?\{/.test(r)?(r=r.replace(/define\(.*?\{/,""),r=r.replace(/\}\);\s*?$/,""),r.match(/Modernizr\.add(Async)?Test\(/)||(r=r.replace(/return.*[^return]*$/,""))):/require\([^\{]*?\{/.test(r)&&(r=r.replace(/require[^\{]+\{/,""),r=r.replace(/\}\);\s*$/,"")),r=r.replace(/return addTest;/,"")}};if(inBrowser){var suppliedConfig=self._modernizrConfig,metadataUrl="i/js/metadata.json",packageUrl="i/js/modernizr-git/package.json";baseRequireConfig.baseUrl="/i/js/modernizr-git/src",baseRequireConfig.paths={text:"/i/js/requirejs-plugins/lib/text",lib:"/i/js/modernizr-git/lib",json:"/i/js/requirejs-plugins/src/json",lodash:"/i/js/lodash",test:"/i/js/modernizr-git/feature-detects"},suppliedConfig&&(metadataUrl=suppliedConfig.metadataUrl||metadataUrl,packageUrl=suppliedConfig.packageUrl||packageUrl,_extend(baseRequireConfig,suppliedConfig)),self._modernizrMetadata?requirejs.define("metadata",[],function(){return self._modernizrMetadata}):requirejs.define("metadata",["json!"+metadataUrl],function(e){return e}),requirejs.define("package",["json!"+packageUrl],function(e){return e})}else{var requirejs=require("requirejs"),metadata=require("./metadata")(),pkg=require("../package.json");requirejs.define("metadata",[],function(){return metadata}),requirejs.define("package",function(){return pkg}),baseRequireConfig.baseUrl=__dirname+"/../src",baseRequireConfig.paths={lodash:__dirname+"/../node_modules/lodash/lodash",test:__dirname+"/../feature-detects",lib:__dirname}}if(requirejs.config(baseRequireConfig),inBrowser)define("build",["generate","lib/generate-banner","package"],build);else{var generateBanner=requirejs(__dirname+"/generate-banner.js"),generate=requirejs("generate"),pkg=requirejs("package"),_build=build;module.exports=function(){return _build(generate,generateBanner,pkg).apply(void 0,arguments)}}