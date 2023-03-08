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
app.use('/api/v1/users/', require('./routes/userRoutes'));
app.use('/api/v1/auth/', require('./routes/authRoutes'));
app.use('/api/v1/hoteluser/', require('./routes/hotelUserRoutes'));
app.use('/api/v1/space/', require('./routes/spaceRoutes'));
app.use('/api/v1/spacetype/', require('./routes/spaceTypeRoutes'));
app.use('/api/v1/worxtype/', require('./routes/worxTypeRoutes'));
app.use('/api/v1/worx/', require('./routes/worxRoutes'));
app.use('/api/v1/booking/', require('./routes/bookingRoutes'));
app.use('/api/v1/specialdeal/', require('./routes/specialDealsRoutes'));
app.use('/api/v1/review/', require('./routes/reviewRoutes'));
app.use('/api/v1/amenitie/', require('./routes/amenitieRoutes'));
app.use('/api/v1/spacephoto/', require('./routes/spacePhotoRoutes'));
app.use('./api/v1/worxphoto/', require('./routes/worxPhotoRoutes'));

app.listen(process.env.PORT || 3001, () => {
  console.log(`My First API running on port: ${process.env.PORT ? process.env.PORT : 3001}`);
});