import Joi from 'joi'

export const createPostSchema = Joi.object({
  title: Joi.string().required().max(20),
  textArea: Joi.string().required().max(200)
})
