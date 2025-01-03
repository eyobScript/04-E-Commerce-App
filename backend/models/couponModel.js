import mongoose from 'mongoose'; // Erase if already required

const { Schema, model, Types } = mongoose;

// Declare the Schema of the Mongo model
var couponSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        uppercase:true,    
    },
    expiry:{
        type:Date,
        required:true,
    },
    discount:{
        type: Number,
        required:true,
    },
});

//Export the model
const Coupon = model('Coupon', couponSchema);
export default Coupon;