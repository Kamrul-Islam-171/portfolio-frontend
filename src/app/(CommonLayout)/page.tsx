import HomeComponents from "@/components/pages/modules/Home/HomeComponents";
import { getblogs, getEducation, getExperience, getProjects, getSkills } from "@/service/myInfo";



const HomePage = async () => {
  const projects = await getProjects();
  const education = await getEducation();
  const experience = await getExperience();
  const skills = await getSkills();
  const blogs = await getblogs();

  return (
    <>
      <HomeComponents skills={skills?.data} blogs={blogs?.data} projects={projects?.data} education={education?.data} experience={experience?.data}></HomeComponents>
    </>
  );
};

export default HomePage;
