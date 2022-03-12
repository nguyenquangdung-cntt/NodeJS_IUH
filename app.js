var http = require('http');
var url = require('url');
var myurl = 'http://localhost:8081/';
var q = url.parse(myurl, true);
var dt = require('./moduleTime');
var port = 8081;

var sever = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h2>My name: Nguyen Quang Dung</h2>');
    res.write('The current date and time are:' + " " + dt.myGetDate()+ "/" + dt.myGetMonth() + "/" + dt.myGetYear());
    res.write('<br>');
    res.write('URL: http://localhost:'+ port);
    res.end("<h1>Hello World</h1>");
});
sever.listen(port, function(){
    console.log('Kết nối sever thành công' + " " + "Thứ " + dt.myGetDay() + " " + dt.myGetDate()+ "/" + dt.myGetMonth() + "/" + dt.myGetYear());
    console.log('Hostname:' + " " + q.hostname);
    console.log('Pathname:' + " " + q.pathname);
    console.log('Search:' + " " + q.search);
});