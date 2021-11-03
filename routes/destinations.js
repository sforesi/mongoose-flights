import { Router } from 'express'
import * as destinationsCtrl from '../controllers/destinations.js'
const router = Router()

// localhost3000/destinations/new
router.get('/new', destinationsCtrl.new)

// localhost3000/destinations/
router.post('/', destinationsCtrl.create)

//* ALL PATHS BUILT IN THIS FILE WILL FOLLOW THE BASE PATH SET IN SERVER.JS!!!!!!!!!

//! ALL THE PATHS IN THIS FILE WILL BE APPENDED TO THE BASE PATH!!!! They don't stand alone, not isolated. They are added TO the BASE PATH.

export {
	router
}
