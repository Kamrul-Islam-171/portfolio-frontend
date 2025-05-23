'use client';

import { ExperienceItem } from "@/types";
import { motion } from "framer-motion";





const Experience = ({experience}: {experience:ExperienceItem[]}) => {
 

  return (
    <section id='experience' className="w-full bg-white dark:bg-gray-950 py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-green-600 dark:text-white">
          My <span className="">Experience</span>
        </h2>

        <div className="flex flex-col space-y-12">
          {experience?.map((item, index) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 dark:border-gray-800"
            >
              <h3 className="text-2xl font-bold text-green-500 mb-2">{item.position}</h3>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {item.companyName}
              </h4>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex flex-wrap gap-6">
                <span><strong>Location : </strong> {item.location}</span>
                <span><strong>Job Type : </strong> {item.jobType}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed whitespace-pre-line">
                {item.jobDescription.length > 350
                  ? item.jobDescription.slice(0, 350) + "..."
                  : item.jobDescription}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Experience;
