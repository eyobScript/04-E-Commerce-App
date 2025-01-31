import mongoose from "mongoose"; // Importing Mongoose library
import bcrypt from "bcrypt"; // Importing Bcrypt library for hashing passwords
import crypto from 'crypto';

// Access Schema and ObjectId from Mongoose
const { Schema, model, Types } = mongoose;

// Declare the Schema of the Mongo model
const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    cart: {
      type: Array,
      default: [],
    },
    refreshToken: {
      type: String,
    },
    address: {
      type: String,
    },
    wishlist: [{ type: Schema.Types.ObjectId, ref: "Product" }], // Fixed usage of ObjectId
    refreshToken: { type: String },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  {
    timestamps: true, // Include timestamps for created and updated fields
  }
);

// Hash the password before saving it to the database
userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next(); // Prevent rehashing the password
    const salt = await bcrypt.genSalt(10); // Generate salt
    this.password = await bcrypt.hash(this.password, salt); // Hash password
    next();
  } catch (error) {
    next(error); // Pass any errors to the next middleware
  }
});

// Method to compare passwords
userSchema.methods.isPasswordMatch = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password); // Compare entered password with hashed password
};
userSchema.methods.createPasswordResetToken = async function () {
const resetToken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.passwordResetExpires = Date.now() + 30 * 60 * 1000;
  return resetToken; // Reset password
};
// Create and export the User model
const User = model("User", userSchema);
export default User;
