const express = require('express'),
hbs = require('hbs'),
path = require('path');

var app = express();
var port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '../public')

app.use(express.static(publicPath));

// You can continue from here
app.get('/', (request, response)=>{
    response.render('index.html');
});

app.listen(port, function(){
    console.log(`Server listening at port ${port}`);
});