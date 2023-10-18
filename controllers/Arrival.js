const mongoose=require('mongoose')

const arrivalSchema = new mongoose.Schema({
  name:{
    type:String,
    trim:true,
    required:true
  },
  price:{
    type:Number,
    min:0,
    required:true
  }
  ,img:{
    type:String,
    trim:true,
    required:true
  },
  desc:{
    type:String,
    trim:true,
    required:true
  }
});

const Arrival = mongoose.model('Arrival', arrivalSchema);

module.exports=Arrival