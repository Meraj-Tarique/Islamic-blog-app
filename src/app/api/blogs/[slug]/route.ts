import { NextResponse } from "next/server";
import blogModel from "@/models/Blog";
import { connect } from "@/dbConfig/dbConfig";

// The correct type for context in dynamic route
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    if (!slug || typeof slug !== "string") {
      return NextResponse.json(
        { error: "Invalid slug parameter" },
        { status: 400 }
      );
    }

    await connect();

    console.log("Fetching blog with slug:", slug);

    const blog = await blogModel.findOne({ slug }).lean().exec();

    if (!blog) {
      console.warn(`Blog not found with slug: ${slug}`);
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    console.log(`Successfully fetched blog: ${slug}`);
    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch blog",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
