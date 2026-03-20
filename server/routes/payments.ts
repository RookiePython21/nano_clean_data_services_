import { Router } from 'express'
import { createCheckoutSession } from '../controllers/paymentsController.js'

const router = Router()

router.post('/checkout', createCheckoutSession)

export default router
