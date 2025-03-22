import React from "react";
import { useTranslation } from "react-i18next";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with advanced features",
    tech: ["React", "Node.js", "MongoDB"],
    image: "https://placehold.co/600x400/purple/white?text=E-Commerce",
  },
  {
    title: "Healthcare Management System",
    description: "Digital solution for managing healthcare facilities",
    tech: ["Angular", "Python", "PostgreSQL"],
    image: "https://placehold.co/600x400/blue/white?text=Healthcare",
  },
  {
    title: "Financial Analytics Dashboard",
    description: "Real-time financial data visualization and analysis tool",
    tech: ["Vue.js", "Django", "Redis"],
    image: "https://placehold.co/600x400/green/white?text=Analytics",
  },
  {
    title: "Social Media App",
    description: "Modern social networking platform with real-time features",
    tech: ["React Native", "GraphQL", "AWS"],
    image: "https://placehold.co/600x400/orange/white?text=Social+Media",
  },
];

export const ProjectPage = () => {
  const { t } = useTranslation();

  return (
    <div className="px-4 md:px-[148px] py-12">
      <h1 className="text-4xl font-bold mb-8">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};