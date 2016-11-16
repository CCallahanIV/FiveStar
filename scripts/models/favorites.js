(function(module){

  var favObj = {};
  favObj.favArray = [];

  favObj.getFavorites = function() {
    if (localStorage.favorites) {
      console.log('favorites exits');
      favObj.favArray = JSON.parse(localStorage.getItem('favorites'));
      restaurantView.renderObject(favObj.favArray, '#favoritesList', '#rest-template');

    } else {
      $('#favoritesList').html('No favorites');
    }
  };
  favObj.getFavorites();
  module.favObj = favObj;
})(window);
