import mongoose from "mongoose"

const Schema = mongoose.Schema

// const flightSchema = new Schema({
//   content: String,
//   enum: ["AUS", "DFW", "LAX", "SFO", "SEA"]
// })


const flightSchema = new Schema({
  airline: { type: String, airport: ["American", "Southwest", "United"]},
  airport: {
    type: String,
    airport: ["DFW", "DEN", "LAX", "SAN"],
    default: ["DEN"], 
  },
  flightNo: {
    type: Number, required: true, min: 10, max: 9999
  },
  departs: {
    type: Date,
    // default:
  } 
})


const Flight = mongoose.model("Flight", flightSchema)

export {
  Flight,
}
