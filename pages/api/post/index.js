import { createPost } from '../../../modules/post/post.service'

function post(req, res) {
  createPost()
  res.status(200).json({ teste: true })
}

export default post
