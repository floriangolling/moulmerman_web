const Sequelize     = require('sequelize').Sequelize
const Models        = require('./models/');
const serverConfig  = require('../config')

const sequelize = new Sequelize(serverConfig.DATABASE_HOST);

for (let model of Object.values(Models)) {
    model.definition(sequelize);
}

for (let model of Object.values(Models)) {
    model.associate();
}

module.exports = sequelize