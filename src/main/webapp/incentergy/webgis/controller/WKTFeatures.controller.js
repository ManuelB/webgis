sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("incentergy.webgis.controller.WKTFeatures", {
		onAddfeature: function(oEvent) {
			var oCultivationVectorSource= this.byId("vectorSource");
			var aExtent = oCultivationVectorSource.getExtent();
            if(aExtent && aExtent[0] !== Infinity) {
               this.byId("map").viewFit(aExtent, true);
            }
		}
	});

});