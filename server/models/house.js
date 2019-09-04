import mongoose from 'mongoose'

const Schema = mongoose.Schema

const houseSchema = new Schema({
  address: { type: String, required: true },
  number: { type: Number, required: true },
})

export default mongoose.model('House', houseSchema)
