sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (Controller) => {
  "use strict";

  return Controller.extend("app.project1.controller.App", {
      onInit() {
        var oModl=new sap.ui.model.json.JSONModel()
                 oModl.loadData("/model/table.json")
                 this.getView().setModel(oModl)
      }
  });
});