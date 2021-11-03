//* Import flight model from models directory 
import { Destination } from "../models/destination.js"


function newDestination (req, res) { 
  Destination.find({}, function (error, destinations){
    res.render('destinations/new', {
      destinations, 
      error,
    })
  })
}

//! Export pls
export {
newDestination as new,
}