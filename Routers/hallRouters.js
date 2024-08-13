import express from "express";
import {
  bookedCount,
  createCustomers,
  createHalls,
  customer_Data,
  filterCustomers,
  filterHalls,
  getDetailHall,
} from "../Controllers/hallControllers.js"; // Ensure this path is correct

const router = express.Router();

router.get("/getDetailHall", getDetailHall);
router.post("/createHalls", createHalls);
router.get("/customer_Data", customer_Data);
router.post("/createCustomers", createCustomers);
router.get("/filterHalls", filterHalls);
router.get("/filterCustomers", filterCustomers);
router.get("/bookedCount", bookedCount);

export default router;
