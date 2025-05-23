"use server";

export const getEducation = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/education`,
      {
        next: {
          tags: ["EDUCATION"],
          revalidate:30
        },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await res.json();

    // console.log(result)
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
export const getExperience = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/experience`,
      {
        next: {
          tags: ["EXPERIENCE"],
          revalidate:30
        },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await res.json();

    // console.log(result)
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
export const getSkills = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/skill`,
      {
        next: {
          tags: ["SKILL"],
          revalidate:30
        },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await res.json();

    // console.log(result)
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
export const getProjects = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/project`,
      {
        next: {
          tags: ["PROJECT"],
          revalidate:30
          
        },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await res.json();

    // console.log(result)
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
export const getAProjects = async (id:string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/project/${id}`,
      {
        next: {
          tags: ["PROJECT"],
          
        },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await res.json();

    // console.log(result)
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
export const getblogs = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/blog`,
      {
        next: {
          tags: ["BLOG"],
          revalidate:30
        },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await res.json();

    // console.log(result)
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
export const getSingleblog = async (id:string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/${id}`,
      {
        next: {
          tags: ["BLOG"],
          
        },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await res.json();

    // console.log(result)
    return result;
  } catch (error: any) {
    return Error(error);
  }
};