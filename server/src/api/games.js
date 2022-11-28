const { getAllGames, insertNewGame }    = require('../controller/games')
const router                            = require('express').Router();
const serverConfig                      = require('../config');

const checkAuthorizationMiddleware = (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.trim() == serverConfig.REQUEST_SECURITY)
        return next();
    return res.status(403).send({
        message: 'Not authorized'
    })
}

router.get('/', getAllGames);

router.post('/', checkAuthorizationMiddleware, insertNewGame);

module.exports = router;