import mongoose, { Schema } from "mongoose";

export type IComment = {
  user: string;
  comment: string;
  time: Date;
};

export type BlogImage = {
  src: string;
  alt: string;
};

const CommentSchema = new Schema<IComment>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, default: Date.now },
});

const ImageSchema = new Schema({
  src: String,
  alt: String,
});

export type Blog = {
  title: string;
  date: Date;
  description: string;
  content: string;

  previewImageSrc: string;
  previewImageAlt: string;

  images: BlogImage[];
  slug: string;
  id: string;
  comments: IComment[];
};

const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  date: { type: Date, default: new Date() },
  description: { type: String, required: true },
  content: { type: String, required: true },
  
  previewImageSrc: { type: String, required: true },
  previewImageAlt: { type: String, required: true },

  images: { type: [ImageSchema], default: [] },
  slug: { type: String, required: true },
  id: { type: String, required: true },
  comments: { type: [CommentSchema], default: [] },
});

const Blog = mongoose.models.blogs || mongoose.model("blogs", blogSchema);
export default Blog;
