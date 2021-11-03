import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'
const router = Router()

router.get('/', flightsCtrl.index)

// GET /flights/new
router.get('/new', flightsCtrl.new)
// /flights
router.post('/', flightsCtrl.create)
// flights/id
router.get('/:id', flightsCtrl.show)
// flights/id/tickets
router.post("/:id/tickets", flightsCtrl.createTicket)
// flights
router.post('/:id/destinations', flightsCtrl.addDestination)

export {
	router
}
