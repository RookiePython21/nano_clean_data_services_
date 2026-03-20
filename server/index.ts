import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import paymentsRouter from './routes/payments.js'

const app = express()
const PORT = process.env.PORT || 3001
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173'

app.use(
  cors({
    origin: CLIENT_URL,
    methods: ['GET', 'POST'],
  })
)

app.use(express.json())

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'Controlled Environment Services API' })
})

app.use('/api', paymentsRouter)

app.listen(PORT, () => {
  console.log(`✓ CES API server running on http://localhost:${PORT}`)
  console.log(`  CLIENT_URL: ${CLIENT_URL}`)
})
