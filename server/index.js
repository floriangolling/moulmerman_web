const sequelizeInstance     = require('./src/database/sequelize');
const serverConfig          = require('./src/config')
const {init}                  = require('./src/database/index')
const bodyParser            = require('body-parser');
const apiRouter             = require('./src/api')
const express               = require('express');
const cors                  = require('cors');
const app                   = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', apiRouter);

app.listen(serverConfig.PORT, serverConfig.HOST, () => {
    init(sequelizeInstance).then(() => {
        console.log(`Server running on ${serverConfig.HOST}:${serverConfig.PORT}`)
    }).catch((err) => {
        console.log('[ERROR] Connecting to the database or launching the server: ')
        throw err;
    })
});