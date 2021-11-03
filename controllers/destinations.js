//* Import destination model from models directory 
import { Destination } from "../models/destination.js"


function newDestination (req, res) { 
  Destination.find({}, function (error, destinations){
    res.render('destinations/new', {
      destinations, 
      error,
    })
  })
}

function create (req, res) {
  Destination.create(req.body, function (error, destination) {
    console.log('see me', error)
    res.redirect('/destinations/new')
  })
}

//! Export pls
export {
newDestination as new,
create,
}