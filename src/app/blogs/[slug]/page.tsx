// import React from "react";
// import styles from "@/styles/missionStyle.module.css";
// import { getBaseUrl } from "@/helpers/utils";

// interface SubSubCategory {
//   subHeading?: string;
//   subDescription?: string;
//   subCategories?: SubSubCategory[];
// }

// interface SubCategory {
//   subHeading: string;
//   subDescription: string;
//   subCategories: SubSubCategory[];
// }

// interface ContentSection {
//   heading: string;
//   description: string;
//   subcategories: SubCategory[];
// }
// interface Blog {
//   title: string;
//   slug: string;
//   author: string;
//   views: number;
//   heading: string;
//   content: ContentSection[];
//   subcategories: SubCategory[];
// }

// async function fetchBlog(slug: string): Promise<Blog | null> {
//   const baseUrl = getBaseUrl();

//   const apiUrl = `${baseUrl}/api/blogs/${slug}`;
//   console.log(baseUrl);

//   try {
//     const res = await fetch(apiUrl, {
//       method: "GET",
//       cache: "no-store",
//     });
//     console.log("apiUrl", apiUrl);
    
//     if (!res.ok) {
//       throw new Error(`Failed to fetch blog: ${res.status} ${res.statusText}`);
//     }

//     return await res.json();
//   } catch (error) {
//     console.error("Error fetching blog:", error);
//     return null;
//   }
// }

// // interface PageProps {
// //   params: Promise<{
// //     slug: string;
// //   }>;
// // }

// const BlogDetailPage = async ({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) => {
//   const resolvedParams = await params;
//   const { slug } = resolvedParams;

//   const blog = await fetchBlog(slug);

//   if (!blog) {
//     return <div>Blog not Found!</div>;
//   }

//   return (
//     <div className="max-w-8xl mx-auto py-10 px-5">
//       <div className="mx-auto py-10 px-5">
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//           <div className="bg-white-600 text-white p-6 items-center">
//             <h1 className={`text-4xl font-bold ${styles.textStyle}`}>
//               {blog.title}
//             </h1>
//             <p className="mt-2 text-xl">
//               Category:{" "}
//               <span className="font-semibold textStyle">Technology</span>
//             </p>
//           </div>

//           <div className="p-6 space-y-6">
//             {blog.content.map((item: ContentSection, ind: number) => (
//               <div className="space-y-4" key={ind}>
//                 <h2 className="text-3xl font-semibold">{item?.heading}</h2>
//                 <p className="text-lg text-gray-700"></p>

//                 {item?.subcategories.map((value, key) => (
//                   <div
//                     className="bg-gray-100 p-4 rounded-lg shadow-sm"
//                     key={key}
//                   >
//                     <h3 className="text-xl font-semibold">
//                       {value.subHeading}
//                     </h3>
//                     <p className="mt-2 text-gray-700">{value.subDescription}</p>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogDetailPage;


import { notFound } from 'next/navigation';
import styles from '@/styles/missionStyle.module.css';
import { getBaseUrl } from '@/helpers/utils';

interface SubSubCategory {
  subHeading?: string;
  subDescription?: string;
  subCategories?: SubSubCategory[];
}

interface SubCategory {
  subHeading: string;
  subDescription: string;
  subCategories: SubSubCategory[];
}

interface ContentSection {
  heading: string;
  description: string;
  subcategories: SubCategory[];
}

interface Blog {
  title: string;
  slug: string;
  author: string;
  views: number;
  heading: string;
  content: ContentSection[];
  subcategories: SubCategory[];
}

// Add revalidation time (in seconds)
export const revalidate = 3600; // Revalidate every hour

async function fetchBlog(slug: string): Promise<Blog> {
  const baseUrl = getBaseUrl();
  const apiUrl = `${baseUrl}/api/blogs/${slug}`;

  try {
    const res = await fetch(apiUrl, {
      method: "GET",
      next: { tags: [`blog-${slug}`] }, // For on-demand revalidation
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch blog: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching blog:", error);
    throw error; // Will be caught by the error boundary
  }
}

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  let blog: Blog;

  try {
    blog = await fetchBlog(params.slug);
  } catch (error) {
    console.log(error);
    
    notFound(); 

  return (
    <div className="max-w-8xl mx-auto py-10 px-5">
      <div className="mx-auto py-10 px-5">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-white-600 text-white p-6 items-center">
            <h1 className={`text-4xl font-bold ${styles.textStyle}`}>
              {blog.title}
            </h1>
            <div className="mt-2 flex gap-4 text-xl">
              <p>
                Author: <span className="font-semibold">{blog.author}</span>
              </p>
              <p>
                Views: <span className="font-semibold">{blog.views}</span>
              </p>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {blog.content.map((item, index) => (
              <section key={`${item.heading}-${index}`} className="space-y-4">
                <h2 className="text-3xl font-semibold">{item.heading}</h2>
                {item.description && (
                  <p className="text-lg text-gray-700">{item.description}</p>
                )}

                {item.subcategories.map((subcategory, subIndex) => (
                  <div
                    className="bg-gray-100 p-4 rounded-lg shadow-sm"
                    key={`${subcategory.subHeading}-${subIndex}`}
                  >
                    <h3 className="text-xl font-semibold">
                      {subcategory.subHeading}
                    </h3>
                    <p className="mt-2 text-gray-700">
                      {subcategory.subDescription}
                    </p>
                    
                    {/* Render nested subcategories if they exist */}
                    {subcategory.subCategories?.map((nested, nestedIndex) => (
                      <div key={`nested-${nestedIndex}`} className="mt-3 pl-4 border-l-2 border-gray-300">
                        {nested.subHeading && (
                          <h4 className="text-lg font-medium">
                            {nested.subHeading}
                          </h4>
                        )}
                        {nested.subDescription && (
                          <p className="text-gray-600">
                            {nested.subDescription}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await fetchBlog(params.slug).catch(() => null);

  if (!blog) {
    return {
      title: 'Blog Not Found',
    };
  }

  return {
    title: blog.title,
    description: blog.content[0]?.description || blog.heading,
    openGraph: {
      type: 'article',
      publishedTime: new Date().toISOString(),
      authors: [blog.author],
    },
  };
}