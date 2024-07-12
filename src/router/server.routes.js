import express from 'express'
import { updateDollarPrice } from '../controllers/updateDollarPrice.controller.js'


const router = express.Router()

router.get('/update', updateDollarPrice)

export default router
