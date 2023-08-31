import Head from 'next/head'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { H2 } from 'mui/Typography'
import { XS, SM, MD, LG, XL } from 'mui/Container'
import AppBar from './AppBar'
import Footer from './Footer'

const useStyles = makeStyles((theme) => ({
  '@global': {
    code: {
      background: 
        theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[800],
      borderRadius: '5px',
      padding: '0.75rem',
      fontSize: '1.1rem',
      fontFamily: 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace'
    },
    ':root': {
      '--amplify-background-color': theme.palette.background.default,
      '--amplify-border-radius': `${theme.shape.borderRadius}px`,
      '--amplify-font-family': theme.typography.fontFamily,
      // '--amplify-text-xxs': theme.typography.caption.fontSize,
      // '--amplify-text-xs': theme.typography.body2.fontSize,
      // '--amplify-text-sm': theme.typography.body2.fontSize,
      // '--amplify-text-md': theme.typography.body1.fontSize,
      // '--amplify-text-lg': theme.typography.h6.fontSize,
      // '--amplify-text-xl': theme.typography.h5.fontSize,
      // '--amplify-text-xxl': theme.typography.h4.fontSize,
      '--amplify-primary-color': theme.palette.primary.main,
      // '--amplify-primary-contrast': theme.palette.primary.contrastText,
      '--amplify-primary-tint': theme.palette.primary.light,
      '--amplify-primary-shade': theme.palette.primary.dark,
      // '--amplify-secondary-color': theme.palette.text.primary,
      // '--amplify-secondary-contrast': theme.palette.secondary.contrastText,
      // '--amplify-secondary-tint': theme.palette.secondary.light,
      // '--amplify-secondary-shade': theme.palette.secondary.dark,
      '--amplify-tertiary-color': theme.palette.secondary.main,
      // '--amplify-tertiary-contrast': 'var(–amplify-white)',
      // '--amplify-tertiary-tint': '#7da1ff',
      // '--amplify-tertiary-shade': '#537BE5',
      // '--amplify-grey': theme.palette.grey[600],
      // '--amplify-light-grey': theme.palette.grey[400],
      // '--amplify-white': theme.palette.common.white,
      // '--amplify-red': theme.palette.error.main,
    },
  },
  offset: theme.mixins.toolbar,
})) 

const Layout = ({ children }) => {
  const classes = useStyles()
  const siteName = 'Next.js Project'
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar siteName={siteName} />
      <div className={classes.offset} />
      <Container>
        <Box my={4}>
          <>
            {children}
          </>
        </Box>
      </Container>
      <Footer />
    </>
  )
}

export const Title = ({ children, ...others }) => (
  <H2 component="h1" color="textPrimary" gutterBottom {...others}>
    {children}
  </H2>
)

export const XSLayout = ({ children }) => <Layout><XS>{children}</XS></Layout>
export const SMLayout = ({ children }) => <Layout><SM>{children}</SM></Layout>
export const MDLayout = ({ children }) => <Layout><MD>{children}</MD></Layout>
export const LGLayout = ({ children }) => <Layout><LG>{children}</LG></Layout>
export const XLLayout = ({ children }) => <Layout><XL>{children}</XL></Layout>

Layout.propTypes = {
  children: PropTypes.element
}

export default Layout