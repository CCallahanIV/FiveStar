(function(module){

  var favObj = {};
  favObj.favArray = [];

  favObj.getFavorites = function() {
    if (localStorage.favorites) {
      favObj.favArray = JSON.parse(localStorage.getItem('favorites'));
      restaurantView.renderObject(favObj.favArray, '#favoritesList', '#rest-template');
    } else {
      $('#favoritesList').html('No favorites');
    }
  };

  favObj.createTable = function() {
    webDB.execute(
      'CREATE TABLE IF NOT EXISTS favorites (' +
        'id INTEGER PRIMARY KEY, ' +
        'name VARCHAR NOT NULL, ' +
        'categories VARCHAR NOT NULL, ' +
        'display_phone VARCHAR, ' +
        'address VARCHAR NOT NULL, ' +
        'display_address VARCHAR NOT NULL, ' +
        'rating_img_url VARCHAR NOT NULL,' +
        'image_url VARCHAR NOT NULL,' +
        'url VARCHAR NOT NULL,' +
        'rating FLOAT NOT NULL,' +
        'snippet_text TEXT NOT NULL);',
      function() {
        console.log('Successfully set up the favorites table.');
      }
    );
  };

  favObj.insertRecord = function(obj){
    webDB.execute(
      [
        {
          'sql': 'INSERT INTO favorites (name, categories, display_phone, address, display_address, rating_img_url, image_url, url, rating, snippet_text) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
          'data': [obj.name, obj.categories, obj.display_phone, obj.address, obj.display_address, obj.rating_img_url, obj.image_url, obj.url, obj.rating, obj.snippet_text],
        }
      ]
    );
  };

  favObj.deleteRecord = function(name){
    webDB.execute(
      [
        {
          'sql': 'DELETE FROM favorites WHERE name = ?;',
          'data': [name]
        }
      ]
    );
  };

  favObj.clearTable = function() {
    webDB.execute(
      'DELETE FROM favorites;'
    );
  };

  favObj.fetchAll = function(){
    webDB.execute(
      'SELECT * FROM favorites ORDER BY rating DESC', function(rows) {
        if(rows.length){
          favObj.loadFavs(rows);
        } else {
          console.log("No Favorites");
        }
    });
  };

  favObj.loadFavs = function(rows){
    favObj.favArray = rows.map(function(row){
      return {
        categories: row.categories,
        display_phone: row.display_phone,
        address: row.address,
        display_address: row.display_address,
        name: row.name,
        rating_img_url: row.rating_img_url,
        image_url: row.image_url,
        url: row.url,
        rating: row.rating,
        snippet_text: row.snippet_text
      };
    });
    favoriteView.renderFavorites();
    favoriteView.checkFav();
  };

  module.favObj = favObj;
})(window);
