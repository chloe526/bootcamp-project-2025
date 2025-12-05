import mongoose, { Schema } from "mongoose";

export type IComment = {
    user: string;
    comment: string;
    time: Date;
};

const CommentSchema = new Schema<IComment>({
    user: { type: String, required: true },
    comment: { type: String, required: true },
    time: { type: Date, default: Date.now }
});

// typescript type (can also be an interface)
export type Blog = {
    title: string; 
    date: Date; 
    description: string;
    content: string;
    image: string;
    imageAlt: string; 
    slug: string;
    id: string;
    comments: IComment[]; // array for comments
};

// mongoose schema 
const blogSchema = new Schema<Blog>({
    title: { type: String, required: true },
    date: { type: Date, required: false, default: new Date()},
    description: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    imageAlt: { type: String, required: true },
    slug: { type: String, required: true },
    id: { type: String, required: true },
    comments: { type: [CommentSchema], default: [] },
})

const Blog = mongoose.models['blogs'] || mongoose.model('blogs', blogSchema);
export default Blog;