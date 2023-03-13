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
