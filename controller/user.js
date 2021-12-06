const jwt = require('jsonwebtoken');
const _ = require("lodash");
const UserModel = require("../models/users");
const ListModel = require("../models/list");

const bcrypt = require('bcryptjs')

exports.signUser = (req, res) => {
    console.log("here in it", req.body)
    const { name, email, username, password } = req.body;
    if (_.isEmpty(name))
    return res.status(400).send({ name: "name is required" });
  if (_.isEmpty(email))
    return res.status(400).send({ email: "email is required" });
  if (_.isEmpty(username))
    return res.status(400).send({ mobileNo: "username is required" });
    if (_.isEmpty(password))
    return res.status(400).send({ mobileNo: "password is required" });


    // const filter = { email: req.body.email};
    const params = {
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password,10),
      // password2: req.body.password,
      name:req.body.name,
      username:req.body.username
    }
    UserModel.findOne({email}).then(data => {
      if (data) return res.status(400).send({ Message: "User is already registered" });
      else{
       new UserModel({params})
        .save()
        .then(data => res.status(200).send({ SUCCESS: true }))
        .catch(err => console.error(err));

      }
    })
}

exports.login = async (req,res) =>{
  console.log("IN HERE --")
  const user = await UserModel.findOne({email: req.body.email})
  const secret= process.env.secret
  if(!user) {
    return res.status(400).send('The user is not found');
  }

  if(user && bcrypt.compareSync(req.body.password,user.password)){
    console.log("user found")
    const token = jwt.sign(
      {
        userId:user.email
      },
      secret,
      {expiresIn:'1d'}
    )
    res.status(200).send({email:user.email,username:user.username,name:user.name, token: token})
  }else{
    res.status(400).send('Incorrect password');
  }
  
}


exports.getProfile = (req, res) =>{
  console.log("body", req.body.email)
  UserModel.find({email: req.body.email}).select("-password")
  .then((result) =>{
    res.send(result)
  })
  .catch((err) => res.status(400).send(err));
}

exports.deleteProfile = (req, res) =>{
  UserModel.deleteOne({ username: req.body.username })
  .then((result) =>{
    ListModel.deleteMany({ username:req.body.username })
    .then((result) =>{
      res.status(200).send({"successfully deleted":req.body.username})
    }) .catch((err) => res.status(400).send(err,"in deleting list"));
    
  })
  .catch((err) => res.status(400).send(err,"error in deleting profile"));
}