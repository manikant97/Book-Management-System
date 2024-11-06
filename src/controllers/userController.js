const UserModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    return res.status(201).send({ status: true, message: user });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

const getUser = async (req, res) => {
    try {
      const users = await UserModel.find(req.query);
      return res.status(201).send({ status: true, data: users});
    } catch (err) {
      res.status(500).send({ status: false, message: err.message });
    }
  };

  const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      let checkCredentials = await UserModel.findOne({ email: email, password: password });
  
      if (!checkCredentials) {
       return res.status(401).send({ status: false, message: "Wrong Credentials" });
      }
          let token = jwt.sign({userId: checkCredentials._id.toString(),project: 2,college: "pst",
        },"project2");
   
    return res.status(200).send({status: true,msg: "Token has been generated",token: token,});
    } 
    catch (error) {
      res.status(500).send({ status: false, message: error.message });
    }
  };

module.exports = { createUser,getUser,loginUser};