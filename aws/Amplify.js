import Amplify from 'aws-amplify'
import config from 'src/aws-exports'

const isLocalhost = () => {
  // Check if client side
  if (typeof window !== 'undefined') {
    if (
      window.location.hostname === "localhost" ||
      window.location.hostname === "[::1]" ||
      window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
    ) {
      return true
    }
  }
  return false
}

const configWithSingleLinks = () => {
  if (!config.oauth.redirectSignIn.includes(',')) {
    return config
  }
  const [localSignIn, signIn] = config.oauth.redirectSignIn.split(',')
  const [localSignOut, signOut] = config.oauth.redirectSignOut.split(',')
  
  return {
    ...config,
    oauth: {
      ...config.oauth,
      redirectSignIn: isLocalhost() ? localSignIn : signIn,
      redirectSignOut: isLocalhost() ? localSignOut : signOut
    }
  }
}

export const configure = () => {
  const newConfig = configWithSingleLinks();

  Amplify.configure({
    ...newConfig,
    ssr: true
  })
}

export default Amplify