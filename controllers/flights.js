//* Import flight model from models directory 
import { Flight } from "../models/flight.js"


//* function to display all flights to user 
function index(req, res) {
  Flight.find({}, function(error, flight) {
    res.render("flight/index", {
      flight,
      error,
      title: "All Flights"
    })
  })
}

export {
  index,
}