describe("bools",function(){it("all properties are lower case",function(){_.every(Modernizr,function(e,o){return expect(o).to.not.match(/[A-Z]/)})}),describe("everythings ship shape",function(){_.chain(Modernizr).keys().filter().sort().forEach(function(e){var o=Modernizr[e];"input"!==e&&"inputtypes"!==e&&it(e+" is a boolean value or Boolean object",function(){expect(o instanceof Boolean||o===!0||o===!1).to.be(!0)})}).value()})});