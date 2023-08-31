import { useState } from 'react'
import { API } from 'aws-amplify'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles' 
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { createPost } from 'src/graphql/mutations'
import Layout from 'components/Layout'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formElement: {
    margin: theme.spacing(1)
  }
}))

const CreatePost = () => {
  const classes = useStyles()
  const [formState, setFormState] = useState({ name: '', content: '' })
  const router = useRouter()
  const handleFieldChange = (evt) => {
    evt.persist()
    setFormState(state => ({ ...state, [evt.target.name]: evt.target.value }))
  }
  const handleSubmit = async (evt) => {
    evt.preventDefault()
    if (!formState.name || !formState.content) return
    const { data } = await API.graphql({
      query: createPost,
      variables: { input: formState },
      authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    router.push(`/post/${data.createPost.id}`)
  }
  return (
    <AmplifyAuthenticator>
      <Layout title="Create Post">
        <div className={classes.root}>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <>
              <TextField
                id="name"
                name="name"
                label="Title"
                fullWidth
                variant="outlined"
                className={classes.formElement}
                onChange={handleFieldChange}
              />
              <TextField
                id="content"
                name="content"
                label="Content"
                multiline rows={6}
                fullWidth
                variant="outlined"
                className={classes.formElement}
                onChange={handleFieldChange}
              />
              <Button type="submit" variant="contained" color="primary" className={classes.formElement}>Create</Button>
            </>
          </form>
        </div>
      </Layout>
    </AmplifyAuthenticator>
  )
}

export default CreatePost