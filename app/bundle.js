System.register("app/index.ts", [], function(exports_1) {
  function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging().plugin("aurelia-computed", {enableLogging: true});
    aurelia.start().then(function() {
      return aurelia.setRoot();
    });
  }
  exports_1("configure", configure);
  return {
    setters: [],
    execute: function() {}
  };
});

//# sourceMappingURL=bundle.js.map