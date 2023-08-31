import { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { useRouter } from 'next/router'
import Layout from 'components/Layout'
import { H3, P } from 'mui/Typography'

const ProtectedClient = () => {
  const [user, setUser] = useState(null)
  const router = useRouter()
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => setUser(user))
      .catch(() => router.push('/profile'))
  }, [])
  if (!user) return null
  return (
    <Layout title="Protected Client Route">
      <H3>Hello {user.username}</H3>
      <P>The username is derived from the <code>Auth.currentAuthenticatedUser()</code></P>
    </Layout>
    
  )
}

export default ProtectedClient