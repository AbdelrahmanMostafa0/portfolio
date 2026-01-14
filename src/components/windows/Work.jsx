"use client";
import { useState } from "react";
import Image from "next/image";
import { IoEye, IoSearch } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import projects from "@/data/projects";

const Work = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const query = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(query) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(query)) ||
      project.description.some((desc) => desc.toLowerCase().includes(query))
    );
  });

  const highlightText = (text, query) => {
    if (!query.trim()) return text;

    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark
          key={index}
          className="bg-yellow-300 dark:bg-yellow-600 text-black dark:text-white px-0.5 rounded"
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="space-y-5 md:pb-2 pb-10 w-full">
      {/* Search Bar */}
      <div className="relative">
        <IoSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 text-xl" />
        <input
          type="text"
          placeholder="Search projects by name, tech, or features..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 border-2 border-[#424242] dark:border-white/20 rounded-lg bg-white dark:bg-slate-800 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
      </div>

      {/* Results Count */}
      {searchQuery && (
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Found {filteredProjects.length} project
          {filteredProjects.length !== 1 ? "s" : ""}
        </p>
      )}

      {/* Projects List */}
      <div className="space-y-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div
              key={index}
              className="border-2 border-[#424242] dark:border-white/20 rounded-lg bg-white dark:bg-slate-800 p-5 space-y-5 transition-all duration-300 hover:shadow-lg"
            >
              {/* Project Preview Image */}
              <a
                target="_blank"
                href={project.link}
                className="relative group flex items-center justify-center rounded-md overflow-hidden border-2 border-gray-200 dark:border-slate-700 hover:border-[#424242] dark:hover:border-white/40 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r z-10 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <IoEye className="text-5xl text-white/90" />
                    <span className="text-white font-semibold text-lg">
                      View Live
                    </span>
                  </div>
                </div>
                <Image
                  src={project.imageSrc}
                  width={600}
                  height={400}
                  alt={project.title}
                  className="w-full"
                />
              </a>

              {/* Project Title & Links */}
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <h3 className="text-2xl font-bold text-black dark:text-white">
                  {highlightText(project.title, searchQuery)}
                </h3>
                <div className="flex gap-2">
                  {project?.github && (
                    <a
                      target="_blank"
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-md transition-all duration-200 font-medium text-sm"
                    >
                      <FaGithub className="text-lg" />
                      GitHub
                    </a>
                  )}
                  {project.link && (
                    <a
                      target="_blank"
                      href={project.link}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-all duration-200 font-medium text-sm"
                    >
                      <IoEye className="text-xl" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Technologies Pills */}
              <div>
                <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-900 text-black dark:text-white border border-gray-300 dark:border-slate-600 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200 shadow-sm"
                    >
                      {highlightText(tech, searchQuery)}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Description */}
              <div>
                <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">
                  Key Features
                </h4>
                <ul className="space-y-2.5">
                  {project.description.map((desc, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-700 dark:text-white/90 text-sm leading-relaxed"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 bg-[#424242] dark:bg-white/70 rounded-full flex-shrink-0" />
                      <span>{highlightText(desc, searchQuery)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        ) : (
          <div className="border-2 border-[#424242] dark:border-white/20 rounded-lg bg-white dark:bg-slate-800 p-10 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found matching "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;
