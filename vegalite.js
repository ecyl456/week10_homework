
var vg_1 = "w10_hw_v1.json";  // Path to your Vega-Lite JSON file

vegaEmbed("#v1", vg_1)  // Embeds the chart into an HTML element with the ID 'choropleth_map'
    .then(function (result) {
        // You can access the Vega view instance as result.view
    })
    .catch(console.error);



var vg_2 = "w10_hw_v2.json";  // Path to your Vega-Lite JSON file

vegaEmbed("#v2", vg_2)  // Embeds the chart into an HTML element with the ID 'choropleth_map'
    .then(function (result) {
        // You can access the Vega view instance as result.view
    })
    .catch(console.error);