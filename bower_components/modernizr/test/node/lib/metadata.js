var root=require("find-parent-dir").sync(__dirname,"package.json"),proxyquire=require("proxyquire").noPreserveCache(),metadata=require(root+"lib/metadata"),expect=require("expect.js"),Joi=require("joi");describe("cli/metadata",function(){it("should ignore .DS_STORE files",function(e){var t=proxyquire(root+"lib/metadata",{file:{walkSync:function(e,t){t("/",[],[".DS_Store"])}}});t(function(t){expect(t).to.be.an("array"),expect(t).to.have.length(0),e()})}),it("should throw on malformed metadata",function(){var e=proxyquire(root+"lib/metadata",{fs:{readFileSync:function(){return"/*! { !*/"}}});expect(e).to.throwException(/Error Parsing Metadata/)}),it("should not throw when metadata is missing",function(){var e=proxyquire(root+"lib/metadata",{fs:{readFileSync:function(){return"sup dude"}}});expect(e).to.not.throwException(/Error Parsing Metadata/)}),it("should throw on malformed deps",function(){var e=proxyquire(root+"lib/metadata",{fs:{readFileSync:function(){return"define([[],"}}});expect(e).to.throwException(/Couldn't parse dependencies/)}),it("should throw if we can't find the define",function(){var e=proxyquire(root+"lib/metadata",{fs:{readFileSync:function(){return"defin([]),"}}});expect(e).to.throwException(/Couldn't find the define/)}),it("should use amdPath as a fallback for name",function(){var e=proxyquire(root+"lib/metadata",{file:{walkSync:function(e,t){t("/",[],["fakeDetect.js"])}},fs:{readFileSync:function(){return'/*! { "property": "fake"}!*/ define([],'}}}),t=e();expect(t.name).to.equal(t.amdPath)}),it("should throw if we can't find the define",function(){var e=proxyquire(root+"lib/metadata",{fs:{readFileSync:function(){return'/*! { "polyfills": ["fake"]}!*/ define([],'}}});expect(e).to.throwException(/Polyfill not found/)}),it("should throw if we can't find the define",function(){var e=proxyquire(root+"lib/metadata",{fs:{readFileSync:function(){return'/*! { "property": "fake", "cssclass": "realFake"}!*/ define([],'}}}),t=e()[0];expect(t.cssclass).to.be(null)}),it("should rename `docs` to `doc` when found",function(){var e=proxyquire(root+"lib/metadata",{fs:{readFileSync:function(){return'/*! { "docs": "originally docs" }!*/ define([],'}}}),t=e()[0];expect(t.docs).to.be(void 0),expect(t.doc).to.match(/originally docs/)}),it("returns a json blob when invoked without callback",function(){expect(metadata()).to.be.an("array")}),it("return nothing when given a callback",function(){expect(metadata(function(){})).to.be(void 0)}),it("pass the json blob when given a callback",function(e){metadata(function(t){expect(t).to.be.an("array"),e()})}),describe("returns an array of valid objects",function(){var e=Joi.object().keys({amdPath:Joi.string().required(),name:Joi.string().required(),path:Joi.string().required(),doc:Joi.alternatives().try(Joi.string(),null),caniuse:Joi.alternatives().try(Joi.string(),null),async:Joi.boolean(),aliases:Joi.array().items(Joi.string()),builderAliases:Joi.array().items(Joi.string()),knownBugs:Joi.array().items(Joi.string()),warnings:Joi.array().items(Joi.string()),authors:Joi.array().items(Joi.string()),tags:Joi.array().items(Joi.string()),deps:Joi.array().items(Joi.string()),notes:Joi.array().items(Joi.object().keys({name:Joi.string().required(),href:Joi.string().required()})).unique(),cssclass:Joi.alternatives().try(Joi.string().lowercase(),Joi.array().items(Joi.string().lowercase())).required(),property:Joi.alternatives().try(Joi.string().lowercase(),Joi.array().items(Joi.string().lowercase())).required(),polyfills:Joi.array().items(Joi.object().keys({name:Joi.string().required(),authors:Joi.array().items(Joi.string()),notes:Joi.array().items(Joi.string()),href:Joi.string().required(),licenses:Joi.array().items(Joi.string()).required()})).unique()});metadata(function(t){t.forEach(function(t){var i=e.validate(t).error;it("for "+t.name,function(){expect(i).to.be(null)})})})})});