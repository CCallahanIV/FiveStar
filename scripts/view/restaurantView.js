/*restaurantView.js*/
(function(module) {
  restaurantView = {};

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
      $(this).parent().parent().parent().parent().slideUp('500ms', function() {

        //Check for any unshown list items and toggle them to shown.
        if($(this).siblings().attr('style')){
          $(this).siblings().fadeToggle();
        }

        $(this).remove('li');
        restaurantView.renderObject(restaurant.allRestaurants.splice(0,1), '#restList','#rest-template');
        if ($('#restList li').length === 0) {
          console.log('You\'re out of options.');
        }
      });
    });
  };

  restaurantView.handleListDetails = function() {
    $('#restList').on('click', '#showMore', function() {
      $(this).parent().next().slideToggle('slow');
      $(this).parent().parent().siblings().fadeToggle();
      if($(this).text() === 'Show More'){
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

  restaurantView.handleListTeaser();
  restaurantView.handleListDetails();
  geoLocation.getLocation();
  // restaurantView.handleStoreLink();

  module.restaurantView = restaurantView;
})(window);
