"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GeoCoordinate_shared_1 = require("butterfly/dist/location/GeoCoordinate.shared");
const leaflet_1 = require("leaflet");
//! Declares com.lightningkite.butterfly.maps.toMaps
function xLatLngToMaps(this_) {
    return new GeoCoordinate_shared_1.GeoCoordinate(this_.lat, this_.lng);
}
exports.xLatLngToMaps = xLatLngToMaps;
//! Declares com.lightningkite.butterfly.maps.toButterfly
function xGeoCoordinateToButterfly(this_) {
    return new leaflet_1.LatLng(this_.latitude, this_.longitude);
}
exports.xGeoCoordinateToButterfly = xGeoCoordinateToButterfly;
//# sourceMappingURL=LatLng.ext.js.map