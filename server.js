var express = require('express');
var app = express();
var port = 5001;
const path = require('path');
app.use(express.static('./'));

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});