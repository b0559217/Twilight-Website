// Wait until the page is fully loaded, like setting up a game board
document.addEventListener("DOMContentLoaded", function() {
    "use strict"; // Help catch mistakes in our code

    // Find the elements to show latitude, longitude, altitude, and errors
    let latitudeSpan = document.getElementById("latitude");
    let longitudeSpan = document.getElementById("longitude");
    let altitudeSpan = document.getElementById("altitude");
    let errorMsg = document.getElementById("error");

    // Check if the browser supports geolocation
    if (navigator.geolocation) {
        // Ask for the user’s location
        navigator.geolocation.getCurrentPosition(
            // If they say yes, show their location
            function(position) {
                // Get the coordinates
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                let alt = position.coords.altitude || "Not available";

                // Show the coordinates on the page
                latitudeSpan.textContent = lat.toFixed(4); // Round to 4 decimals
                longitudeSpan.textContent = lon.toFixed(4);
                altitudeSpan.textContent = alt === "Not available" ? alt : alt.toFixed(1) + " meters";

                // Create a map in the "map" div, centered on the user’s location
                let map = L.map("map").setView([lat, lon], 13); // 13 is the zoom level

                // Add a map layer (like a background) from OpenStreetMap
                L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                    attribution: "© <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                }).addTo(map);

                // Add a marker to show the user’s exact location
                L.marker([lat, lon]).addTo(map)
                    .bindPopup("You are here!").openPopup();
            },
            // If they say no or there’s an error, show a message
            function(error) {
                errorMsg.textContent = "Sorry, we couldn’t get your location. You might have denied permission or your device doesn’t support it.";
                errorMsg.style.display = "block";
                latitudeSpan.textContent = "Unavailable";
                longitudeSpan.textContent = "Unavailable";
                altitudeSpan.textContent = "Unavailable";
            }
        );
    } else {
        // If the browser doesn’t support geolocation
        errorMsg.textContent = "Your browser doesn’t support geolocation.";
        errorMsg.style.display = "block";
        latitudeSpan.textContent = "Unavailable";
        longitudeSpan.textContent = "Unavailable";
        altitudeSpan.textContent = "Unavailable";
    }
});