(function(module){

  var favoriteView = {};

  favoriteView.checkFav = function () {
    console.log(favObj.favArray);
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
    console.log('rendering favorites');
    console.log(favObj.favArray);
    restaurantView.renderObject(favObj.favArray, '#favoritesList','#rest-template');
  };

  module.favoriteView = favoriteView;
})(window);
