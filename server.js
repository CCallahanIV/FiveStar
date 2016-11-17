// Let's build a server!
var express = require('express'),
  Yelp = require('yelp'),
  port = process.env.PORT || 3000,
  app = express();

app.use(express.static('./'));

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});

var yelp = new Yelp({
  consumer_key: 'JoJwH6gwIHaZwixEumy0Yg',
  consumer_secret: 'krg480iamErW5vecXugqmLfCwqU',
  token: 'lcrbUsmQ3f90IQCTPYJF5RZJ10CcKv_3',
  token_secret: 'Oxf7MNZbWfn7nfo-qviDoBASSC8',
});


app.get('/requestYelpRestaurants', function (req, res) {
  var yelpJson = {};
  var params = (req._parsedUrl.query).split('&');
  params.forEach(function (string) {
    var strArray = string.split('=');
    yelpJson[strArray[0]] = strArray[1];
  });
  yelpJson.location = yelpJson.location.replace(/%20/g, ' ');
  yelpJson.location = yelpJson.location.replace(/%2C/g, '');

  yelp.search(yelpJson)
  .then(function (data) {
    var formattedData = data.businesses.map(function(ele){
      return {
        categories: ele.categories[0][0],
        display_phone: ele.display_phone,
        address: ele.location.display_address.join(', '),
        display_address: ele.location.display_address.join(', '),
        name: ele.name,
        rating_img_url: ele.rating_img_url,
        image_url: ele.image_url,
        url: ele.url,
        rating: ele.rating,
        snippet_text: ele.snippet_text
      };
    });
    res.send(formattedData);
  })
  .catch(function (err) {
    console.error(err);
  });
});

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', {root: '.'});
});
