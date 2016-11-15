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
    // $('.rest_details').hide('0ms');
    return templateRender(obj);
  };

  restaurantView.renderObject = function(ObjectArray, destinationID, templateID){
    ObjectArray.forEach(function(obj){
      $(destinationID).append(restaurantView.toHtml(obj, templateID));
    });
  };

  restaurantView.handleListTeaser = function() {
    $('#restList').on('click', '#trash_can', function() {
      $(this).parent().parent().slideUp('500ms', function() {
        $(this).remove('li');
        restaurantView.renderObject(restaurant.allRestaurants.splice(0,1), '#restList','#rest-template');
        if ($('#restList li').length === 0) {
          console.log('Bitch You Picky');
        }
      });
    });
  };

  restaurantView.handleListDetails = function() {
    $('#restList').on('click', '#showMore', function() {
      $(this).parent().next().slideToggle('slow');
      console.log(this);
      if($(this).text() === 'Show More'){
        console.log(this.text);
        $(this).text('Show Less');
      } else {
        $(this).text('Show More');
      }
    });
  };

  // restaurantView.handleStoreLink = function() {
  //   $('restList').on('click', '.storeLink', function(event) {
  //     event.preventDefault();
  //     window.open(this.href);
  //   });
  // };


  restaurantView.handleButton();
  restaurantView.handleListTeaser();
  restaurantView.handleListDetails();
  // restaurantView.handleStoreLink();

  module.restaurantView = restaurantView;
})(window);
