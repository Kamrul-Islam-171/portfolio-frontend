import Image from "next/image";

type TBlog = {
  _id: string;
  title: string;
  details: string;
  coverImage: string;
};

type BlogDetailsProps = {
  blog: TBlog;
};

const BlogDetails = ({ blog }: BlogDetailsProps) => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-green-700 dark:text-green-400 mb-6">
        {blog.title}
      </h1>

      <Image
        src={blog.coverImage}
        alt={blog.title}
        width={1000}
        height={500}
        className="w-full h-72 object-cover rounded mb-6"
      />

      <article  dangerouslySetInnerHTML={{ __html: blog.details }} className="text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-line">
      </article>
    </section>
  );
};

export default BlogDetails;
