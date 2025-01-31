import express from "express";
import {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getAllCategories,
} from "../controller/productCategoryCtrl.js";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, isAdmin, createCategory);
router.put("/:id", authMiddleware, isAdmin, updateCategory);
router.delete("/:id", authMiddleware, isAdmin, deleteCategory);
router.get("/:id", getCategory);
router.get("/",getAllCategories);

export default router;
