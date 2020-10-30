import { Router } from 'express'

import SendForgotPasswordController from '../controller/SendForgotPasswordController'
import ResetPasswordController from '../controller/ResetPasswordController'

const router = Router()

const sendForgotPasswordController = new SendForgotPasswordController()
const resetPasswordController = new ResetPasswordController()

router.post('/forgot', sendForgotPasswordController.create)
router.post('/reset', resetPasswordController.create)

export default router
