'use client';


import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TProject } from "@/types";



const Project = ({projects}: {projects:TProject[]}) => {


  return (
    <section id='projects' className="w-full px-4 py-16 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-green-600 dark:text-white">
          My <span className="">Projects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project:TProject, index:number) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative w-full h-48">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-md"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-green-500 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.details}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack?.slice(0,6)?.map((tech:any, i:number) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-100 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 mb-4">
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noreferrer">
                        <Button className="text-sm cursor-pointer">Live Demo</Button>
                      </a>
                    )}
                    {project.clientLink && (
                      <a href={project.clientLink} target="_blank" rel="noreferrer">
                        <Button variant="outline" className="text-sm cursor-pointer">Client</Button>
                      </a>
                    )}
                    {project.serverLink && (
                      <a href={project.serverLink} target="_blank" rel="noreferrer">
                        <Button variant="outline" className="text-sm cursor-pointer">Backend</Button>
                      </a>
                    )}
                  </div>

                  <Link href={`/project/${project._id}`}>
                    <Button variant="ghost" className="text-green-500 text-sm  cursor-pointer">
                      View Details →
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
