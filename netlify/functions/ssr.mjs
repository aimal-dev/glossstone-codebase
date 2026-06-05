export default async (event) => {
  try {
    // Dynamically import the server at runtime
    const { default: server } = await import('../../dist/server/server.js')
    
    const request = event.request
    const response = await server.fetch(request)
    
    return response
  } catch (error) {
    console.error('SSR Error:', error)
    return new Response(`Error: ${error.message}`, { status: 500 })
  }
}
