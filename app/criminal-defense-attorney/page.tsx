import LeftSide from "@/components/service/criminal-defense-attorney/LeftSide";
import RightSidebar from "@/components/service/shared/RightSidebar";
import GetAllPostData from "@/lib/GetPostData";

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
