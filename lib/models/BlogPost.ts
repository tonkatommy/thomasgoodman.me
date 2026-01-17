import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IBlogPost extends Document {
  title: string
  slug: string
  content: string
  excerpt?: string
  author: string
  published: boolean
  publishedAt?: Date
  tags: string[]
  category?: string
  featuredImage?: string
  views: number
  createdAt: Date
  updatedAt: Date
}

const BlogPostSchema = new Schema<IBlogPost>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      default: 'Thomas Goodman',
    },
    published: {
      type: Boolean,
      default: false,
    },
    publishedAt: {
      type: Date,
    },
    tags: {
      type: [String],
      default: [],
    },
    category: {
      type: String,
    },
    featuredImage: {
      type: String,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

// Index for faster queries
BlogPostSchema.index({ slug: 1 })
BlogPostSchema.index({ published: 1, publishedAt: -1 })
BlogPostSchema.index({ tags: 1 })

const BlogPost: Model<IBlogPost> =
  mongoose.models.BlogPost || mongoose.model<IBlogPost>('BlogPost', BlogPostSchema)

export default BlogPost
