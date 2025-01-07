import express from "express";
import {
	addUser,
	deleteUser,
	getUser,
	updateUser,
} from "../controllers/user.controller";
const router = express.Router();
router.get("/user", getUser);
router.post("/user", addUser);
router.patch("/user", updateUser);
router.delete("/user", deleteUser);
export default router;
