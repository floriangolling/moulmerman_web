const apiRouter = require('express').Router();
const gameRouter = require('./games');

apiRouter.use('/games', gameRouter);

module.exports = apiRouter;