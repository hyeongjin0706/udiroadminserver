import express from "express";
import * as userController from "../controller/user.js"

const router = express.Router();

router.getAll('/', userController.getAll);

export default router;