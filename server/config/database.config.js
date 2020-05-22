const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/belt-exam", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Database connected"))
    .catch(err => console.log("we do not have contact...", err));