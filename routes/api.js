const express = require('express');
const countryRouter = require('../modules/country/country.route');

const apiRouter = express.Router();

apiRouter.use('/country', countryRouter);

module.exports = apiRouter;
