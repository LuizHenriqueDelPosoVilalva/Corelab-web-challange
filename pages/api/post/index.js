import connect from 'next-connect'

import { createPost } from '../../../modules/post/post.service'

const post = connect().post((req, res) => {
  createPost(req.body)
  res.status(200).json({ teste: true })
})

export default post
