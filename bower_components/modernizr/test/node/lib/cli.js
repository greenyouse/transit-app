var root=require("find-parent-dir").sync(__dirname,"package.json"),expect=require("expect.js"),cp=require("child_process"),Modernizr=require(root+"lib/cli");describe("cli",function(){it("exposes a build function",function(){expect(Modernizr.build).to.be.a("function")}),it("exposes a metadata function",function(){expect(Modernizr.metadata).to.be.a("function")}),it("does not throw when being executed",function(e){cp.exec("node "+root+"/bin/modernizr -f adownload",e)})});