// start slingin' some d3 here.
window.onload = function() {
  var width = 960;
  var height = 500;

  var svg = d3.select('body').append('svg')
              .attr('width', width)
              .attr('height', height);

  var nodes = d3.range(5)
                .map(function() {

                  return {

                    radius: 10,

                    x: Math.random() * width,

                    y: Math.random() * height

                  };

                });

  svg.selectAll('circle').data(nodes)
                         .enter()
                         .append('circle')
                         .attr('r', function(d) { return d.radius; })
                         .attr('cx', function(d) {return d.x; })
                         .attr('cy', function(d) {return d.y; })
};