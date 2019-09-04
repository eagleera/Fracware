import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId;

const residentSchema = new Schema({
  house: { type: ObjectId, required: true, ref: 'House' },
  user: { type: ObjectId, ref: 'User' },
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: String, required: true },
  car: { type: ObjectId, ref: 'Car' },
})

export default mongoose.model('Resident', residentSchema)
