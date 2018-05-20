/**
 * Created by ***
 */
var express = require('express');
var app = express();
 
app.use(function(req, res){
  res.send('{status:"ok"}')
});
 
var server = app.listen(8007, function () {
 
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://10.1.230.0:"+port)
 
})