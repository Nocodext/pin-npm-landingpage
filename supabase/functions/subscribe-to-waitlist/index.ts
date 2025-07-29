import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { email } = await req.json()

    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // MailterLite API configuration
    const MAILTERLITE_API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiN2NkNmRlZGIxMjUzNWFlYjhmNjIzOTU1NTU4M2MwODhlMDZmNTBiN2Q5N2UxM2VlYjc3ZTE3MDYxODY2ODljZWUyMDhjOWRlOTM2MTFkZGIiLCJpYXQiOjE3NTM4MTU4NTguMzc0NjQsIm5iZiI6MTc1MzgxNTg1OC4zNzQ2NDIsImV4cCI6NDkwOTQ4OTQ1OC4zNjk1NTMsInN1YiI6IjE1MzM5OTkiLCJzY29wZXMiOltdfQ.LFaMT0iAezRbzvXljwWKbFwVjqt-1kZGJvRCw0ufzce7baonoABGBoIIBWpS9YLR0HJ13wqA4hG50YKleFUpFxQgh1k_8Pl99Wfrai2qy2ehmgjIdilbtNUEcUQfeHrqSDVhNziQtdEv2pmam66ASXKDPFNiXfKGgvAcCu50U0QgzHy1XmGqj1XW6XqoH5EvEfMBZafOUl5P_4sD8LUOCU4sdttjbWMXs3IeOTSUUSFy7C8iiypVkOgxjrXfbtewZihZuQcUayXNLGQRhkR8rHo9NJ4VleujSSPVMSceVQRqKnMvHXjaV52p0kuSNyoXCGNJL2wnk1eH8AnJ-j9k_f2mJonkIqPibGLF_6gfDfhGtxFdoaMyJ8tYQZiuimX3YAiqStvEUlyz1-2lQKeO9UDEbBwr34LAG3dQ0pmKRSkgeR9uOd6vCRTq1g_RmmFa_yvJywqINTbaXsj212b_rT3J-PKMtE0jHYtfkNfxTH5XzOG63O8el4XAaZbGqnph924wtASxEl3hwprCuMpwIIB8E1ZW8MZvYuRq5_xbf-7fQGsQcY76Y_oQYmplms9y39UP25OPEu6tdUQ5_LicAqewFUq3b1qYjgBpGUdeEdh37KzePRY-c54VjrUIQLR4Dt_XESb00_pNxDMH2bCHJZVQXuhAemgMrVWqqy9QZkQ'
    const GROUP_ID = '154366128875898210'

    // Add subscriber to MailterLite
    const response = await fetch(`https://connect.mailerlite.com/api/subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MAILTERLITE_API_KEY}`,
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        groups: [GROUP_ID],
        status: 'active'
      })
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('MailterLite API error:', errorData)
      
      // Check if subscriber already exists
      if (response.status === 422) {
        return new Response(
          JSON.stringify({ success: true, message: 'Email already subscribed!' }),
          { 
            status: 200, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        )
      }
      
      throw new Error(`MailterLite API error: ${response.status}`)
    }

    const data = await response.json()
    console.log('Successfully added subscriber:', data)

    return new Response(
      JSON.stringify({ success: true, message: 'Successfully subscribed to waitlist!' }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to subscribe to waitlist' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})