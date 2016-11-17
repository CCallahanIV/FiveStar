console.log('hello');
(function(module){

  var favoriteView = {};

  favoriteView.checkFav = function () {
    console.log(favObj.favArray);
    $('#restList').children().each(function () {
      var curLi = $(this).find('.fa-star');
      var curName = $(this).find('h1')[0].outerText;
      favObj.favArray.forEach(function (obj) {
        if (obj.name === curName) {
          console.log(curLi);
          curLi.addClass('starred');
        }
      });
    })
  };

  module.favoriteView = favoriteView;
})(window);
