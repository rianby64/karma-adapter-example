(function(window) {
  'use strict';
  
  function GherkinReporter(tc) {
    tc.info({
      total: 0,
      specs: 0
    });
    
    var result = {
      description : "specResult.description",
      id          : "specResult.id",
      log         : ["message1", "message2"],
      skipped     : false,
      success     : false,
      suite       : ["suite1", "suite2"],
      time        : 0
    };
    
    tc.result(result);
    
    tc.error("error 1", "url1", 100);
    
    tc.complete({
      coverage: window.__coverage__
    });
    
  }
  
  function createStartFn(karma) {
    console.log("createStartFn");
    function resolve() {
      console.log("resolve");
      var reporter = new GherkinReporter(karma);
    }
    return resolve;
  }
  
  window.__karma__.start = createStartFn(window.__karma__);
  
})(typeof window !== 'undefined' ? window : global);