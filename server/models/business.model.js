import mongoose from "mongoose";

const businessSchema = new mongoose.Schema(
  {
    business_name: {
      type: String,
      required: true,
      unique: true,
    },
    business_email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    business_phone: {
      type: String,
      required: true,
      unique: true,
    },
    business_password: {
      type: String,
      required: true,
    },
    business_address: {
      type: String,
      required: true,
    },
    banker: {
      type: String,
    },
    account_name: {
      type: String,
    },
    account_number: {
      type: String,
    },
    business_logo: {
      type: String,
      default:
        "https://img.freepik.com/premium-vector/black-white-handshake-symbol-with-starburst-background_1294240-23568.jpg?semt=ais_hybrid",
    },

    staff_name: {
      type: String,
    },
    staff_phone: {
      type: String,
    },
    staff_email: {
      type: String,
    },
    staff_designation: {
      type: String,
    },
    staff_signature: {
      type: String,
      default:
        "https://www.shutterstock.com/image-vector/signature-vector-hand-drawn-autograph-600nw-2387543207.jpg",
    },
    role: {
      type: String,
      default: "Vendor",
    },
    status: {
      type: String,
      default: "active",
    },
  },
  { timestamps: true }
);

const Business = mongoose.model("Business", businessSchema);

export default Business;
