
var express = require('express');
var app = express();

let status = "active"

const initApi = (req,res,params) => {
        res.send(JSON.stringify({"botstatus":status}))
}
app.get('/initApi',initApi);

var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })