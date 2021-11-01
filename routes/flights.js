import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

// GET /movies/new
router.get('/', flightsCtrl.index)
router.get('/new', flightsCtrl.new)



export {
	router
}
