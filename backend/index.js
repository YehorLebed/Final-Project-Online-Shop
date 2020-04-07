// Express + Middleware
const express = require('express');
const cors = require('cors');

// DB
const sequelize = require('./db.setup');

// GraphQL
const express_graphql = require('express-graphql');
const graphQlControllers = require('./controllers');


const app = express();

app.use(cors());

app.use('/graphql', express_graphql(graphQlControllers));

app.listen(4000);

sequelize.sync();