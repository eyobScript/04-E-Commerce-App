import mongoose from "mongoose"; // Erase if already required

// Declare the Schema of the Mongo model
var cartSchema = new mongoose.Schema(
  {
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: Number,
        color: String,
        price: Number,
      },
    ],
    cartTotal: Number ,
    totalAfterDiscount: Number,
    orderby: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

//Export the model
const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
