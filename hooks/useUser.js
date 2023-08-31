import { useState, useEffect } from 'react'
import { Auth, Hub } from 'aws-amplify'

const useUser = () => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const [custom, setCustom] = useState(null)
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const signedInUser = await Auth.currentAuthenticatedUser()
        setUser(signedInUser)
      } catch (err) { 
        setUser(null)
      }
      setLoading(false)
    }
    checkAuth()
    const unsubscribe = Hub.listen('auth', ({ payload: {event, data} }) => {
      switch (event) {
        case 'signIn': 
          setUser(data)
          break
        case 'signOut':
          setUser(null)
          setCustom(null)
          break
        case 'customOAuthState':
          setCustom(data)
          break
        default:
          break
      }
    })
    return () => unsubscribe()
  }, [])

  return { loading, user, custom }
}

export default useUser