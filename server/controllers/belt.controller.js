const Product = require("../models/belt.model");


// ----------- get all -------------------
module.exports.returnAll = (req, res) => {
  Product.find().sort({type: 1})
    .then(all => res.json({ all }))
    .catch(err => res.json( err ));
};//--------------------------------------




// ------------- get one -----------------
module.exports.returnOne = (req, res) => {
    console.log("in controller")
    Product.findOne({ _id: req.params._id })
        .then(Pet => res.json( Pet ))
        .catch(err => res.json( err ));
};//---------------------------------------




// ------------ Create -----------------
module.exports.create = (req, res) => {
  Product.create(req.body)
    .then(item => res.json( item ))
      .catch(err => res.json( err ));
};//------------------------------------




// ------------- Edit ---------------------
module.exports.update = (req, res) => {
  Product.findByIdAndUpdate({ _id: req.params._id }, req.body, {runValidators:true})
    .then(edit => res.json({ edit }))
    .catch(err => res.json( err ));
}; //---------------------------------------




// --------------- delete --------------------
module.exports.destroy = (req, res) => {
  Product.findByIdAndDelete({ _id: req.params._id })
    .then(() => res.json({ msg: "tisdone"} ))
    .catch(err => res.json(  err ));
};//-------------------------------------------

