import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
type Project = {
        title: string; 
        description: string;
        image: string;
        imageAlt: string;
        id: string;
        comments: Comment[]; // array for comments
};

// mongoose schema 
const blogSchema = new Schema<Project>({
        title: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        imageAlt: { type: String, required: true },
        id: { type: String, required: true },
})

// defining the collection and model
const Project = mongoose.models['projects'] ||
    mongoose.model('projects', blogSchema);

export default Project;
