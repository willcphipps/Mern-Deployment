const animalControl = require("../controllers/belt.controller");


module.exports = app => {
    app.get("/api/belt/", animalControl.returnAll);
    app.get("/api/belt/:_id", animalControl.returnOne );
    app.post("/api/belt/", animalControl.create);
    app.put("/api/belt/:_id", animalControl.update);
    app.delete("/api/belt/:_id", animalControl.destroy);
};