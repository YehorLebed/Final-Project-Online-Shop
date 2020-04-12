// Express + Middleware + Multer + jwt
const express = require('express');
const cors = require('cors');
const path = require('path');
const uploadPath = path.join(__dirname, 'public', 'images');
const upload = require('multer')({ dest: uploadPath });
const jwtHelper = require('./controllers/jwt-helper');

// DB
const sequelize = require('./db.setup');

// GraphQL
const express_graphql = require('express-graphql');
const graphQlControllers = require('./controllers');

const imageController = require('./controllers/image');


const app = express();

app.use(cors());
app.use(express.static('public'));
app.use('/graphql', express_graphql(graphQlControllers));

app.post('/images', upload.array('images', 5), async (req, res) => {
  console.log("UPLOAD_IMAGE", req.files);
  if (!req.files) {
    const error = new Error('failed to upload files');
    error.httpStatusCode = 400;
    return next(error);
  }
  res.status(201).json({ "data": req.files });
})

app.listen(4000);

sequelize.sync();