export const getDistance = (origin, destination) => {
  var origin1 = new window.google.maps.LatLng(origin['lat'], origin['lng']);
  var destinationB = new window.google.maps.LatLng(destination['lat'], destination['lng']);
  var service = new window.google.maps.DistanceMatrixService();

  return new Promise((resolve) => {
    service.getDistanceMatrix(
      {
        origins: [origin1],
        destinations: [destinationB],
        travelMode: 'DRIVING',
        avoidHighways: false,
        avoidTolls: false,
      },
      (response) => resolve(response)
    );
  });
};
