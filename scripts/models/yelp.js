var queryYelp = function (obj) {
  $.get('/slim', obj, function (data) {
    console.log(data);
  });
};
queryYelp({ term: 'restaurants', location: 'seattle'});
