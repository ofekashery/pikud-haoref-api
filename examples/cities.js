var fs = require('fs');

// Replace with require('pikud-haoref-api') if the package resides in node_modules
var pikudHaoref = require('../index');
var pikudHaoref = require('../index');

// Pikud Haoref Google Maps API Key
var options = {
    googleMapsApiKey: 'AIzaSyBYZ7FFqB5U1mP1nAwJ0iScWU5GjDP1KCM'
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