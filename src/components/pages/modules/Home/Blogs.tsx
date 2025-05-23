"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { TBlog } from "@/types";




const Blogs = ({blogs}:{blogs:TBlog[]}) => {

  return (
    <section id='blogs' className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-600 mb-12">
         Blogs
      </h2>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {blogs?.map((blog) => (
          <SwiperSlide key={blog._id}>
            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                width={400}
                height={200}
                className="h-52 w-full object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-green-700 dark:text-green-400 mb-2">
                  {blog.title}
                </h3>
                <article  dangerouslySetInnerHTML={{ __html: blog.details.slice(0,100) + '...' }} className="text-gray-600 dark:text-gray-300 text-sm flex-grow">
                  {/* {blog.details.slice(0, 100)}... */}
                </article>
                <Link href={`/blogs/${blog._id}`} passHref  className="mt-4 py-2 cursor-pointer bg-white text-green-500 font-medium">
               
                    View Details →
                 
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Blogs;
