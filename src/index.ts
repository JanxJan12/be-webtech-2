import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import studentsRoute from './students/student.route.js'

const app = new Hono()

// ✅ MANUAL CORS (NO PACKAGE NEEDED)
app.use('*', async (c, next) => {
  c.header('Access-Control-Allow-Origin', '*')
  c.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  c.header('Access-Control-Allow-Headers', 'Content-Type')

  if (c.req.method === 'OPTIONS') {
    return c.text('', 500)
  }

  await next()
})

app.get('/', (c) => c.text('Hello Hono!'))

app.route('/students', studentsRoute)

serve({
  fetch: app.fetch,
  port: 3000
})

console.log('Server is running on http://localhost:3000')