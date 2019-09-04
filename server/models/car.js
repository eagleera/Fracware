import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId;

const carSchema = new Schema({
  model: { type: String, required: true },
  color: { type: String, required: true },
  licensePlate: { type: String, required: true },
  house: { type: ObjectId, required: true, ref: 'House' },
})

export default mongoose.model('Car', carSchema)
