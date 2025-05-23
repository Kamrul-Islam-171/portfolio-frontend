"use client";


import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { TSkill } from "@/types";



const Skill = ({skills}:{skills:TSkill[]}) => {
  

  return (
    <section id='skills' className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-green-600 dark:text-white">
          My <span className="">Skills</span>
        </h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {skills?.map((item, index) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.2 }}
            >
              <Card className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all rounded-xl">
                <div className="w-12 h-12 relative">
                  <Image
                    src={item.skillIcon}
                    alt={item.skill}
                    layout="fill"
                    objectFit="contain"
                    className="rounded"
                  />
                </div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center">
                  {item.skill}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
