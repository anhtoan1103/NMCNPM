const path = require('path');
const express = require('express');
const handlebars = require("express-handlebars");
const morgan = require('morgan');
const app = express();
const port = 3000;
const db = require('./config/db');

//connect db 
db.connect();

const route = require('./routes')
// route 
app.use(morgan('combined'));


//app.use(express.static('src/public/img'));
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({extended: true}));
app.use(express.json());
//template engine
app.engine( 'hbs', handlebars({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));
app.use(express.static(path.join(__dirname, 'public')))

// Home, search, contact

// Route init
route(app);



// Khởi tạo web server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})