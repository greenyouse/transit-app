describe("svg context",function(){var e;this.timeout(2e4),"createElementNS"in document&&(it("is able to be loaded in a SVG file",function(t){e=document.createElement("object"),e.data="../test/img/integration.svg",e.type="image/svg+xml",e.id="svgContext",e.onerror=function(){var e=Array.prototype.slice.call(arguments).join(" ");try{e.length&&expect(e).to.be(void 0)}catch(o){t(o)}},e.onsuccess=function(e){expect(e).to.not.be(void 0),t()},document.body.appendChild(e)}),afterEach(function(){e.parentNode.removeChild(e)}))});