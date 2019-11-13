import mongoose, { Schema } from 'mongoose';
const AutoIncrement = require('mongoose-sequence')(mongoose);

const ParkSchema = new mongoose.Schema({ 
    spot: { type: Number, unique: true, max: 16, min: 0},
    total: { type: Number, default: 0 },
    car: { type: Schema.Types.ObjectId, ref: 'Car' }
}).plugin(AutoIncrement, {id: 'total_seq', inc_field: 'total'});

export default mongoose.model('Park', ParkSchema, 'parks');