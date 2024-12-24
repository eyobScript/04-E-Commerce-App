import mongoose from "mongoose"; // Erase if already required
const { Schema, model, Types } = mongoose;

// Declare the Schema of the Mongo model
var ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    brand: {
      type: String,
      enum: ["Apple", "Samsung", "Lenovo"],
    },
    quantity: {
      type: Number,
      required: true,
    },
    sold: {
      type: Number,
      default: 0,
    },
    images: {
      type: Array,
      required: true,
    },
    color: {
      type: String,
      enum: ["Black", "Red", "Brown"],
    },
    rating: [
      {
        star: Number,
        postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      },
    ],
  },
  { timeseries: true }
);

//Export the model
const Product = model("Product", ProductSchema);
export default Product;
