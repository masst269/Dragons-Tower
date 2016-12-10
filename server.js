var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
var file = "people.json";
var obj = {users:[]};
obj.users.push({"Name":"rob", "Time":"0.00.00.000"});
var json = JSON.stringify(obj);
fs.writeFile(file, json, 'utf8',function readFileCallback(err, data){
    if (err){
        console.log(err);
    }
    else {
      console.log("Sucessfully added code")
    }
  });
app.set('port', 3000);
app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(app.get('port'), function (){
  var port = server.address().port;
  console.log('== Server Running');
});

var count = 0;
var running = 0;

function start(){
if(running == 0){
    running = 1;
    var timer = document.getElementById("output").innerHTML = "0:00:00:00";
    increment();
    fs.readFile('/etc/passwd', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        obj = JSON.parse(data);
        obj.table.push({id: 2, square:3});
        json = JSON.stringify(obj);
        fs.writeFile(file, json, 'utf8', callback);
    }});

}};

function pause() {
if(running == 1){
    running = 0;
  var timer = document.getElementById("output").innerHTML = "0:00:00:00";
}};

function reset(){
running = 0;
count = 0;
var timer = document.getElementById("output").innerHTML = "0:00:00:00";
};

function increment(){
if(running == 1){
    setTimeout(function(){
        count++;
        var mins = Math.floor(time/10/60);
        var secs = Math.floor(time/10 % 60);
        var hours = Math.floor(time/10/60/60);
        var tenths = time % 10;
        if(mins < 10){
            mins = "0" + mins;
        }
        if(secs < 10){
            secs = "0" + secs;
        }
        document.getElementById("t").innerHTML = hours + ":" + mins + ":" + secs + ":" + tenths + "0";
        increment();
    },100)
}};
