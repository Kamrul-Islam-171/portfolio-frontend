"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { Trophy, Code2, CheckCircle, Link2 } from "lucide-react";

const problemSolvingData = {
  contests: 130,
  problemsSolved: 1500,
  platforms: [
    { name: "Codeforces 1", link: "https://codeforces.com/profile/_Kamrul_Islam_" },
    { name: "Codeforces 2", link: "https://codeforces.com/profile/_._Goku_._" },
    { name: "LeetCode", link: "https://leetcode.com/u/Kamrul5656/" },
    { name: "CodeChef", link: "https://www.codechef.com/users/codekamrul5656" },
  ],
  achievements: [
    {
      event: "ICPC Asia Dhaka Regional Online Preliminary Contest, 2022",
      rank: "230th / 1648 teams",
    },
    {
      event: "ICPC Dhaka Regional 2020 Online Preliminary Contest (CSE, DU)",
      rank: "448th / 1324 teams",
    },
  ],
};

const ProblemSolving = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="problem-solving" className="max-w-7xl mx-auto px-4 py-20" ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-600 mb-12">
          Problem Solving Experience
        </h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contests */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 text-center">
            <Code2 className="w-10 h-10 mx-auto text-green-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              {problemSolvingData.contests}+
            </h3>
            <p className="text-gray-500 dark:text-gray-400">Contests Participated</p>
          </div>

          {/* Problems Solved */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 text-center">
            <CheckCircle className="w-10 h-10 mx-auto text-green-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              {problemSolvingData.problemsSolved}+
            </h3>
            <p className="text-gray-500 dark:text-gray-400">Problems Solved</p>
          </div>

          {/* Profiles */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
            <h4 className="text-lg font-semibold text-green-600 mb-4 text-center">Platforms</h4>
            <ul className="space-y-3 text-sm text-center">
              {problemSolvingData?.platforms?.map((platform, idx) => (
                <li key={idx}>
                  <a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 hover:text-green-600 transition"
                  >
                    <Link2 className="w-4 h-4" />
                    {platform.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-green-600 mb-6 text-center">Achievements</h3>
          <div className="space-y-6">
            {problemSolvingData?.achievements?.map((achieve, idx) => (
              <div
                key={idx}
                className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm max-w-2xl mx-auto"
              >
                <div className="flex items-center gap-3">
                  <Trophy className="text-green-600 w-6 h-6" />
                  <div>
                    <p className="text-md font-semibold text-gray-800 dark:text-white">
                      {achieve.event}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{achieve.rank}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProblemSolving;
