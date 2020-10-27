import 'reflect-metadata'
import 'dotenv/config'
import express from 'express'

import connectDB from '@shared/typeorm'
import routes from '@shared/routes'
import uploadConfig from '@config/upload.config'

const app = express()
connectDB()

app.use(express.json())
app.use('/files', express.static(uploadConfig.tmpFolder))
app.use(routes)

export default app
