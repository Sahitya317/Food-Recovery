import express from "express";
import Donation from "../models/Donation.js";

const router = express.Router();

// CREATE DONATION
router.post("/", async (req, res) => {
  try {
    const donation = new Donation(req.body);
    await donation.save();

    res.status(201).json({ message: "Donation submitted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET ALL DONATIONS
router.get("/", async (req, res) => {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 });
    res.json(donations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE donation
router.delete("/:id", async (req, res) => {
  try {
    await Donation.findByIdAndDelete(req.params.id);
    res.json({ message: "Donation deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;