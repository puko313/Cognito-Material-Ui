import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import MuiLink from '@material-ui/core/Link'
import Link from 'components/Link'
import Layout from 'components/Layout'
import Hero from 'components/Hero'
import { H2, H5, P } from 'mui/Typography'
import { MD } from 'mui/Container'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  code: {
    background: 
      theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[800],
    borderRadius: '5px',
    padding: '0.75rem',
    fontSize: '1.1rem',
    fontFamily: 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace'
  },
  card: {
    '& :hover': {
      textDecoration: 'none'
    }
  },
  primaryColor: {
    color: theme.palette.primary.main
  },
  secondaryColor: {
    color: theme.palette.secondary.main
  }
}))

const GridItemContent = ({ title, children }) => (
  <>
    <CardHeader title={title}/>
    <CardContent>
      <P>{children}</P>
    </CardContent>
  </>
)

const GridItem = ({ href, title, children, ...others }) => {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={5} {...others}>
      <Card variant="outlined" className={classes.card}>
        {href ? (
          <CardActionArea>
            {href.charAt(0) === '/' ? (
              <Link href={href} color="inherit">
                <GridItemContent title={title}>{children}</GridItemContent>
              </Link>
            ) : (
              <MuiLink href={href} color="inherit">
                <GridItemContent title={title}>{children}</GridItemContent>
              </MuiLink>
            )}
          </CardActionArea>
        ) : (
          <GridItemContent title={title}>{children}</GridItemContent>
        )}
      </Card>
    </Grid>
  )
}

const Index = () => {
  const classes = useStyles()
  return (
    <Layout headTitle="Next.js Amazon Cognito w/ Material-UI">
      <>
        <Hero>
          <H2 component="h1" align="center" color="textPrimary" gutterBottom>
            Welcome to <Link href="https://nextjs.org">Next.js!</Link>
          </H2>
          <H5 component="p" align="center" color="textSecondary">
            Get started by editing{' '}
            <code className={classes.code}>pages/index.js</code>
          </H5>
        </Hero>
        <MD>
          <Grid container spacing={5} justify="center" alignItems="flex-start">
            <GridItem key="documentation" href="/theme" title="MUI Theme &rarr;">
              Update the <span className={classes.primaryColor}>primary</span> and <span className={classes.secondaryColor}>secondary</span> colors to customize your app.
            </GridItem>
            <GridItem key="learn" href="https://nextjs.org/learn" title="Learn &rarr;">
              Learn about Next.js in an interactive course with quizzes!
            </GridItem>
            <GridItem key="examples" href="https://github.com/vercel/next.js/tree/master/examples" title="Examples &rarr;">
              Discover and deploy boilerplate example Next.js projects.
            </GridItem>
            <GridItem key="deploy" href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" title="Deploy &rarr;">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </GridItem>
          </Grid>
        </MD>
      </>
    </Layout>
  )
}

export default Index