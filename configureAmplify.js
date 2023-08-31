import Amplify from 'aws-amplify'
import config from 'src/aws-exports'

const isLocalhost = () => {
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
let updatedConfig;

if (config.oauth.redirectSignIn.includes(',')) {
  const [localSignIn, deployedSignIn] = config.oauth.redirectSignIn.split(',')
  const [localSignOut, deployedSignOut] = config.oauth.redirectSignOut.split(',')
  
  updatedConfig = {
    ...config,
    oauth: {
      ...config.oauth,
      redirectSignIn: isLocalhost ? localSignIn : deployedSignIn,
      redirectSignOut: isLocalhost ? localSignOut : deployedSignOut
    }
  }
} else {
  updatedConfig = config;
}

Amplify.configure({
  ...updatedConfig,
  ssr: true
})