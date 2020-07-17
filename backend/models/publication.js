const mongoose = require('mongoose');

const publicationSchema=mongoose.Schema({
    title: {type:String , required:true},
    place:{type:String , required:true},
    description: {type:String , required:true},
    imageUrl:{type:[String] , required:true},
    name:{type:String , required:true},
    userId: {type:String , required:true}
})

module.exports=mongoose.model('publication',publicationSchema);