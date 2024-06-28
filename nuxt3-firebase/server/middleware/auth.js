export default defineEventHandler((event) => {
    const h = getHeaders(event)
    if (h.authentication) {
        event.context.user = { role: 'admin'}
    } else {
        setResponseStatus(event, 403)
        return { error: 'not allowed'}
    }
    
  })