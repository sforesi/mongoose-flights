//* Import flight model from models directory 
import { Flight } from "../models/flight.js"


//* function to display all flights to user 
function index(req, res) {
  Flight.find({}, function(error, flight) {
    res.render("flights/index", {
      flights,
      error,
      title: "All Flights"
    })
  })
}

//* function to take you to new flight view
function newFlight (req, res) {
  res.render('flights/new', {
    title: "Add Flight"
  })
}

//! Export pls
export {
  index,
  newFlight as new,
}