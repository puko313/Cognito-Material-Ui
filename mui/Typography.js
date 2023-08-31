import Typography from '@material-ui/core/Typography'

const T = ({ children, ...others }) => <Typography { ...others}>{children}</Typography>

export const H1 = ({ children, ...others }) => <T variant="h1" {...others}>{children}</T>
export const H2 = ({ children, ...others }) => <T variant="h2" {...others}>{children}</T>
export const H3 = ({ children, ...others }) => <T variant="h3" {...others}>{children}</T>
export const H4 = ({ children, ...others }) => <T variant="h4" {...others}>{children}</T>
export const H5 = ({ children, ...others }) => <T variant="h5" {...others}>{children}</T>
export const H6 = ({ children, ...others }) => <T variant="h6" {...others}>{children}</T>
export const Subtitle1 = ({ children, ...others }) => <T variant="subtitle1" {...others}>{children}</T>
export const Subtitle2 = ({ children, ...others }) => <T variant="subtitle2" {...others}>{children}</T>
export const Body1 = ({ children, ...others }) => <T variant="body1" {...others}>{children}</T>
export const Body2 = ({ children, ...others }) => <T variant="body2" {...others}>{children}</T>
export const Button = ({ children, ...others }) => <T variant="button" display="block" {...others}>{children}</T>
export const Caption = ({ children, ...others }) => <T variant="caption" display="block" {...others}>{children}</T>
export const Overline = ({ children, ...others }) => <T variant="overline" display="block" {...others}>{children}</T>
export const P = ({ children, ...others }) => <Body1 {...others}>{children}</Body1>

export default Typography