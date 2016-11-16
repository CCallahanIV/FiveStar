(function(){

  var favorites = {};
  favorites.favArray = [];

  favorite.getFavorites = function() {
    if (localStorage.favorites) {
      favorites.favArray = JSON.parse(localStorage.getItem('favorites'));
      restaurantView.renderObject(favorites.favArray, '#favoritesList', '#rest-template');

    }
  };

module.favorites = favorites;
})(window);
