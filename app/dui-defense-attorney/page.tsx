import LeftSide from "@/components/service/dui-defense-attorney/LeftSide";
import RightSidebar from "@/components/service/shared/RightSidebar";
import GetAllPostData from "@/lib/GetPostData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DUI Defense Attorney | McCulloch Law, P.A.",
  description: "Aggressive and experienced DUI defense attorney in Tampa Bay. Protect your rights, your license, and your future with Drew McCulloch.",
  alternates: {
    canonical: "/dui-defense-attorney",
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
