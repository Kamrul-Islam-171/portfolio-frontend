import ProjectDetails from "@/components/pages/modules/Home/ProjectDetails";
import { getAProjects } from "@/service/myInfo";
type PageProps = {
  params: Promise<{ id: string }>; // Ensure params is a Promise
};

const page = async ({ params }: PageProps) => {
  const project = await getAProjects((await params).id);
  if (!project) {
    return <p>project not found!</p>;
  }
  console.log(project);
  return (
    <div>
      <ProjectDetails project={project?.data}></ProjectDetails>
    </div>
  );
};

export default page;
