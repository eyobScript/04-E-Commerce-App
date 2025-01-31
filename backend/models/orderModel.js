import mongoose from "mongoose"; // Erase if already required

// Declare the Schema of the Mongo model
var orderSchema = new mongoose.Schema({
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: Number,
      color: String,
    },
  ],
  paymentIntent: {},
  orderStatus: {
    type: String,
    default: "Not Processed",
    enum: [
      "Not Processed",
      "Cash on Delivery",
      "Processing",
      "Dispatched",
      "Cancelled",
      "Completed",
    ],
  },
  orderby: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
},
{ timestamps: true},);

//Export the model
const Order = mongoose.model("Order", orderSchema);

export default Order;
