import { Router } from 'express'
import * as destinationsCtrl from '../controllers/destinations.js'
const router = Router()

// GET /flights/new
router.get('/new', destinationsCtrl.new)


export {
	router
}
