import { withSSRContext } from 'aws-amplify'
import Layout from 'components/Layout'
import { P } from 'mui/Typography'

const Protected = ({ authenticated, username }) => {
  if (!authenticated) {
    return (
      <Layout title="Sorry">
        <P>Not authenticated</P>
      </Layout>
    )
  }
  return (
    <Layout title="Protected">
      <P>Hello {username} from SSR route!</P>
    </Layout>
  )
}

export const getServerSideProps = async ({ req, res }) => {
  const { Auth } = withSSRContext({ req })
  try {
    const user = await Auth.currentAuthenticatedUser()
    // console.log('user: ', user)
    return {
      props: {
        authenticated: true, 
        username: user.username,
        email: user.attributes.email,
        emailVerified: user.attributes.email_verified
      }
    }
  } catch (err) {
    res.writeHead(302, { Location: '/profile' })
    res.end()
  }
  return {
    props: {}
  }
}

export default Protected