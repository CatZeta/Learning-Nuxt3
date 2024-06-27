// Server-side API endpoint to read the user cookie
import { getCookie } from 'h3'  
export default defineEventHandler(event => {
    // Read cookie
    let cookie = getCookie(event, 'cookie')

  
    // Send JSON response
    return { cookie }
  })