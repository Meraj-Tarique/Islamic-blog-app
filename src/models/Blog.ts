import { Schema, Document, Types, model, models } from "mongoose";

// Define BlogDocument Interface with Nested Content & Categories
export interface BlogDocument extends Document {
  title: string;
  slug: string;
  author: Types.ObjectId;
  featured_image?: string;
  views: number;
  content: ContentSection[];
  createdAt: Date;
  updatedAt: Date;
}

// Interface for Nested Content Structure
interface ContentSection {
  heading: string;
  description?: string;
  subcategories?: SubCategory[];
}

interface SubCategory {
  subHeading: string;
  subDescription: string;
  subCategories?: SubSubCategory[];
}

interface SubSubCategory {
  subSubHeading?: string;
  subSubDescription?: string;
}

// Define Blog Schema
const BlogSchema: Schema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: false, unique: true, trim: true },
    author: { type: Types.ObjectId, ref: "User", required: true },
    featured_image: { type: String, required: false },
    views: { type: Number, default: 0 },
    content: [
      {
        heading: { type: String, required: true },
        description: { type: String},
        subcategories: [
          {
            subHeading: { type: String, required: false },
            subDescription: { type: String, required: false },
            subCategories: [
              {
                subSubHeading: { type: String, required: false },
                subSubDescription: { type: String, required: false },
              },
            ],
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

// Export Blog Model
const BlogModel = models.Blogs || model<BlogDocument>("Blogs", BlogSchema);
export default BlogModel;
