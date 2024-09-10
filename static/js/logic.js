// Creating a map object
var myMap = L.map("map", {
    center: [20.0, 5.0], // Adjust for a global view
    zoom: 3
});

// Adding a tile layer (background map image) to the map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
}).addTo(myMap);

// URL for earthquake data (past day)using API.
var earthquakeURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

// Fetching the earthquake GeoJSON data
d3.json(earthquakeURL).then(function(data) {
    // Function to determine marker size by magnitude
    function getRadius(magnitude) {
        return magnitude ? magnitude * 4 : 1;  // Scale the magnitude for visibility
    }

    //Creating a function to determine marker color based on depth
    function getColor(depth) {
        return depth > 90 ? "#581845" :
               depth > 70 ? "#900C3F" :
               depth > 50 ? "#C70039" :
               depth > 30 ? "#FF5733" :
               depth > 10 ? "#FFC300" :
                            "#DAF7A6";
    }

    // Creating a GeoJSON layer and add it to the map
    L.geoJson(data, {
        // Create circle markers instead of default markers
        pointToLayer: function(feature, latlng) {
            return L.circleMarker(latlng);
        },
        // Styling each marker using magnitude and depth
        style: function(feature) {
            return {
                radius: getRadius(feature.properties.mag),
                fillColor: getColor(feature.geometry.coordinates[2]), // depth is the third coordinate
                color: "#000",  // Outline color
                weight: 0.5,
                opacity: 1,
                fillOpacity: 0.8
            };
        },
        // Adding popups to display earthquake details
        onEachFeature: function(feature, layer) {
            layer.bindPopup("Magnitude: " + feature.properties.mag +
                            "<br>Location: " + feature.properties.place +
                            "<br>Depth: " + feature.geometry.coordinates[2] + " km");
        }
    }).addTo(myMap);

    // Adding a legend to the map
    var legend = L.control({position: 'bottomright'});

    legend.onAdd = function() {
        var div = L.DomUtil.create('div', 'info legend');
        var depths = [-10, 10, 30, 50, 70, 90];
        var colors = [
            "#DAF7A6",
            "#FFC300",
            "#FF5733",
            "#C70039",
            "#900C3F",
            "#581845"
        ];

        // Looping through our depth intervals and generate a label with a colored square for each interval
        for (var i = 0; i < depths.length; i++) {
            div.innerHTML +=
                '<i style="background:' + colors[i] + '"></i> ' +
                depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+');
        }

        return div;
    };

    legend.addTo(myMap);
});

