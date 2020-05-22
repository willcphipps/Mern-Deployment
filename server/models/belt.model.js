const mongoose = require("mongoose");

// -------------- define schema ----------------
const petSchema = new mongoose.Schema({
	name:{
        type:String,
        required: [true, "Pet must have a name!"],
        minlength: [3, "Description must be at least 3 characters"],
        // unique: [true, "must provide unique name"]
    },
    type: {
        type:String,
        required: [true, "Pet must have a type!"],
        minlength: [3, "Description must be at least 3 characters"]
    },
    description: {
        type:String,
        required: [true, "Pet must have description"],
        minlength: [3, "Description must be at least 3 characters"]
    },
    skill1: {
        type:String,
    },
    skill2: {
        type:String,
    },
    skill3: {
        type:String,
    },
    // likes: {
    //     type:Number,
    // }
});
// ------------------------------------------------

const BlackBelt = mongoose.model("pet", petSchema);


// BlackBelt.on('index', function(err) { 
//   assert.ifError(err);
//   BlackBelt.createIndexes([{ name: 'Val' }, { name: 'Val' }], function(err) {
//     console.log(err);
//   });
// });



module.exports = BlackBelt;