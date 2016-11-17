/*restaurantView.js*/
(function(module) {
  restaurantView = {};

  restaurantView.toHtml = function(obj, templateID){
    var source = $(templateID).html();
    var templateRender = Handlebars.compile(source);
    return templateRender(obj);
  };

  restaurantView.renderObject = function(ObjectArray, destinationID, templateID){
    ObjectArray.forEach(function(obj){
      $(destinationID).append(restaurantView.toHtml(obj, templateID));
    });
    //Call checkFav to look for any favorites currently in DOM.
    favoriteView.checkFav();
  };

  restaurantView.handleTrash = function() {
    $('#restList').on('click', '#trash_can', function() {
      $(this).parent().parent().parent().parent().slideUp('500ms', function() {

        //Check for any unshown list items and toggle them to shown.
        if($(this).siblings().attr('style')){
          $(this).siblings().fadeToggle();
        }

        $(this).remove('li');
        restaurant.loadNewRestaurant();

        if ($('#restList li').length === 0) {
          console.log('You\'re out of options.');
        }
      });
    });
  };

  restaurantView.handleListDetails = function() {
    $('.lists').on('click', '#showMore', function() {
      $(this).parent().next().addClass('openRestaurant').slideToggle('slow');
      $(this).parent().parent().siblings().fadeToggle();
      if($(this).text() === 'Show More'){
        $(this).text('Show Less');
      } else {
        $(this).text('Show More');
        // $(this).removeClass('openRestaurant');
      }
    });
  };

  restaurantView.handleFavorite = function() {
    $('#restList').on('click', '#favorites', function () {
      $(this).addClass('starred');
      var getName = $(this).parent().parent().find('h1')[0].outerText;

      var newFav = restaurant.allRestaurants.filter(function(ele){
        return ele.name === getName;
      });

      if(newFav){
        favObj.favArray.push(newFav);
        favObj.insertRecord(newFav[0]);
        restaurantView.renderObject(newFav, '#favoritesList','#rest-template');
        favoriteView.checkFav();
      }
    });
  };

  restaurantView.handleTrash();
  restaurantView.handleListDetails();
  restaurantView.handleFavorite();
  geoLocation.getLocation();
  favObj.createTable();
  favObj.fetchAll();

  module.restaurantView = restaurantView;
})(window);
