import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
  hero: {
    padding: theme.spacing(8, 0, 6),
  },
}))

const Hero = ({ children }) => {
  const classes = useStyles()
  return (
    <Container maxWidth="sm" component="main" className={classes.hero}>
      <>
        {children}
      </>
    </Container>
  )
}

export default Hero