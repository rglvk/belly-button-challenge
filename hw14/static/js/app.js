const jsonUrl = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


d3.json(jsonUrl).then(function(data) {
  
  console.log(data.metadata[0]['id']);
  // let ids = [];
  // let labels = []
  // let sample_vals = [];
  // for (let i = 0; i < data.samples.length; i++) {
  
  ids = data.samples[0]['otu_ids'].slice(0, 10);
  labels = data.samples[0]['otu_labels'].slice(0, 10);
  sample_vals = data.samples[0]['sample_values'].slice(0, 10);
  

  // }
  console.log(sample_vals);

  var data = [{
    type: 'bar',
    x: sample_vals,
    y: ids,
    orientation: 'h',
    hoverText: labels,
  }];
  
  Plotly.newPlot('myDiv', data);
}).catch(function(error) {
  
  console.error("Error loading JSON data:", error);
});

