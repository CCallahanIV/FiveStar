/*restaurantView.js*/
(function(module) {
  restaurantView = {};

  restaurantView.handleButton = function(){
    $('#goButton').on('click', function(){
      geoLocation.getLocation();
    });
  };

  restaurantView.toHtml = function(obj, templateID){
    var source = $(templateID).html();
    var templateRender = Handlebars.compile(source);
    return templateRender(obj);
  };

  restaurantView.renderObject = function(ObjectArray, destinationID, templateID){
    ObjectArray.forEach(function(obj){
      $(destinationID).append(restaurantView.toHtml(obj, templateID));
    });
  };

  restaurantView.handleListItems = function() {
    $('#restList').on('click', 'li', function() {
      $(this).fadeOut('fast', function() {
        $(this).remove('li');
      });
    });
  };

  restaurantView.handleButton();
  restaurantView.handleListItems();

  module.restaurantView = restaurantView;
})(window);