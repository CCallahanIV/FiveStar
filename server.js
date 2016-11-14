// Let's build a server!
var express = require('express'),
  requestProxy = require('express-request-proxy'),
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
  var stuff = {};
  var params = (req._parsedUrl.query).split('&');
  params.forEach(function (string) {
    var strArray = string.split('=');
    stuff[strArray[0]] = strArray[1];
  });
  stuff.location = stuff.location.replace(/%20/g, ' ');
  yelp.search(stuff)
  .then(function (data) {
    res.send(data);
    // console.log(data);
  })
  .catch(function (err) {
    console.error(err);
  });
});

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', {root: '.'});
});

// PROXY FORMAT STORED FOR REFERENCE, DELETE WHEN FINSISHED.
// var proxyGithub = function(request, response) {
//   console.log('Routing GitHub request for', request.params[0]);
//   (requestProxy({
//     url: 'https://api.github.com/' + request.params[0],
//     headers: {Authorization: 'token ' + process.env.GITHUB_TOKEN}
//   }))(request, response);
// };
//
// app.get('/github/*', proxyGithub);
