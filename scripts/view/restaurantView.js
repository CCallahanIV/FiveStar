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
    $('#restList').on('click', '#trash_can', function() {
      $(this).parent().parent().fadeOut('fast', function() {
        $(this).remove('li');
        restaurantView.renderObject(restaurant.allRestaurants.splice(0,1), '#restList','#rest-template');
        if ($('#restList li').length === 0) {
          console.log('Bitch You Picky');
        }
      });
    });
  };

  restaurantView.handleButton();
  restaurantView.handleListItems();

  module.restaurantView = restaurantView;
})(window);
