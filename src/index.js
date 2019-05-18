const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js");

mapboxgl.accessToken =
  "pk.eyJ1IjoiamFzaW5za2kxNyIsImEiOiJjanZ0eDVmZ3MzbDloNGFvajlqdHJ2dXEyIn0.R1OgJZbHD3UZJde9B_lflw";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

buildMarker("hotel", [-74.009, 40.705], map);
