sap.ui.define([
  "sap/ui/test/Opa5",
  "com/firstdecision/apptemplatesapui5/apptemplatesapui5/test/integration/arrangements/Startup",
  "com/firstdecision/apptemplatesapui5/apptemplatesapui5/test/integration/BasicJourney"
], function(Opa5, Startup) {
  "use strict";

  Opa5.extendConfig({
    arrangements: new Startup(),
    pollingInterval: 1
  });

});
