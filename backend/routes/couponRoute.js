import express from "express";
import {
  createCoupon,
  updateCoupon,
  deleteCoupon,
  getCoupon,
  getAllCoupons,
} from "../controller/couponCtrl.js";
import {authMiddleware, isAdmin} from '../middleware/authMiddleware.js'

const router = express.Router();


router.post("/",authMiddleware, isAdmin,createCoupon);