
import {GeoCoordinate} from "butterfly/dist/location/GeoCoordinate.shared";
import {LatLng} from "leaflet";

//! Declares com.lightningkite.butterfly.maps.toButterfly
export function xLatLngToButterfly(this_: LatLng): GeoCoordinate {
    return new GeoCoordinate(this_.lat, this_.lng);
}

//! Declares com.lightningkite.butterfly.maps.toMaps
export function xGeoCoordinateToMaps(this_: GeoCoordinate): LatLng {
    return new LatLng(this_.latitude, this_.longitude);
}
