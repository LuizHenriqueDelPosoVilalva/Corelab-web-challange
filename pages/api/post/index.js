import connect from 'next-connect'
import Joi from 'joi'

import validate from '../../../lib/middleware/validation'

import { createPost } from '../../../modules/post/post.service'

const createPostSchema = Joi.object({
  title: Joi.string().required().max(20),
  textArea: Joi.string().required().max(100)
})

const post = connect().post(validate({ body: createPostSchema }), (req, res) => {
  createPost(req.body)
  res.status(200).json({ teste: true })
})

export default post
