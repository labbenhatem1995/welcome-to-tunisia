const Publication=require("../models/publication");
const fs = require('fs');


exports.createPublication=(req,res,next)=>{
    const publiction=new Publication({
        title: req.body.title,
        place:req.body.place,
        description: req.body.description,
        imageUrl:req.body.image,
        name:req.body.name,
        userId: req.body.userId
    });
    publiction.save()
    .then(()=>res.status(201).json({message:'Objet enregistré !'}))
    .catch((error)=>res.status(400).json({ error }))
}

exports.getAllPublication=(req, res, next) => {
    Publication.find()
    .then(publications=>res.status(200).json(publications))
    .catch(error=>res.status(400).json({error}));
};

exports.deletePublication=(req, res, next) => {
    Publication.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

  