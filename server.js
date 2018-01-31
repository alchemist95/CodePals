const express = require('express');
const socket = require('socket.io');

const app = express();

const port = 8000;

//Creating server using express
var server = app.listen(port, function(){
	console.log("App running on " + port);
});

//making public directory as default route '/'. Need to change this if more route is added.
app.use(express.static('public'));
