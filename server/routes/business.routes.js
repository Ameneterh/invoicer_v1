import express from "express";
import Business from "../models/business.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// new business registration
router.post("/register", async (req, res) => {
  try {
    // check if business exists
    const business = await Business.findOne({ email: req.body.business_email });
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
    const business = await Business.findOne({
      business_email: req.body.business_email,
    });
    if (!business) {
      throw new Error("This account not in Database!");
    }

    // check if business account is blocked
    if (business.status !== "active" && business.status !== "pending") {
      throw new Error("This account is blocked, please contact Admin!");
    }

    // check if business account is inactive
    if (business.status === "pending") {
      throw new Error("This account is not yet approved! Please contact Admin");
    }

    // verify password
    const validPassword = bcrypt.compareSync(
      req.body.business_password,
      business.business_password
    );

    if (!validPassword) {
      throw new Error("Invalid Credentials! Please, try again");
    }

    // generate user token
    const token = jwt.sign({ businessId: business._id }, process.env.JWT_TOKEN);

    // if all okay, send response
    res.send({
      success: true,
      message: "Login Successful!",
      data: token,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// get current business
router.get("/get-logged-business", authMiddleware, async (req, res) => {
  try {
    const business = await Business.findById(req.body.businessId);
    res.send({
      success: true,
      message: "Business fetched successfully!",
      data: business,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// edit business details
router.put("/edit-business-details/:id", authMiddleware, async (req, res) => {
  try {
    await Business.findByIdAndUpdate(req.params.id, req.body);
    res.send({
      success: true,
      message: "Business profile updated successfully!",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

export default router;
