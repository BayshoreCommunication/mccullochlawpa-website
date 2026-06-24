import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import GetAllPostData from "@/lib/GetPostData";
import BlogPage from "@/components/blog/BlogPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs & Legal Articles | McCulloch Law, P.A.",
  description: "Stay informed with legal articles, blogs, and insights from McCulloch Law, P.A. regarding personal injury and criminal defense in Florida.",
  alternates: {
    canonical: "/blogs",
  },
};

export default async function Page() {
  const blogPostData = await GetAllPostData();

  return (
    <div>
      <BreadcrumbSection
        title="Blogs"
        subtitle="Find informative posts written to help you stay informed and better understand the legal landscape, and more."
      />

      {/* Blog listing component */}
      <BlogPage blogPost={blogPostData} />
    </div>
  );
}
