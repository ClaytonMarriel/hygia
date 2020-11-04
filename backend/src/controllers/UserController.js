
const User = require('../models/User');

module.exports = {
  //Insert users
  async store(req,res){
    const {username,email,firstName,lastName,city,country,postalCode} = req.body

    let user = await User.findOne({username})
     if (!user) {
      user = await User.create({
        username,
        email,
        firstName,
        lastName,
        city,
        country,
        postalCode
      })
     }
    return res.json(user)
  },

  //List users
  async index(req,res){
    User.find(function (err, user){
      if(err)
        res.send('Erro ao listar os usuários' + err)
        
        res.json(user)
    })
  },

//Update/Edit users
  async update(req,res){

      const id = req.params.id

      User.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
      .then(data =>{
        if(!data){
          res.status(404).send({
            message: `Error updating user id=${id}`
          })
        } else res.send({message: "Successfully updated"})
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating"
        })
      })   
  },

  //Deleting user
  async delete(req,res){
    const id = req.params.id

    User.findByIdAndRemove(id)
    .then(data =>{
      if(!data){
        res.status(404).send({
          message: `Error deleting user id=${id}.`
        })
      } else {
        res.send({
          message: "User deleted successfully"
        })
      }
    })
    .catch(err =>{
      res.status(500).send({
          message:"Could not delete User"
      })
    })
  }
};