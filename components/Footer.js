import Image from 'next/image'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import { Body2 } from 'mui/Typography'
import { MD } from 'mui/Container'

const useStyles = makeStyles(theme => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(4),
    },
  },
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <MD component="footer" className={classes.footer}>
      <Box mt={5}>
        <Body2 color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://github.com/moseley/cognito-material-ui">
            App name
          </Link>{' '}
          {new Date().getFullYear()}
          {'. Powered by '}
          <Image src="/vercel.svg" alt="Vercel" height={14} width={62} />
        </Body2>
      </Box>
    </MD>
  )
}

export default Footer