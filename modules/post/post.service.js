import Post from './post.model'

export const createPost = async (body) => {
  try {
    const post = {
      ...body
    }
    const dbpost = await Post.create(post)
    return dbpost
  } catch (err) {
    err
  }
}

export const getPost = async (limit = 3) => {
  return await Post.find().sort({ createDate: -1 }).limit(limit)
}
