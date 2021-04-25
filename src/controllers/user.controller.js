import User from '../models/user.model.js';
import qs from 'querystring';

let userController = {

  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      res
        .status(200)
        .contentType('text/plain')
        .json(users);

        // Ejemplo con QueryString
        var numUsers = qs.stringify(users);
        numUsers = numUsers.replaceAll('=&','')
        numUsers = numUsers.replaceAll('=','')
        numUsers = parseInt(numUsers.length);

        console.log("El numero de usuarios en la db es: " + numUsers);
        //console.log(users)
    } catch (error) {
      res
        .status(400)
        .json({
          message: err
        });
    }
  },
   saveUser: async (req, res) => {
    const body = req.body;    
    try {
      const savedUser = await User.create(body);
      res
        .status(201)
        .json(savedUser);
        console.log(savedUser)
    } catch (err) {
      res
        .status(500)
        .json({
          message: err
        });
    }
  },
  getUser: async (req, res) => {
    const _id = req.params.id;
    try {
      const user = await User.findOne({_id});
      res
        .status(200)
        .json(user)
        console.log(user)
    } catch (err) {
      res
        .status(400)
        .json({
          message: err
        })
    }
  }, 
  deleteUser: async (req, res) => {
    const _id = req.params.id;
    try {
      const revomedUser = await User.findByIdAndDelete({_id});

      if (!revomedUser) {
        return res.status(404).json({
          message: err
        })
      }

      res.json(revomedUser)
      console.log("Usuario con id" + _id + " eliminado")
    } catch (err) {
      res
        .status(400)
        .json({
          message: err
        })
    }
  },
  updateUser: async (req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
      const updatedUser = await User.findByIdAndUpdate(
        _id,
        body,
        {new: true});

      if (!updatedUser) {
        return res.status(404).json({
          message: err
        })
      }
      res
        .status(200)
        .json(updatedUser)
    } catch (err) {
      res
        .status(500)
        .json({
          message: err
        })
    }
  }
};

export default userController;