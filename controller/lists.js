const ListModel = require("../models/list");


exports.addNewList = (req, res) =>{

    new ListModel(req.body)
    .save()
    .then((result) => res.json({ success: true, message: result }))
    .catch((err) => res.status(400).send(err));
}

exports.updateList = (req, res) =>{
    const update = {
        title: req.body.title,
        description:req.body.description
    }
    const filter = {_id:req.body._id};
    ListModel.findOneAndUpdate(filter, update, {
        // new: true
      })
    .then((result) => {
      res.send(result)
    })
    .catch((err) => res.status(400).send({'error': err}));
}


exports.getAllLists = (req, res) =>{
  console.log("getAllLists ", req.body)
    ListModel.find({email: req.body.email})
    .then((result) => {
      if(result)
        res.json({result})
      else
        res.json({status: "error"})
        
    })
}

exports.getList = (req, res) =>{
    ListModel.find({_id : req.body._id})
    .then((result) => res.json({ success: true, message: result }))
    .catch((err) => res.status(400).send(err));
}


exports.deleteList = (req, res) =>{
    ListModel.deleteOne({ _id: req.body._id })
    .then((result) =>{
      res.send({"success": result})
    })
    .catch((err) => res.status(400).send(err));
  }