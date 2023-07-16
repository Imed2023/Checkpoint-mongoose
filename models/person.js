import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
    name: {
        type : String,
        require : true,
        },
    age: Number,
    favoriteFoods : [String]  ,  
    createdat: {
        type:Date,
        default:Date.now()
},

})

const persons= mongoose.model('persons',personSchema)
export default persons
