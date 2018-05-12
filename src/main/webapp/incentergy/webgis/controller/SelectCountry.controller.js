sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("incentergy.webgis.controller.SelectCountry", {
		onSelect: function(oEvent) {
			MessageToast.show("Selected: "+oEvent.getParameter("selectedOlFeatures").map(function (oFeature) {
				return oFeature.get("name");
			}).join(/,/));
		}
	});

});