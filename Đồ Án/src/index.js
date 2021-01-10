const path = require('path');
const express = require('express');
const handlebars = require("express-handlebars");
const morgan = require('morgan');
const app = express();
const port = 3000;
const db = require('./config/db');
const storage = require('node-sessionstorage')
const hbs = require('handlebars');
const methodOverride = require('method-override')
const route = require('./routes');
const { request } = require('http');

//connect db 
db.connect();

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

//template engine: handlebar
app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
app.use(express.static(path.join(__dirname, 'public')))


//--Handlebar registerHelper--

// Render 24 item per page
hbs.registerHelper("pageNumChange", function (index) {
  slug1 = storage.getItem("slug");
  if (!slug1) {
    return (index >= 0) * (index < 24);
  }
  else {
    return (index >= (24 * slug1)) * (index < (24 * slug1 + 24));
  }
});

// Convert from json to string
hbs.registerHelper('json', function (content) {
  return JSON.stringify(content);
});

// Return the number of document in database
hbs.registerHelper('pageNum', function(arg1) {
  return arg1< storage.getItem("numDocs")/24-1 ;
});

// Return sum a and b
hbs.registerHelper('Sum', function(a,b) {
  return a+b;
});

// Get last page in pages
hbs.registerHelper('lastPage', function() {
  return storage.getItem("numDocs")/24 >>0;
});
// Route init
route(app);
// Khởi tạo web server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})
