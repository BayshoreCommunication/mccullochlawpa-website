import LeftSide from "@/components/service/criminal-defense-attorney/LeftSide";
import RightSidebar from "@/components/service/shared/RightSidebar";
import GetAllPostData from "@/lib/GetPostData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Criminal Defense Attorney | McCulloch Law, P.A.",
  description: "Experienced criminal defense attorney representing clients facing charges in Tampa Bay. Trust Drew McCulloch to protect your freedom.",
  alternates: {
    canonical: "/criminal-defense-attorney",
  },
};

const page = async () => {
  // 🔥 Fetch all blogs
  const blogPostData = await GetAllPostData();

  return (
    <div>
      <div className="max-w-[1620px] mx-auto px-8 flex flex-col lg:flex-row gap-32">
        {/* LEFT CONTENT */}
        <LeftSide />

        {/* RIGHT SIDEBAR */}
        <RightSidebar blogs={blogPostData?.data} />
      </div>
    </div>
  );
};

export default page;
