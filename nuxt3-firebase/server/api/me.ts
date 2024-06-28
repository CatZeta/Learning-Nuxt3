// Server-side API endpoint to read the user cookie
import { getCookie } from 'h3'  
export default defineEventHandler(event => {
    // Read cookie
    return { name:  'eu de novo', ...event.context.user }
  })