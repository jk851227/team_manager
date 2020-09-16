const Player = require('../models/player.model');

module.exports = {
    // Create Player
    createPlayer: (req, res) => {
        Player.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}