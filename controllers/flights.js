//* Import flight model from models directory 
import { Flight } from "../models/flight.js"


//* function to display all flights to user 
function index(req, res) {
  Flight.find({}, function(error, flights) {
    console.log("list of flights", flights)
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

function create (req, res) {
  console.log(req.body)
  Flight.create(req.body, function(error, flight){
    if (error) {
      console.log(error)
      return res.redirect('/flights/new')
    }
  })
  res.redirect('/flights')
}

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render('flights/show', { 
      title: 'flight Detail', 
      flight: flight,
    })
  })
}

//! Export pls
export {
  index,
  newFlight as new,
  create, 
  show,
}