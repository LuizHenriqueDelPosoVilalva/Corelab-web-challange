import createHandler from '../../../lib/middleware/nextConnect'
import validate from '../../../lib/middleware/validation'

import { createPost } from '../../../modules/post/post.service'
import { createPostSchema } from '../../../modules/post/post.schema'

const posts = createHandler()

posts.post(validate({ body: createPostSchema }), async (req, res) => {
  try {
    const createdPost = await createPost(req.body)
    res.status(201).json(createdPost)
  } catch (err) {
    console.error(err)
    err
  }
})

export default posts
