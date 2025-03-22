import React from "react";

export const Timeline = (): JSX.Element => {
  const timelineEvents = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a small team of passionate developers",
    },
    {
      year: "2021",
      title: "First Major Project",
      description: "Successfully delivered our first enterprise solution",
    },
    {
      year: "2022",
      title: "Team Expansion",
      description: "Grew to 50+ talented professionals",
    },
    {
      year: "2023",
      title: "Global Reach",
      description: "Expanded operations to multiple countries",
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description: "Launched our innovation lab for R&D",
    },
  ];

  return (
    <div className="bg-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Our Journey</h1>
        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <div key={index} className="flex">
              <div className="flex flex-col items-center mr-8">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {event.year.slice(2)}
                </div>
                {index !== timelineEvents.length - 1 && (
                  <div className="w-0.5 h-24 bg-purple-200 mt-2"></div>
                )}
              </div>
              <div className="pt-2">
                <h3 className="text-xl font-bold">{event.title}</h3>
                <p className="text-gray-600 mt-2">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};