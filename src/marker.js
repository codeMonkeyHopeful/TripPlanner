const mapboxgl = require("mapbox-gl");

const imageObj = {
  activity: "http://i.imgur.com/WbMOfMl.png",
  hotel: "http://i.imgur.com/D9574Cu.png",
  restaurant: "http://i.imgur.com/cqR6pUI.png"
};

const buildMarker = (type, location, map) => {
  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = `url(${imageObj[type]})`;

  new mapboxgl.Marker(markerDomEl).setLngLat(location).addTo(map); // [-87.6354, 41.8885] for Chicago
};

module.exports = buildMarker;
