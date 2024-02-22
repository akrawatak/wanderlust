
mapboxgl.accessToken = mapToken;
 //'pk.eyJ1IjoiYWthc2g5ODczIiwiYSI6ImNsc3d1ZnVqNjExdmYyaXF0eGE5dXhyZjcifQ.9FjUIqXPZ4oD55-tz9Rtpw';
 console.log(mapToken);
const map = new mapboxgl.Map({
container: 'map', // container ID
center: [77.2090,28.6139], // starting position [lng, lat]
zoom: 9 // starting zoom
});
