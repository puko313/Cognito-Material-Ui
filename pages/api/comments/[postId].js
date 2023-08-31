import { withSSRContext } from 'aws-amplify'
import { commentsByPostId } from 'src/graphql/queries'

export default async (req, res) => {
  const { API } = withSSRContext({ req })
  const { query: { postId }} = req;
  try {
    const { data } = await API.graphql({ 
      query: commentsByPostId, 
      variables: { postId },
      authMode: 'AMAZON_COGNITO_USER_POOLS'
    })
    res.json({ comments: data.commentsByPostId.items })
  } catch (err) {
    res.statusCode = 403
    res.json({ error: true })
  }
}