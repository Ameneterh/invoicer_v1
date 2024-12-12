import express from "express";
import Business from "../models/business.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

// new business registration
router.post("/register", async (req, res) => {
  try {
    // check if business exists
    const business = await Business.find({ email: req.body.busness_email });
    if (business) {
      throw new Error(
        "Business already exists! Please, Register Another Business"
      );
    }

    // hashing password
    const hashedPassword = bcrypt.hashSync(req.body.business_password, 10);
    req.body.business_password = hashedPassword;

    // save new business
    const newBusiness = new Business(req.body);
    await newBusiness.save();
    res.send({
      success: true,
      message: "New Business Profile Created Successfully!",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// login endpoint
router.post("/login", async (req, res) => {
  try {
    // check if business exists
    const business = await Business.findOne({ email: req.body.business_email });
    if (!business) {
      throw new Error("Business not found!");
    }

    // verify password
    const validPassword = bcrypt.compareSync(
      req.body.business_password,
      business.password
    );

    if (!validPassword) {
      throw new Error("Invalid Credentials! Please, try again");
    }

    // generate user token
    const token = jwt.sign({ businessId: business._id }, process.env.JWT_TOKEN);

    // if all okay, send response
    res.send({
      success: true,
      message: "Business Successfully Logged in",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// edit business details

export default router;
