'use strict';

const process = require('process');
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

app.use(cors());
app.use(express.json()); // Parseja bodies de json (ajax)
app.use(express.urlencoded({extended: true})); //Parseja bodies de form


/** ROUTES **/
app.use('/api/v1/users/', require('../routes/userRoutes'));
app.use('/api/v1/auth/', require('../routes/authRoutes'))

app.listen(process.env.PORT || 3000, () => {
  console.log(`My First API running on port: ${process.env.PORT}`);
});