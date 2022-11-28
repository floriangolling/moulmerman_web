const Game = require('../database/models/game');

const getAllGames = async (req, res) => {
    try {
        const games = await Game.findAll();
        return res.status(200).send({
            data: games,
            message: 'Games has been retrieved'
        })
    } catch (error) {
        return res.status(500).send({
            message: 'Internal server error',
            error: error
        })
    }
}

const insertNewGame = async (req, res) => {

    const infos = req.body.infos;

    if (!infos)
        return res.status(400).send({
            message: 'Bad request infos are mandatory.'
        })
    try {
        const newGame = await Game.create({
            infos
        })
        return res.status(201).send({
            message: 'Game succesfully inserted.',
            data: newGame
        })
    } catch (error) {
        return res.status(500).send({
            message: 'Internal server error',
            error: error
        })    
    }
}

module.exports = {
    getAllGames,
    insertNewGame
}