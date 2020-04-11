// Express + Middleware
const express = require('express');
const fs = require('fs');
const cors = require('cors');

// DB
const sequelize = require('./db.setup');

// GraphQL
const express_graphql = require('express-graphql');
const graphQlControllers = require('./controllers');


const app = express();

app.use(cors());
app.use(express.static('public'));
app.use('/graphql', express_graphql(graphQlControllers));

app.post('/images', (req, res) => {
  console.log(req);
  // const fileName = Date.now() + Math.random().toString('36');
  // const fileStream = fs.createWriteStream('public/images/' + fileName);
  // req.pipe(fileStream)
  // req.on('end', () => res.end(fileName));
})

app.listen(4000);

sequelize.sync();