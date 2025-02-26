const express = require('express')
const app = express()
const path = require('path');
var cors = require('cors')

const cookieParser = require('cookie-parser');
//import connectDB
const connection =require('./config/db');
const bodyParser = require('body-parser');
app.use(cookieParser());
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
  credentials:true,
  origin: ['http://localhost:3000','http://localhost:3001']
}));
connection.connect();
app.use("/public", express.static("public"));
// import routes
const router = require('./routers');

router(app);
app.get('/', function (req, res) {
  res.send('Hello World')
})
function sortObject(obj) {
  const sorted = {};
  const keys = Object.keys(obj).sort();
  for (const key of keys) {
      sorted[key] = obj[key];
  }
  return sorted;
}

app.listen(4000);