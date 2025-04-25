// app/post/page.js
import Link from "next/link";
import { redirect } from "next/navigation";

interface Post {
  id: number;
  title: string;
  body: string;
}

// interface Props {
//   page?: string;
// }

export default async function PostPage({
  searchParams,
}: {
  searchParams:  Promise<{ page: string }>;
}) {
    const resolvedParams = await searchParams;
  const currentPage = parseInt(resolvedParams.page || "1", 10);
  const limit = 50;
  const skip = (currentPage - 1) * limit;

  const res = await fetch(
    `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`
  );
  const data = await res.json();
  const posts: Post[] = data.posts;
  const totalPages = Math.ceil(data.total / limit);

  if (currentPage < 1 || currentPage > totalPages) {
    redirect("/post?page=1");
  }

  return (
    <main className="bg-gray-100 text-gray-800 min-h-screen">
      <section className="text-center py-20 bg-gradient-to-r from-yellow-100 to-orange-200">
        <h2 className="text-4xl font-bold mb-4">Our Latest Posts</h2>
        <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
          These are posts fetched from the server — this page uses Server-Side
          Rendering with Next.js 13 App Router.
        </p>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 px-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-6 rounded-lg shadow text-left"
            >
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-700">{post.body}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-10 space-x-4">
          {currentPage > 1 && (
            <Link href={`/post?page=${currentPage - 1}`}>
              <span className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
                ← Previous
              </span>
            </Link>
          )}
          {Array.from({ length: totalPages }).map((_, i) => {
            const page = i + 1;
            const isActive = page === currentPage;
            return (
              <Link href={`/post?page=${page}`} key={page}>
                <span
                  className={`px-3 py-1 rounded border ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {page}
                </span>
              </Link>
            );
          })}
          {currentPage < totalPages && (
            <Link href={`/post?page=${currentPage + 1}`}>
              <span className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
                Next →
              </span>
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
