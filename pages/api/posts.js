import { API } from 'aws-amplify'
import { listPosts } from 'src/graphql/queries'

export default async (_, res) => {
  try {
    const { data } = await API.graphql({ query: listPosts })
    res.json({ posts: data.listPosts.items })
  } catch (err) {
    res.json({ error: true })
  }
}