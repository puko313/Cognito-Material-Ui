import { API } from 'aws-amplify'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import LinearProgress from '@material-ui/core/LinearProgress'
import { getPost, listPosts } from 'src/graphql/queries'
import 'configureAmplify'
import Layout from 'components/Layout'
import Comments from 'components/Comments'
import checkUser from 'helpers/checkUser'

const useStyles = makeStyles(theme => ({
  comments: {
    marginTop: theme.spacing(2)
  }
}))

const Post = ({ post }) => {
  const classes = useStyles()
  const router = useRouter()
  const user = checkUser()
  if (router.isFallback) {
    return (
      <Layout>
        <LinearProgress />
      </Layout>
    )
  }
  return (
    <Layout title={post.name}>
      <>
        <Typography>{post.content}</Typography>
        <Typography variant="caption" gutterBottom>by: {post.username}</Typography>
        {user && (
          <div className={classes.comments}>
            <Comments postId={post.id} />
          </div>
        )}
      </>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const { data } = await API.graphql({ query: listPosts })
  const ids = data.listPosts.items.map(post => ({ params: { id: post.id }}))
  return { paths: ids, fallback: true }
}

export const getStaticProps = async ({ params }) => {
  const { id } = params
  const { data } = await API.graphql({ query: getPost, variables: { id }})
  return { props: { post: data.getPost } }
}

export default Post