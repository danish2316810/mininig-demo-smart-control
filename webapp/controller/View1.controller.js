sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/core/Fragment"
], (Controller,Filter,FilterOperator,Fragment) => {
    "use strict";

    return Controller.extend("app.project1.controller.View1", {
        
        
        onConfirm:function(oEvent){
          var oItem=oEvent.getParameter("selectedItem")
          var sItem=oItem.mProperties.title
          var oInpt=this.getView().byId(this.idInpt)
          oInpt.setValue(sItem)
          this.onFilter()
        },

        onF4Help: function (oEvent) {
            this.idInpt=oEvent.getSource().getId()
            if (!this.dialog) {
                Fragment.load({
                    name: "app.project1.fragments.popup",
                    controller: this
                }).then(function (oDialog) {
                    this.dialog = oDialog;
                    this.getView().addDependent(this.dialog);
                    this.dialog.open();
                }.bind(this));
            } else {
                this.dialog.open();
            }
        },
        onRowPress:function(oEvent){
          var oItem=oEvent.getParameter("listItem")
          var id=oItem.getBindingContext().getProperty("EmployeeID")
          var oRouter=this.getOwnerComponent().getRouter()
             oRouter.navTo("RouteView2",{
              id:id
             })


        },
        onFilter: function () {
            // Get references to input fields
            var oNameInput = this.byId("idNameFilter");
            var oCityInput = this.byId("idCityFilter");
            var oDeptInput = this.byId("idDeptFilter");
      
            // Get their values
            var sNameValue = oNameInput.getValue();
            var sCityValue = oCityInput.getValue();
            var sDeptValue = oDeptInput.getValue();
      
            // Prepare filters
            var aFilters = [];
            if (sNameValue) {
              aFilters.push(new Filter("Name", FilterOperator.Contains, sNameValue));
            }
            if (sCityValue) {
              aFilters.push(new Filter("City", FilterOperator.Contains, sCityValue));
            }
            if (sDeptValue) {
                aFilters.push(new Filter("Department", FilterOperator.Contains, sDeptValue));
              }
      
            // Apply filters to the table's binding
            var oTable = this.byId("idTable");
            var oBinding = oTable.getBinding("items");
            oBinding.filter(aFilters);
          }
          // onNavView2:function(){
          //   var oRouter=this.getOwnerComponent().getRouter()
          //   oRouter.navTo("RouteView2")

          // }






    });
});