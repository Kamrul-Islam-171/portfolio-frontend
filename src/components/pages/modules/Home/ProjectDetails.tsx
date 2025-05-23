// components/ProjectDetails.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Project = {
  _id: string;
  title: string;
  details: string;
  keyFeatures: string[];
  techStack: string[];
  imageUrl: string;
  liveLink: string;
  clientLink: string;
  serverLink: string;
};

const ProjectDetails = ({ project }: { project: Project }) => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-green-600 mb-6">{project.title}</h1>

      <div className="relative w-full h-64 mb-8 rounded-md overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </div>

      <p className="text-gray-700 dark:text-gray-300 text-base mb-6">{project.details}</p>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
        <ul className="list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1">
          {project?.keyFeatures?.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Tech Stack:</h3>
        <div className="flex flex-wrap gap-2">
          {project?.techStack?.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-100 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <Button className="cursor-pointer">Live Demo</Button>
          </a>
        )}
        {project.clientLink && (
          <a href={project.clientLink} target="_blank" rel="noopener noreferrer">
            <Button className="cursor-pointer" variant="outline">Client</Button>
          </a>
        )}
        {project.serverLink && (
          <a href={project.serverLink} target="_blank" rel="noopener noreferrer">
            <Button className="cursor-pointer" variant="outline">Backend</Button>
          </a>
        )}
      </div>
    </section>
  );
};

export default ProjectDetails;
