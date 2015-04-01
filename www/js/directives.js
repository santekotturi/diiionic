angular.module('starter.directives', [])
.directive('planetRevolve', function(){

  function link(scope, el, attr){
    el = el[0]
    var width = "200", 
        height= "200"
    var svg = d3.select(el).append('svg')
              .attr({width: width, height: height});
    var orbit = svg.append('circle')
                    .attr({
                      cx: 100,
                      cy: 100, 
                      r: 75
                    })
                    .style({
                      fill:'none', 
                      stroke:'blue',
                      'stroke-width': 2 
                    });

    var sun = svg.append('circle')
                    .attr({
                      cx: 100,
                      cy: 100, 
                      r: 30
                    })
                    .style({
                      fill:'blue', 
                      stroke:'blue',
                      'stroke-width': 2 
                    });

    var planet = svg.append('circle')
                  .style({
                    fill:'blue'
                  })

    scope.$watch('planetLocation', function(planetLocation){
      planet.attr({
        cx : planetLocation.cx, 
        cy : planetLocation.cy, 
        r : planetLocation.r
      });
    }, true);
  }

  return {
    link: link,
    restrict: 'E',
    scope: {
      planetLocation: '=planetLocation'
    }
    // ,
    // templateUrl: 'templates/planet-revolve.html'
  }
});