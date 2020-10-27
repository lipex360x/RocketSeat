import 'reflect-metadata'
import express from 'express'

import connectDB from '@shared/typeorm'
import routes from '@shared/routes'

const app = express()
connectDB()

app.use(express.json())
app.use(routes)

export default app
