import express from "express";
import {
  createBrand,
  updateBrand,
  deleteBrand,
  getBrand,
  getAllBrand,
} from "../controller/brandCtrl.js";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, isAdmin, createBrand);
router.put("/:id", authMiddleware, isAdmin, updateBrand);
router.delete("/:id", authMiddleware, isAdmin, deleteBrand);
router.get("/:id", getBrand);
router.get("/",getAllBrand);

export default router;
