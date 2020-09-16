const Player = require('../models/player.model');

module.exports = {
    // Create Player
    createPlayer: (req, res) => {
        Player.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    // Get Players & Player
    allPlayers: (req, res) => {
        Player.find({})
            .then(data => {
                if(data.length > 0) {
                    res.json(data)
                } else {
                    res.status(500).json({ error: "There are no players" })
                }
            })
            .catch(err => res.json(err))
    },
    onePlayer: (req, res) => {
        Player.findOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => {
                if(err.kind == "ObjectId") {
                    res.json({ message: "There is no player with that ID" })
                } else {
                    res.json(err)
                }
            })
    },
    // Update Player
    updatePlayer: (req, res) => {
        Player.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true, new: true })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    // Delete Player
    deletePlayer: (req, res) => {
        Player.findOneAndDelete({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}