import mongoose from "mongoose"

const Schema = mongoose.Schema

const destinationSchema = new Schema({
  destinations: {type: ObjectId, ref: 'Destination'}
})

const Destination = mongoose.model("Destination", destinationSchema)


export {
Destination, 
}