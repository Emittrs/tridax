const express = require('express'),
    hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;

app.set('views', `${__dirname}/views`);
app.set('view engine', 'hbs');

app.use('/', express.Router());

app.get('/', (request, response) => {
    response.render('index');
});

app.use(express.static(`${__dirname}/public`));

app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
});