import express from "express";
import {
  getProfile,
  loginUser,
  registerUser,
  updateProfile,
  bookAppointment,
  listAppointment,
  cancelAppointment,
} from "../controllers/userController.js";
import userAuth from "../middlewears/userAuth.js";
import upload from "../middlewears/multer.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

userRouter.get("/get-profile", userAuth, getProfile);
userRouter.post(
  "/update-profile",
  upload.single("image"),
  userAuth,
  updateProfile
);
userRouter.post("/book-appointment", userAuth, bookAppointment);
userRouter.get("/appointments", userAuth, listAppointment);
userRouter.post("/cancel-appointment", userAuth, cancelAppointment);


export default userRouter;
