import { ExperienceItem, TBlog, TEducationItem, TProject, TSkill } from "@/types";
import Blogs from "./Blogs";
import Contact from "./Contact";
import ProblemSolving from "./CP";
import Education from "./Education";
import Experience from "./Experience";
import Intro from "./Intro";
import Project from "./Project";
import Skill from "./Skill";

const HomeComponents = ({
  projects,
  education,
  experience,
  skills,
  blogs,
}: {
  projects:TProject[];
  skills: TSkill[];
  blogs: TBlog[];
  education: TEducationItem[];
  experience: ExperienceItem[];
}) => {
  return (
    <div>
      <Intro></Intro>
      <Education education={education}></Education>
      <Experience experience={experience}></Experience>
      <Skill skills={skills}></Skill>
      <ProblemSolving></ProblemSolving>
      <Project projects={projects}></Project>
      <Blogs blogs={blogs}></Blogs>
      <Contact></Contact>
    </div>
  );
};

export default HomeComponents;
