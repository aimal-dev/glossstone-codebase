import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Import the server handler from the build output
const serverPath = join(__dirname, '../../dist/server/server.js')
const serverModule = await import(serverPath)
const handler = serverModule.default

export default async (req, context) => {
  try {
    // Convert Netlify request format to standard fetch Request
    const url = new URL(req.url)
    const headers = new Headers(req.headers)

    const request = new Request(url, {
      method: req.method,
      headers,
      body: ['GET', 'HEAD'].includes(req.method) ? undefined : req.body,
    })

    // Call the TanStack Start server handler
    const response = await handler(request)
    
    return new Response(response.body, {
      status: response.status,
      headers: response.headers,
    })
  } catch (error) {
    console.error('SSR Error:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
