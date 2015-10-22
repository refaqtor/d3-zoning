(function() {
  'use strict';

  angular.module('app.controllers')
    .controller('polyController', ['$scope', function($scope) {
      $scope.title = "polyController";
      $scope.polygon = {
        "points": [{
          "x": 0,
          "y": 0
        }, {
          "x": 132.71861743,
          "y": 0.00034106
        }, {
          "x": 158.19762659,
          "y": -12.54884333
        }, {
          "x": 77.95810739,
          "y": -59.70431506
        }, {
          "x": 0,
          "y": -52.85933153
        }]
      };
      $scope.polygon = new Polygon($scope.polygon.points);
      console.log($scope.polygon.aabb());
      $scope.d3OnClick = function(item) {
        console.log(item);
      };
      $scope.zones = [{
        "polygon": {
          "points": [{
            "x": 0,
            "y": -52.85933153
          }, {
            "x": 77.95810739,
            "y": -59.70431506
          }, {
            "x": 75.68423751,
            "y": -49.62427443
          }, {
            "x": 9.84252003,
            "y": -43.84315049
          }]
        },
        "spaceType": "OpenOffice",
        "type": "Perimeter",
        "area": 710.3989805053577,
        "percent": 0.09968322893643186
      }, {
        "polygon": {
          "points": [{
            "x": 77.95810739,
            "y": -59.70431506
          }, {
            "x": 158.19762659,
            "y": -12.54884333
          }, {
            "x": 137.47215653,
            "y": -13.31251053
          }, {
            "x": 75.68423751,
            "y": -49.62427443
          }]
        },
        "spaceType": "OpenOffice",
        "type": "Perimeter",
        "area": 810.7179944675562,
        "percent": 0.1137599991879279
      }, {
        "polygon": {
          "points": [{
            "x": 158.19762659,
            "y": -12.54884333
          }, {
            "x": 132.71861743,
            "y": 0.00034106
          }, {
            "x": 130.42624339,
            "y": -9.84218483
          }, {
            "x": 137.47215653,
            "y": -13.31251053
          }]
        },
        "spaceType": "OpenOffice",
        "type": "Perimeter",
        "area": 178.42504799026096,
        "percent": 0.025036613783080853
      }, {
        "polygon": {
          "points": [{
            "x": 132.71861743,
            "y": 0.00034106
          }, {
            "x": 0,
            "y": 0
          }, {
            "x": 9.84252,
            "y": -9.84249467
          }, {
            "x": 130.42624339,
            "y": -9.84218483
          }]
        },
        "spaceType": "OpenOffice",
        "type": "Perimeter",
        "area": 1246.5666753319579,
        "percent": 0.17491831307703448
      }, {
        "polygon": {
          "points": [{
            "x": 0,
            "y": 0
          }, {
            "x": 0,
            "y": -52.85933153
          }, {
            "x": 9.84252003,
            "y": -43.84315049
          }, {
            "x": 9.84252,
            "y": -9.84249467
          }]
        },
        "spaceType": "OpenOffice",
        "type": "Perimeter",
        "area": 427.4605819913135,
        "percent": 0.05998129533579637
      }, {
        "polygon": {
          "points": [{
            "x": 9.84252003,
            "y": -43.84315049
          }, {
            "x": 75.68423751,
            "y": -49.62427443
          }, {
            "x": 137.47215653,
            "y": -13.31251053
          }, {
            "x": 130.42624339,
            "y": -9.84218483
          }, {
            "x": 9.84252,
            "y": -9.84249467
          }]
        },
        "spaceType": "OpenOffice",
        "type": "Core",
        "area": 3752.995419562715,
        "percent": 0.5266205496797286
      }];

    }]);

}());
