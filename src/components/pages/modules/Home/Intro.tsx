"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Intro = () => {
  return (
    <section className="w-full py-12 md:py-20  bg-white flex items-center dark:bg-gray-900 h-screen ">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-4">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Hello, {"I'm"}{" "}
            <span className="text-green-500">Md Kamrul Islam</span>
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Full Stack Web Developer
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            I build scalable and user-centric web applications using modern
            technologies. With strong experience across both frontend and
            backend, I focus on creating clean, efficient, and maintainable
            solutions for real-world problems.
          </p>

          <a
            target="_blank"
            href="https://drive.google.com/file/d/10PzyTa7f30DCOQ8ZLByqKtoiyu_El_an/view?usp=sharing"
            download
          >
            <Button variant="default" className="gap-2 cursor-pointer">
              <Download size={18} />
              Download Resume
            </Button>
          </a>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-end">
          <Image
            src="https://res.cloudinary.com/dtp5fwvg9/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1747734965/476915144_2952894224876669_4326520056439203203_n_sdaxbc.jpg"
            alt="Professional Image"
            width={400}
            height={400}
            className="rounded-2xl shadow-xl object-cover max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
