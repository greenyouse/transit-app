describe("prefixedCSSValue",function(){var e,t;before(function(n){var a=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}});a(["cleanup","prefixedCSSValue"],function(a,i){e=i,t=a,n()})}),it("returns the value when it is valid",function(){expect(e("display","block")).to.equal("block")}),it("returns false when the prop is not supported",function(){expect(e("fart","block")).to.equal(!1)}),it("returns false when value is not supported",function(){expect(e("display","fart")).to.equal(!1)}),after(function(){t()})});