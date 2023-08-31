import Container from '@material-ui/core/Container'

const C = ({ children, ...others }) => <Container {...others}>{children}</Container>

export const XS = ({ children, ...others }) => (
  <C maxWidth="xs" component="main" {...others}>{children}</C>
)
export const SM = ({ children, ...others }) => (
  <C maxWidth="sm" component="main" {...others}>{children}</C>
)
export const MD = ({ children, ...others }) => (
  <C maxWidth="md" component="main" {...others}>{children}</C>
)
export const LG = ({ children, ...others }) => (
  <C maxWidth="lg" component="main" {...others}>{children}</C>
)
export const XL = ({ children, ...others }) => (
  <C maxWidth="xl" component="main" {...others}>{children}</C>
)

export default Container