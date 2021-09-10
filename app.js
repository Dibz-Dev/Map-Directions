mapboxgl.accessToken = 'pk.eyJ1IjoiZGliZGV2IiwiYSI6ImNrcGNmY3NvbTE2a3QyeHFtNW92Yncwb3kifQ.SQuJkU_36W6KP4GVI8YTSw';


navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true }) 

function successLocation(position) {

setUpMap([position.coords.longitude, position.coords.latitude])
console.log(position)
}

function errorLocation() {

    setUpMap([174.7787, 41.2924])

}

function setUpMap(center) {

const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center:center,
zoom: 12
})

map.addControl(new mapboxgl.NavigationControl());

const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
   
  });
  
 map.addControl(directions, 'top-left');
}


