
import BlogDetails from "@/components/pages/modules/Home/BlogDetails";
import { getSingleblog } from "@/service/myInfo";

type PageProps = {
  params: Promise<{ id: string }>; // Ensure params is a Promise
};

const page = async ({ params }: PageProps) => {
  const blog = await getSingleblog((await params).id);
  if (!blog) {
    return <p>blog not found!</p>;
  }
  return (
    <div>
      <BlogDetails blog={blog?.data}></BlogDetails>
    </div>
  );
};

export default page;
