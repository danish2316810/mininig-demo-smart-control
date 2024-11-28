sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
   
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("app.project1.controller.View2", {
        onInit() {
            var oRouter=this.getOwnerComponent().getRouter()
            oRouter.attachRoutePatternMatched(this.onRouteMatched, this)
            
        },
        onRouteMatched: function (oEvent) {
            var id = oEvent.mParameters.arguments.id; // Get the ID from the route parameters
           

            // Assuming the Addresses data is available in a model (you can replace this with your actual model or data source)
            var oModel = this.getView().getModel(); // Use your model here
            var aAddresses = oModel.getProperty("/Addresses"); // Assume data is stored in '/Addresses'

            // Find the address that matches the EmployeeID
            var oAddress = aAddresses.find(function (address) {
                return address.EmployeeID === id; // Match EmployeeID
            });

            if (oAddress) {
                // Bind the address data to the view (assuming you have UI elements bound to address data)
                var oAddressModel = new JSONModel(oAddress); // Create a model for the matched address
                this.getView().setModel(oAddressModel, "addressModel"); // Set the address model on the view
            } else {
                console.log("No address found for EmployeeID:", id);
            }
        }
        
       





    });
});