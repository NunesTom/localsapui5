sap.ui.define([
  "sap/ui/test/opaQunit",
  "com/firstdecision/apptemplatesapui5/apptemplatesapui5/test/integration/pages/main"
], function (opaTest) {
  "use strict";

  opaTest("should show correct number of nested pages", function (Given, When, Then) {

    // Arrangements
    Given.iStartMyApp();

    // Assertions
    Then.onTheAppPage.iShouldSeePageCount(1);

    // Cleanup
    Then.iTeardownMyApp();
  });

});
