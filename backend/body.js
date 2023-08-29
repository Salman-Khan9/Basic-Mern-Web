const mongoose =  require ("mongoose")

const sheme = mongoose.Schema({

    name:{
        type :String,
        required :[true,"please enter your name"]

    },
    complete:{
        type:Boolean,
        required :true,
        default:false
    }
},{
    timestamps:true
})
const Task = mongoose.model("task manager",sheme)
module.exports=Task