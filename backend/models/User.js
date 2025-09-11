import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minlength: 8,
      validate: {
        validator: function (v) {
          return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(v);
        },
        message:
          "Password must be at least 8 characters and include uppercase, lowercase, number, and special character",
      },
    },
    role: {
      type: String,
      enum: ["Higher Authority", "Staff"],
      default: "Staff",
    },
    department: {
      type: String,
      required: [true, "Please add a department or designation"],
    },
    contact: {
      type: String,
      required: [true, "Please add a contact number"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
