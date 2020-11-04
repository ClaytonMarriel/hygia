const Notice = require("../models/Notice")

module.exports = {

  //Insert notices
  async store(req,res) {
    const {name, author} = req.body
 
    let notice = await Notice.findOne({name})
     if(!notice) {
       notice = await Notice.create({name, author})
     }
       return res.json(notice)
   },

   //List notices

  async index(req,res){
    Notice.find(function(err, notice){
      if(err)
        res.send("Erro ao listar todas as noticias")
        res.json(notice)
    })
  },
//Update/Edit notices
  async update(req,res){
     const id = req.params.id

     Notice.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
     .then(data =>{
       if(!data){
         res.status(404).send({
           message: `Error updating notice id=${id}`
         })
       } else res.send({message: "Successfully updated"})
     })
     .cath(err =>{
       res.status(500).send({
         message: "Error updating"
       })
     })
  },

  //Deleting notice
   async delete(req,res){
     const id = req.params.id

     Notice.findByIdAndDelete(id)
     .then(data =>{
       if(!data){
         res.status(404).send({
           message: `Error deleting notice id=${id}`
         })
       } else {
         res.send({
           message: "Notice deleted successfully"
         })
       }
     })
     .catch(err =>{
       res.status(500).send({
         message: "Could not delete notice"
       })
     })
   }

}