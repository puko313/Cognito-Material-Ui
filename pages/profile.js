import { Auth } from 'aws-amplify'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react'
import Typography from '@material-ui/core/Typography'
import Layout from 'components/Layout'
import Button from '@material-ui/core/Button'
import useUser from 'hooks/useUser'

const Profile = () => {
  const { loading, user } = useUser()
  return (
    <Layout title="Profile">
      {!loading && user ? (
        <>
          <Typography>Hello {user.username}!</Typography>
        </>
      ) : (
        <>
          <AmplifyAuthenticator />
          <Button onClick={() => Auth.federatedSignIn({provider: 'Facebook'})}>Facebook</Button>
          <Button onClick={() => Auth.federatedSignIn({provider: 'Google'})}>Google</Button>
          <Button onClick={() => Auth.federatedSignIn({provider: 'Amazon'})}>Amazon</Button>
        </>
      )}
    </Layout>
  )
}

export default Profile