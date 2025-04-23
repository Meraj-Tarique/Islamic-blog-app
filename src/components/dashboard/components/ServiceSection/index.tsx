"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import styles from "@/styles/blogCardStyle.module.css";
import QuranRehal from "@images/quran-rehal.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getImagePath } from "@/helpers/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function Services() {
  const router = useRouter();

  interface ContentItem {
    title: string;
    description: string;
    icon: string | StaticImport; // Or string | StaticImport if you might use direct imports
    slug: string;
    // Add other optional properties if needed
    // featured?: boolean;
    // tags?: string[];
  }
  const services = [
    {
      title: "Quran",
      description:
        "Explore the meticulous process of the Quran's compilation and collation, ensuring its authenticity and preservation.",
      icon: getImagePath(QuranRehal) || "",
      slug: "quran-compilation",
    },
    {
      title: "Community Services",
      description:
        "Join our vibrant community and participate in various activities",
      icon: getImagePath(QuranRehal) || "",
      slug: "",
    },
    {
      title: "Charity & Support",
      description:
        "Support those in need through our various charitable programs",
      icon: getImagePath(QuranRehal) || "",
      slug: "",
    },
    {
      title: "Charity & Support",
      description:
        "Support those in need through our various charitable programs",
      icon: getImagePath(QuranRehal) || "",
      slug: "",
    },
  ];

  const handleBlogsRoute = (slug: string) => {
    router.push(`/blogs/${slug}`);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl font-bold text-center mb-12 ${styles.textStyle}`}
        >
          Learn QUR’AN Basic
        </h2>

        <div className="grid md:grid-cols-4 gap-6 justify-center items-center text-center">
          {services.map((service: ContentItem, index: number) => (
            <div
              onClick={() => handleBlogsRoute(service.slug)}
              key={index}
              className={`flex flex-col items-center ${styles.cardContainer} cursor-pointer`}
            >
              <Card
                className={`text-center  bg-white w-[130px] h-[130px] rounded-[50%] flex items-center justify-center ${styles.circleCardStyle}`}
              >
                <div
                  className={` bg-white rounded-[50%] flex items-center justify-center
                    card-container `}
                >
                  <Image
                    alt="quran image"
                    src={service?.icon}
                    height={50}
                    width={50}
                  />
                </div>
              </Card>
              <h3
                className={`text-xl font-semibold mt-4 ${styles.headingStyle}`}
              >
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
