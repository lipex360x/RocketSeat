import 'reflect-metadata'
import 'dotenv/config'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'

import '@shared/logger/logger'
import AppError from '@shared/errors/AppError'
import connectDB from '@shared/typeorm'
import routes from '@shared/routes'
import uploadConfig from '@config/upload.config'

const app = express()
connectDB()

app.use(express.json())
app.use('/files', express.static(uploadConfig.tmpFolder))

app.use(routes)
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: 'error', message: err.message })
  }

  console.error(err)
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
})
console.log()
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: 'error', message: err.message })
  }
})

export default app
