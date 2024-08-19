import { Injectable } from "@angular/core";
import { Geolocation, PositionOptions } from "@capacitor/geolocation";

@Injectable({
  providedIn: "root",
})
export class LocationService {

  constructor() {}

  async getCurrentPosition() {
    const options: PositionOptions = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    };

    try {
      const coordinates = await Geolocation.getCurrentPosition(options);
      console.log('Latitude:', coordinates.coords.latitude, 'Longitude:', coordinates.coords.longitude);

      return {
        lat: coordinates.coords.latitude,
        lng: coordinates.coords.longitude,
      };
    } catch (error) {
      console.error("Error getting location:", error);
      throw error;
    }
  }
}
