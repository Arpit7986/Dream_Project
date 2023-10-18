const mongoose=require('mongoose')

const showSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    img:{
        type:String,
        trim:true,
        required:true
    },
    price:{
        type:Number,
        min:0,
        required:true
    },
    desc:{
        type:String,
        trim:true,
        required:true
    }
});

const Show = mongoose.model('Show', showSchema);
module.exports=Show;