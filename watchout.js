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

  var drag = d3.behavior.drag()
            .on('drag',function(e){
              radius = +this.attributes.getNamedItem('r').value;
              d3.select(this)
                .attr('cx', Math.max(Math.min(d3.event.x, width - radius), radius))
                .attr('cy', Math.max(Math.min(d3.event.y, height - radius), radius));
            });

  var playerCircle = svg
                    .append('circle')
                    .attr('class','player')
                    .attr('r', player.radius)
                    .attr('cx', player.x)
                    .attr('cy', player.y)
                    .call(drag);

  setInterval(function() {
    circles.transition()
           .attr('cx', function() {return Math.random() * width; })
           .attr('cy', function() {return Math.random() * height; });
  }, 1000);


  setInterval(function() {
    // debugger;
    for (var i = 1; i < nodes.length; i++) {
      if(Math.sqrt( Math.pow( nodes[i].x - player.x, 2 ) + Math.pow( nodes[i].y - player.y, 2 ) ) < player.radius + nodes[i].radius) {
        alert('hello collision!');
      }
    }
  }, 100)
};