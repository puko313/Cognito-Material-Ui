import { useState } from 'react'
import PropTypes from 'prop-types'
import { Auth } from 'aws-amplify'
import { makeStyles } from '@material-ui/core/styles'
import MuiAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Icon from '@material-ui/core/Icon'
import MuiLink from '@material-ui/core/Link'
import Link from './Link'
import SignIn from './SignIn'
import useUser from 'hooks/useUser'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    // [theme.breakpoints.up('sm')]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   marginLeft: drawerWidth,
    // },
  },
  // toolbar: {
  //   flexWrap: 'wrap',
  // },
  toolbar: theme.mixins.toolbar,
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: theme.palette.primary.contrastText,
  },
  button: {
    margin: theme.spacing(1, 1.15),
    background: 'transparent',
    borderColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.contrastText,
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}))

const AppBar = ({ siteName, window }) => {
  const classes = useStyles()
  const { loading, user } = useUser()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const container = window !== undefined ? () => window().document.body : undefined
  return (
    <MuiAppBar position="fixed" color="primary" elevation={0} className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer" onClick={handleDrawerToggle}>
          <Icon className="fas fa-bars" />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.title} noWrap>
          {siteName ? <Link href="/" color="inherit">{siteName}</Link> : ''}
        </Typography>
        <nav>
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{ paper: classes.drawerPaper }}
            >
              <div className={classes.toolbar} />
              <Divider />
              <List>
                <>
                  <ListItem button key="home" component={Link} href="/">
                    <>
                      <ListItemIcon>
                        <Icon className="fas fa-home" color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Home" />
                    </>
                  </ListItem>
                  <ListItem button key="posts" component={Link} href="/posts">
                    <>
                      <ListItemIcon>
                        <Icon className="fas fa-file-alt" color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Posts" />
                    </>
                  </ListItem>
                  {!loading && user ? (
                    <>
                      <ListItem button key="profile" component={Link} href="/profile">
                        <>
                          <ListItemIcon>
                            <Icon className="fas fa-user-circle" color="primary" />
                          </ListItemIcon>
                          <ListItemText primary="Profile" />
                        </>
                      </ListItem>
                      <ListItem button key="protected" component={Link} href="/protected">
                        <>
                        <ListItemIcon>
                          <Icon className="fas fa-lock" color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Protected" />
                        </>
                      </ListItem>
                      <ListItem button key="protected-client" component={Link} href="/protected-client">
                        <>
                        <ListItemIcon>
                          <Icon className="fas fa-user-lock" color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Protected Client" />
                        </>
                      </ListItem>
                      <ListItem button key="create-post" component={Link} href="/post/create">
                        <>
                        <ListItemIcon>
                          <Icon className="fas fa-plus-circle" color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Create Post" />
                        </>
                      </ListItem>
                      <ListItem button key="logout" onClick={() => Auth.signOut()}>
                        <ListItemIcon>
                          <Icon className="fas fa-door-open" color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                      </ListItem>
                    </>
                  ) : (
                    <ListItem button key="profile" component={Link} href="/profile">
                      <>
                        <ListItemIcon>
                          <Icon className="fas fa-user-lock" color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Login" />
                        </>
                      </ListItem>
                  )}
                </>
              </List>
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <>
              <Link variant="button" color="textPrimary" href="/posts" className={classes.link}>Posts</Link>
              {!loading && user ? (
                <>
                  <Link variant="button" color="textPrimary" href="/protected" className={classes.link}>Protected</Link>
                  <Link variant="button" color="textPrimary" href="/protected-client" className={classes.link}>Protected Client</Link>
                  <Link variant="button" color="textPrimary" href="/post/create" className={classes.link}>Create Post</Link>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <Icon className="fas fa-user-circle" />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}><Link href="/profile">Profile</Link></MenuItem>
                    <MenuItem onClick={() => Auth.signOut()}><MuiLink>Logout</MuiLink></MenuItem>
                  </Menu>
                </>
              ) : (
                <>
                  <SignIn />
                  {/* <Button href="/profile" color="default" variant="outlined" className={classes.button}>Login</Button>
                  <Button variant="outlined" className={classes.button} onClick={() => Auth.federatedSignIn({provider: 'Facebook'})}>Facebook</Button>
                  <Button variant="outlined" className={classes.button} onClick={() => Auth.federatedSignIn({provider: 'Google'})}>Google</Button>
                  <Button variant="outlined" className={classes.button} onClick={() => Auth.federatedSignIn({provider: 'Amazon'})}>Amazon</Button>
                  <Button variant="outlined" className={classes.button} onClick={() => Auth.federatedSignIn()}>Hosted UI</Button> */}
                </>
              )}
            </>
          </Hidden>
        </nav>
      </Toolbar>
    </MuiAppBar>
  )
}

AppBar.propTypes = {
  siteName: PropTypes.string,
  window: PropTypes.func
}

export default AppBar