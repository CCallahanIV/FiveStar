(function (module) {
  var aboutController = {};

  aboutController.reveal = function() {
    console.log('reveal');
    $('#restList').hide();
    $('#aboutUs').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
