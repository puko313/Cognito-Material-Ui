import { useState } from 'react'
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignUp } from '@aws-amplify/ui-react'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button, { Outlined } from 'mui/Button'

const useStyles = makeStyles(theme => ({
  root: {
    '--background-color': theme.palette.background.default,
    '--border-radius': `${theme.shape.borderRadius}px`,
    '--box-shadow': '1px 1px 4px 0 rgba(0, 0, 0, 0.15)',
    '--container-align': 'center',
    '--container-display': 'flex',
    '--container-height': '100vh',
    '--container-justify': 'center',
    '--margin-bottom': theme.spacing(1),
    '--padding': theme.spacing(3, 4),
    // '--min-width': '20rem',
    // '--width': '28.75rem'
  }
}))

const SignIn = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <Outlined onClick={handleOpen}>Sign In</Outlined>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="forrm-dialog-title">Sign In</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <AmplifyAuthenticator usernameAlias="username">
              <AmplifySignUp
                slot="sign-up"
                usernameAlias="username"
                headerText="Sign in to your account"
                signInText="Sign In"
                formFields={[
                  { type: "username" },
                  { type: "password" },
                  { type: "email" }
                ]}
                submitButtonText="Create Account"
              ></AmplifySignUp>
              <AmplifySignIn
                usernameAlias="username"
                headerText="Sign In"
                slot="sign-in"
                submitButtonText="Sign In"
              ></AmplifySignIn>
            </AmplifyAuthenticator>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleClose} color="primary">Sign In</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default SignIn