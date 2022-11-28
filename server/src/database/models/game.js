const Sequelize = require('sequelize');

class Game extends Sequelize.Model {
    static definition(sequelize) {
        Game.init({
            infos: {
                type: Sequelize.DataTypes.JSON,
                default: {}
            }
        }, {
            sequelize,
            tableName: "game"
        });
    }

    static associate() {
    }
}

module.exports = Game;