/* map.js handles generation of the html necessary for the map iframe*/
(function(module) {
  map = {};

  map.getMapUrl = function(origin, destination) {

   var origin = origin.replace(/ /g, '+').replace(/,/g, '');
   var destination = destination.replace(/ /g, '+').replace(/,/g, '');

   return 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyCiuRbAeONn0SLDZquHg-J5QEvJygcfORI&origin=' + origin + '&destination=' + destination;
  };

  module.map = map;
})(window);
