const path = require('path');
const express = require('express');
const handlebars = require("express-handlebars");
const morgan = require('morgan');
const app = express();
const port = 3000;
const db = require('./config/db');
var hbs = require('handlebars');
const storage = require('node-sessionstorage')
var cookieParser = require('cookie-parser')

hbs.registerHelper('json', function (content) {
  return JSON.stringify(content);
});



//connect db 
db.connect();

const route = require('./routes');
const { request } = require('http');

// route 
app.use(morgan('combined'));


//app.use(express.static('src/public/img'));
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//template engine
app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
app.use(express.static(path.join(__dirname, 'public')))



// Home, search, contact
hbs.registerHelper("pageNumChange", function (index) {
  slug1 = (hbs.helpers["getSlug"].apply());
  if (!slug1) {
    return (index >= 0) * (index < 24);
  }
  else {
    return (index >= (24 * slug1)) * (index < (24 * slug1 + 24));
  }
});
hbs.registerHelper("getSlug", function () {
  return storage.getItem("slug")
});
hbs.registerHelper('pageNum', function(arg1) {
  return arg1<25 ;
});
// Route init
route(app);
// Khởi tạo web server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})
