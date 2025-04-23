import { connect } from "@/dbConfig/dbConfig";
import blogModel from "@/models/Blog";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Establish MongoDB connection

    // Parse request body
    await connect();
    const reqBody = await request.json();
    const { title, content, author, slug } = reqBody;

    // Validate input
    if (!title || !content || !author) {
      console.error("Missing fields in request body");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create new blog
    const newBlog = await blogModel.create({ title, content, author, slug });

    // Send success response
    return NextResponse.json(
      { message: "Blog created successfully", data: newBlog },
      { status: 201 }
    );
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Error creating blog:", err.message);
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    console.error("An unexpected error occurred:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connect();
    console.log("TEST");
    
    const blogs = await blogModel.find();
    if (!blogs || blogs.length === 0) {
      return NextResponse.json({ error: "No blogs found" }, { status: 404 });
    }
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blogs" + error },
      { status: 500 }
    );
  }
}
