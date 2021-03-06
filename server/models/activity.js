import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId;

const activitySchema = new Schema({
  date: { type: Date, required: true },
  state: { type: String, required: true },
  capacity: { type: Number, required: true },
  peopleAttending: { type: [ObjectId], ref: 'Resident' },
})

export default mongoose.model('Activity', activitySchema)
