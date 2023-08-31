import { useState, useEffect } from 'react'
import { API } from 'aws-amplify'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import LinearProgress from '@material-ui/core/LinearProgress'
import Link from 'components/Link'
import Layout from 'components/Layout'
import { listPosts } from 'src/graphql/queries'
import { P } from 'mui/Typography'

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
  }
}))

const Posts = () => {
  const classes = useStyles()
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await API.graphql({ query: listPosts })
      if (data.listPosts.items.length > 0) {
        setPosts(data.listPosts.items)
      } else {
        setPosts([])
      }
    }
    fetchPosts()
  }, [])
  return (
    <Layout title="Posts">
      {posts.length > 0 ? (
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} justify="center" alignItems="flex-start">
            {posts.map(post => (
              <Grid item key={post.id} xs={12} sm={5}>
                <Card variant="outlined" className={classes.card}>
                  <CardActionArea>
                    <Link href={`/post/[id]`} as={`/post/${post.id}`} color="inherit">
                      <CardHeader title={post.name} />
                      <CardContent>
                        <P>{`${post.content.substring(0, 80)}`}&hellip;</P>
                      </CardContent>
                    </Link>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : (
        <LinearProgress />
      )}
    </Layout>
  )
}

export default Posts