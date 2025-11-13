import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
type Blog = {
        title: string; 
        date: Date; 
        description: string;
        content: string;
        image: string;
        imageAlt: string; 
        slug: string;
        id: string;
        comments: Comment[]; // array for comments
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
})

// defining the collection and model
const Blog = mongoose.models['blogs'] ||
    mongoose.model('blogs', blogSchema);

export default Blog;
