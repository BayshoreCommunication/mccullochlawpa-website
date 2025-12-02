import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import GetAllPostData from "@/lib/GetPostData";
import React from "react";
import BlogPage from "@/components/blog/BlogPage";

const page = async () => {
  const blogPostData = await GetAllPostData();
  return (
    <div>
      <BreadcrumbSection
        title="Blogs"
        subtitle="Find informative posts written to help you stay informed and better understand the legal landscape, and more."
      />
      {/* <BlogSection blogPost={blogPostData} /> */}
      <BlogPage />
    </div>
  );
};

export default page;
