sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/UIComponent"
], function(Controller, JSONModel, UIComponent) {
	"use strict";

	return Controller.extend("incentergy.webgis.controller.App", {
		onInit: function() {
			var oRoutesModel = new JSONModel(this.getOwnerComponent().getMetadata().getRoutes());
			this.getView().setModel(oRoutesModel, "RoutesModel");
			var oRouter = UIComponent.getRouterFor(this);
			var oDetailPage = this.byId("detailPage");
			oRouter.attachTitleChanged(function(oEvent) {
				var sTitle = oEvent.getParameter("title");
				oDetailPage.setTitle(sTitle);
			});

		},
		onItemPress: function(oEvent) {
			UIComponent.getRouterFor(this).navTo(oEvent.getParameter("listItem").getBindingContext("RoutesModel").getProperty("name"));
		}
	});

});