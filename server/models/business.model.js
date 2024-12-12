import mongoose from "mongoose";

const businessSchema = new mongoose.Schema(
  {
    business_name: {
      type: String,
      require: true,
      unique: true,
    },
    business_email: {
      type: String,
      require: true,
      unique: true,
    },
    business_phone: {
      type: String,
      require: true,
      unique: true,
    },
    business_password: {
      type: String,
      require: true,
    },
    business_address: {
      type: String,
      require: true,
    },
    business_logo: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX_h1zNFEyNEJ7ESboE7v_VeFznMtxQ2Pp0w&s",
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
    staff_signature: {
      type: String,
      default:
        "https://e7.pngegg.com/pngimages/799/436/png-clipart-signature-logo-encapsulated-postscript-signature-miscellaneous-text.png",
    },
    role: {
      type: String,
      default: "Vendor",
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

const Business = mongoose.model("Business", businessSchema);

export default Business;
