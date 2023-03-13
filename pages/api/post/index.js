import createHandler from '../../../lib/middleware/nextConnect'
import validate from '../../../lib/middleware/validation'

import { createPost, getPost } from '../../../modules/post/post.service'
import { createPostSchema } from '../../../modules/post/post.schema'

const handle = createHandler()

handle
  .post(validate({ body: createPostSchema }), async (req, res) => {
    try {
      const newPost = await createPost(req.body)
      res.status(201).send(newPost)
    } catch (err) {
      return res.status(500).send(err.message)
    }
  })
  .get(async (req, res) => {
    try {
      const posts = await getPost(req.body)
      res.status(200).send(posts)
    } catch (err) {
      return res.status(500).send(err.message)
    }
  })

export default handle
