import mongoose from 'mongoose';

const CarSchema = new mongoose.Schema({
    licensePlate: { type: String }
})

export default mongoose.model("Car", CarSchema, 'cars');