import BlogSection from "@/components/shared/Blog";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import PainRelief from "@/components/shared/CallToAction";
import { BreadcrumbItem } from "@nextui-org/react";
import GetAllPostData from "@/lib/GetPostData";
import React from "react";

const page = async () => {
  const blogPostData = await GetAllPostData();
  return (
    <div>
      <BreadcrumbSection
        subtitle="Get Pain Relief Today With Tampa Bays Chiropractor"
        title="My Blog"
        items={[
          { label: "Home", href: "/" },
          { label: "My Blog" }, // current page (no href)
        ]}
      />
      <BlogSection blogPost={blogPostData} />
      <PainRelief />
    </div>
  );
};

export default page;
