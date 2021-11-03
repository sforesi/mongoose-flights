//* Import flight model from models directory 
import { Destination } from "../models/destination.js"
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

// function show(req, res) {
//   Flight.findById(req.params.id, function (err, flight) {
//     console.log('flight', flight)
//     res.render('flights/show', { 
//       title: 'flight Detail', 
//       flight: flight,
      
//     })
//   })
// }

function show(req, res) { 
  Flight.findById(req.params.id)
  .populate("destinations")
  .exec(function(err,flight){
    Destination.find({_id: {$nin: flight.destinations}}, function (err, destinations){
      res.render('flights/show', {
        title: 'flight detail',
        flight: flight,
        destinations: destinations
      })
    })
  })
}

function createTicket(req, res) {
  Flight.findById(req.params.id, function(error, flight) {
    console.log('BODY', req.body)
    console.log('ERROR', error)
    flight.tickets.push(req.body)
    console.log(flight)
    flight.save(function(err) {
      console.log('error', err)
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

// function addDestination (req, res) {
//   Flight.findById(req.params.id) 
//   .exec(function(err,flight){
//     console.log('see me', req.body)
//   })
// }


function addDestination (req, res) { 
  Flight.findById(req.params.id, function(error, flight){
    console.log("FLIGHT", flight)
    console.log("REQ", req.body.destinationId)
    flight.destinations.push(req.body.destinationId)
    flight.save(function(error, flight) {
      res.redirect(`/flights/${flight._id}`)
    })

  })
  
}

//! Export pls
export {
  index,
  newFlight as new,
  create, 
  show,
  createTicket,
  addDestination,
}