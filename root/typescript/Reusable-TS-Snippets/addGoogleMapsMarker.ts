// Instructions to every other class on how they can be an argument to 'addMarker'
interface Mappable {
  location: {
    lat: number;
    lng: number;
  }
}
export class CustomMap {
  //mark as private so nobody else can use the instance of googleMap
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      center: { lat: 0, lng: 0},
      zoom: 1,
    });
  }
  //adding a marker
  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })
  }
}

// json depend
// {
//   "devDependencies": {
//     "@faker-js/faker": "^6.0.0-alpha.7",
//     "@types/google.maps": "^3.48.1",
//     "parcel": "^2.3.2"
//   },
//   "dependencies": {
//     "@types/googlemaps": "^3.43.3"
//   }
// }
