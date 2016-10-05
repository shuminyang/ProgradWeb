
var app = require('../app.js');

app.set('port', 9090);

var server = app.listen(app.get('port'), function() {
  console.log('Server listening on port: ' + server.address().port);
});
