/* This script is used to resize the image map based on the current width of the image. */

// get a reference to the image element
var image = document.getElementById('image-map');

// get a reference to all the area elements
var areas = document.getElementsByTagName('area');

// create an array to store the original coordinates of each area
var originalCoords = [];

// initialize the original coordinates
function initialize() {
    // loop over all areas
    for (var i = 0; i < areas.length; i++) {
        // split the string of coordinates into an array of numbers and store it in the originalCoords array
        originalCoords[i] = areas[i].coords.split(',').map(Number);
    }
}

// function to resize the areas based on the current width of the image
function resize() {
    // get the current width of the image
    var currentWidth = image.offsetWidth;

    // calculate the scale factor based on the current width and the natural width of the image
    var scaleFactor = currentWidth / image.naturalWidth;

    // loop over all areas
    for (var i = 0; i < areas.length; i++) {
        // calculate the new coordinates based on the original coordinates and the scale factor
        var newCoords = originalCoords[i].map(function (coord) {
            return Math.round(coord * scaleFactor);
        });

        // assign the new coordinates to the area
        areas[i].coords = newCoords.join(',');
    }
}

// when the page loads, initialize the original coordinates and recalculate the coordinates
window.onload = function () {
    initialize();
    resize();
}

// when the browser window is resized, recalculate the coordinates
window.onresize = resize;