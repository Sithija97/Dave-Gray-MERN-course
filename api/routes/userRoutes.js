import express from "express";
export const userRouter = express.Router();
import {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
} from "../controllers/userController";

userRouter
  .route("/")
  .get(getAllUsers)
  .post(createNewUser)
  .patch(updateUser)
  .delete(deleteUser);
