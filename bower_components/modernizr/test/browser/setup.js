$(document).ready(function(){function e(e,t){var a=_.includes(t.toString(),"Ensure the done() callback is being called in this test.");if(a)return window.global_test_results={message:t};t?s.failed+=1:s.passed+=1,s.total+=1;var n=function(e){for(var t=[];e.parent.title;)t.push(e.parent.title),e=e.parent;return t.reverse()};s.tests.push({name:e.title,result:!t,message:t?t.message:"passe",stack:t?t.stack:void 0,titles:n(e)})}var t=mocha.run(),s={passed:0,failed:0,total:0,tests:[]};t.once("suite",function(){mocha.suite.afterAll("send coverage",function(e){window.global_test_results||(window.global_test_results=s),window.__coverage__?$.ajax({type:"POST",url:"/coverage/client",data:JSON.stringify(__coverage__),success:function(){e()}}):e()})}),t.on("fail",e)});