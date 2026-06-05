import server from '../../dist/server/server.js'

export default async (event) => {
  try {
    const request = event.request
    const response = await server.fetch(request)
    return response
  } catch (error) {
    console.error('Error:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
