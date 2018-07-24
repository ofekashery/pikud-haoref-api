var fs = require('fs');

// Replace with require('pikud-haoref-api') if the package resides in node_modules
var pikudHaoref = require('../index');

// Insert your Google Maps API key here for location geocoding
var options = {
    googleMapsApiKey: ''
};

// Fetch city metadata from Pikud Haoref's website
pikudHaoref.getCityMetadata(function (err, cities) {
    // Task failed?
    if (err) {
        return console.error(err);
    }

    // Write cities.json file to disc
    fs.writeFileSync('cities.json', JSON.stringify(cities, null, 2), 'utf8');

    // Output success
    console.log('Wrote cities.json successfully');
}, options);