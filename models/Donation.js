import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
  name: String,
  email: String,
  foodType: String,
  quantity: String,
  location: String,
  phone: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Donation = mongoose.model("Donation", donationSchema);

export default Donation;