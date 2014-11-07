// start slingin' some d3 here.
window.onload = function() {
  var width = 960;
  var height = 500;

  var svg = d3.select('body').append('svg')
              .attr('width', width)
              .attr('height', height);

  var nodes = d3.range(6)
                .map(function() {
                  return {
                    radius: 10,
                    x: Math.random() * width,
                    y: Math.random() * height
                  };
                });

  var player = nodes[0];

  player.x = width/2;
  player.y = height/2;

  var circles = svg.selectAll('circle').data(nodes.slice(1))
                         .enter()
                         .append('circle')
                         .attr('r', function(d) { return d.radius; })
                         .attr('cx', function(d) {return d.x; })
                         .attr('cy', function(d) {return d.y; });

  var playerCircle = svg.selectAll('.player').data([player])
                    .enter()
                    .append('circle')
                    .attr('class','player')
                    .attr('r', function(d) { return d.radius; })
                    .attr('cx', function(d) {return d.x; })
                    .attr('cy', function(d) {return d.y; });

  setInterval(function() {
    circles.transition()
           .attr('cx', function() {return Math.random() * width; })
           .attr('cy', function() {return Math.random() * height; });
  }, 1000);
};