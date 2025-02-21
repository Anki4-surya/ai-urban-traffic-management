document.addEventListener("DOMContentLoaded", () => {
    const mapElement = document.getElementById("map");

    // Initialize the Google Map
    function initMap() {
        const map = new google.maps.Map(mapElement, {
            center: { lat: 37.7749, lng: -122.4194 }, // Default location (San Francisco)
            zoom: 12,
        });

        // Example Traffic Layer
        const trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(map);
    }

    // Load the map once the API is ready
    if (typeof google !== "undefined") {
        initMap();
    } else {
        mapElement.innerHTML = "<p>Unable to load the map. Please check your API key.</p>";
    }

    // Contact form handling
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for contacting us! We'll get back to you shortly.");
        form.reset();
    });
});
