import React from "react";
import { useTranslation } from "react-i18next";

const timelineEvents = [
  {
    year: "22/03/2025",
    title: "Initial Assignment",
    description: "The project team was assigned their initial roles and responsibilities.",
    link: "https://docs.google.com/document/d/1NTO3YWW4wECgpWdaufDid6h45aQ0_08RHW5R6OpZ6Do/edit?tab=t.0",
  },
  // {
  //   year: "2024",
  //   title: "Major Milestones",
  //   description: "Reached 1000+ successful project deliveries",
  // },
  // {
  //   year: "2023",
  //   title: "Innovation Hub",
  //   description: "Launched our innovation lab for R&D",
  // },
  // {
  //   year: "2022",
  //   title: "Company Founded",
  //   description: "Started with a team of 5 passionate developers",
  // },
];

export const TimelinePage = () => {
  const { t } = useTranslation();

  return (
    <div className="px-4 md:px-[148px] py-12">
      <h1 className="text-4xl font-bold mb-12">Our Journey</h1>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 h-full w-1 bg-purple-200 transform -translate-x-1/2"></div>
        
        {/* Timeline events */}
        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <div key={index} className={`flex flex-col md:flex-row gap-8 relative ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}>
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full transform -translate-x-1/2 mt-2"></div>
              
              {/* Content with clickable link */}
              <div className="md:w-1/2 ml-8 md:ml-0">
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white p-6 rounded-lg shadow-lg hover:bg-gray-100 transition"
                >
                  <span className="text-purple-500 font-bold text-xl mb-2 block">
                    {event.year}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </a>
              </div>
              
              {/* Spacer for alignment */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};