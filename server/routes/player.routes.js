const playerController = require('../controllers/player.controller');

module.exports = app => {
    // C
    app.post("/api/players", playerController.createPlayer);
}