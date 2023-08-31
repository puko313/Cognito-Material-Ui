import Button from '@material-ui/core/Button'

const B = ({ children, ...others }) => <Button {...others}>{children}</Button>

export const Contained = ({ children, ...others }) => (
  <B variant="contained" {...others}>{children}</B>
)

export const Outlined = ({ children, ...others }) => (
  <B variant="outlined" {...others}>{children}</B>
)

export const Small = ({ children, ...others }) => (
  <B size="small" {...others}>{children}</B>
)

export const Medium = ({ children, ...others }) => (
  <B size="medium" {...others}>{children}</B>
)

export const Large = ({ children, ...others }) => (
  <B size="large" {...others}>{children}</B>
)

export default Button
