(function(module){

  var favoriteView = {};

  favoriteView.checkFav = function () {
    $('#restList').children().each(function () {
      var curLi = $(this).find('.fa-star');
      var curName = $(this).find('h1')[0].outerText;
      favObj.favArray.forEach(function (obj) {
        if (obj.name === curName) {
          curLi.addClass('starred');
        }
      });
    })
  };

  favoriteView.renderFavorites = function() {
    restaurantView.renderObject(favObj.favArray, '#favoritesList','#rest-template');
  };

  favoriteView.handleClear = function() {
    $('#clearFavorite').on('click', function(){
      $('#favoritesList').children().remove();
      favObj.favArray = [];
      favObj.clearTable();
      favoriteView.checkFav();
    });
  };

  favoriteView.handleClear();

  module.favoriteView = favoriteView;
})(window);
