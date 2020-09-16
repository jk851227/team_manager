const playerController = require('../controllers/player.controller');

module.exports = app => {
    // C
    app.post("/api/players", playerController.createPlayer);
    // R
    app.get("/api/players", playerController.allPlayers);
    app.get("/api/players/:id", playerController.onePlayer);
    // U
    app.patch("/api/players/:id", playerController.updatePlayer);
    // D
    app.delete("/api/players/:id", playerController.deletePlayer);
}