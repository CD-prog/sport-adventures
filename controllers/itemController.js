const db = require("../models");


module.exports = {

  findByUser: function(req,res){
    db.Item.find({email:req.query.email})
    // .and({rentedBy:req.query.email})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

  findByRenter: function(req,res){
    db.Item.find({rentedBy:req.query.email})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

  getAllUserItems: async function (req,res){
    try {
    const selling = await db.Item.find({email:req.query.email});
    const renting = await db.Item.find({rentedBy:req.query.email});
    res.json({selling, renting});
    }
    catch(err){
      res.status(422).json(err);
    }
  },

  findAll: function (req, res) {
    db.Item.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  search: function (req, res) {
    console.log(req.query.search, req.query.category)
    db.Item.find({rentedBy:null}).and([
      { location: { $regex: req.query.search, $options: "i" } },
      { category: { $regex: req.query.category, $options: "i" } },
    ])
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

  },
  findById: function (req, res) {
    db.Item.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(req.body)
    db.Item.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err)
        res.status(422).json(err)
      });
  },
  update: function (req, res) {
    db.Item.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Item.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};