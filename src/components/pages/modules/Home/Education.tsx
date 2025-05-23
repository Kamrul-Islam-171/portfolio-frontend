"use client";


import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

import { TEducationItem } from "@/types";

const Education = ({education}: {education:TEducationItem[]}) => {


  return (
    <section id='education' className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-abold text-green-600  text-center mb-12 dark:text-white">
          My <span className="">Education</span>
        </h2>

        <div className="relative border-l-2 border-green-500 pl-6 space-y-10">
          
          {education?.map((item: TEducationItem, index: number) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              
              <div className="absolute -left-3 top-1.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-950 shadow-md" />

              <Card className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold text-green-500 mb-1">
                  {item.degree}
                </h3>
                <p className="text-gray-900 dark:text-white font-medium">
                  {item.university}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.location}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Passing Year:{" "}
                  <span className="font-semibold">{item.passingYear}</span>
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
