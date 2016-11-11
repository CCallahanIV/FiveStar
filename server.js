// Let's build a server!
var express = require('express'),
  requestProxy = require('express-request-proxy'),
  port = process.env.PORT || 3000,
  app = express();

app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', {root: '.'});
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
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
