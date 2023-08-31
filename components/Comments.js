import { useState, useEffect } from 'react'
import { API } from 'aws-amplify'
import { makeStyles } from '@material-ui/core/styles' 
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { commentsByPostId } from 'src/graphql/queries'
import { createComment } from 'src/graphql/mutations'
import checkUser from 'helpers/checkUser'
import nanoid from 'nanoid'

const initialState = { message: '' }

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: theme.spacing(2)
  },
  card: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  formElement: {
    marginBottom: theme.spacing(2)
  }
}))

const Comments = ({ postId }) => {
  const classes = useStyles()
  const [comments, setComments] = useState([])
  const [formState, setFormState] = useState(initialState)
  const user = checkUser()
  useEffect(() => {
    const fetchComments = async () => {
      const { data } = await API.graphql({ query: commentsByPostId, variables: { postId }})
      setComments(data.commentsByPostId.items)
    }
    fetchComments()
  }, [])
  const handleFieldChange = (evt) => {
    evt.persist()
    setFormState({ message: evt.target.value })
  }
  const handleSubmit = async (evt) => {
    evt.preventDefault()
    if (!formState.message) return
    setComments([...comments, { id: nanoid(), message: formState.message, username: user.username }])
    await API.graphql({
      query: createComment,
      variables: { input: { postId, message: formState.message }},
      authMode: 'AMAZON_COGNITO_USER_POOLS'
    })
    setFormState(initialState)
  }
  return (
    <>
      {comments.map(comment => (
        <Card key={comment.id} className={classes.card}>
          <CardContent>
            <Typography component="h3" variant="h5">{comment.message}</Typography>
            <Typography>by: {comment.username}</Typography>
          </CardContent>
        </Card>
      ))}
      <Card key="create">
        <CardContent>
          <Typography component="h3" variant="h4">Add comment</Typography>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <div className={classes.root}>
              <TextField
                id="message"
                name="message"
                label="Message"
                fullWidth
                variant="outlined"
                className={classes.formElement}
                onChange={handleFieldChange}
              />
              <Button type="submit" variant="contained" color="primary" className={classes.formElement}>Create</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  )
}

export default Comments