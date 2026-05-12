// Coordinates 
  var lat = 37.9375;
  var lon = -107.8123;
 
// Initialize Map
  var map = L.map('map').setView([lat, lon], 9);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Add Marker
  var marker = L.marker([lat, lon]).addTo(map);
  marker.bindPopup("<b>Twilight Haven</b><br>Loading weather...").openPopup();

// Weather Fetch
  fetch("https://api.weather.gov/points/" + lat + "," + lon)
    .then(function(res) { return res.json(); })
    .then(function(data) { return fetch(data.properties.forecast); })
    .then(function(res) { return res.json(); })
    .then(function(weather) {
      var current = weather.properties.periods[0];
      marker.setPopupContent("<b>Twilight Haven</b><br>" + current.temperature + "°F and " + current.shortForecast);
    })
    .catch(function(err) {
      marker.setPopupContent("<b>Twilight Haven</b><br>Weather unavailable");
    });
