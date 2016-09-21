"use strict";
const app = require('../app.js');

app.set('port', 9090);

const server = app.listen(app.get('port'), () => {
  console.log('Server listening on port: ' + server.address().port);
});
