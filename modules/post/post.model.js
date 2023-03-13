import mongoose from 'mongoose'

const CreatePostSchema = new mongoose.Schema({
  title: { type: String, required: true, maxlength: 20 },
  textArea: { type: String, required: true, maxlength: 100 }
})

export default mongoose.models.Post || mongoose.model('Post', CreatePostSchema)
