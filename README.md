### The website is live from the master branch along with the files.
### Earthquake Data Visualization with Leaflet.js and D3.js

### Overview

This project visualizes real-time earthquake data using Leaflet.js for the map interface and D3.js for data handling. The map displays earthquake events from around the world, retrieved from the USGS Earthquake API. Each earthquake is represented by a circle marker, with the size and color of the marker indicating the magnitude and depth of the earthquake.


### Features

Interactive Map: The map allows users to zoom in and out and explore different earthquake events globally.
Color-Coded Markers: Earthquake markers are color-coded by depth, making it easy to visually interpret the earthquake's depth:
Light colors represent shallow earthquakes.
Dark colors represent deeper earthquakes.
Dynamic Sizing: The size of each marker corresponds to the magnitude of the earthquake.
Popups: Each earthquake marker includes a popup displaying the earthquake's magnitude, location, and depth.
Legend: A legend at the bottom right of the map helps users understand the color scale representing earthquake depths.

### Tecnologies used


Leaflet.js: For rendering the map and adding interactive layers.
D3.js: For fetching and processing data from the USGS Earthquake API.
HTML5/CSS3/JavaScript: For structuring, styling, and providing logic to the page.
File Structure
index.html: Main HTML file that structures the web page and links the required libraries like Leaflet and D3.js.
style.css: Custom styles for the map and legend. It ensures that the map fills the viewport and gives a clean look to the page.
logic.js: Contains the JavaScript logic for fetching data from the USGS API, creating circle markers, and adding a legend.
