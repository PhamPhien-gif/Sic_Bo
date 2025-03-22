import React from "react";
import { useTranslation } from "react-i18next";

const teamMembers = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    description: "With over 15 years of experience in software development and business leadership, John leads our company's vision and strategy.",
    expertise: ["Business Strategy", "Software Architecture", "Team Leadership"]
  },
  {
    name: "Sarah Johnson",
    role: "Technical Lead",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    description: "Sarah brings 10 years of expertise in full-stack development and leads our technical innovations and architecture decisions.",
    expertise: ["Full-stack Development", "System Design", "Cloud Architecture"]
  },
  {
    name: "David Chen",
    role: "Senior Developer",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    description: "A passionate developer with deep knowledge in mobile and web technologies, David leads our front-end development initiatives.",
    expertise: ["React", "Mobile Development", "UI/UX Design"]
  },
  {
    name: "Emily Wang",
    role: "Project Manager",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    description: "Emily ensures smooth project delivery and client satisfaction with her excellent communication and management skills.",
    expertise: ["Project Management", "Agile Methodologies", "Client Relations"]
  }
];

export const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="px-4 md:px-[148px] py-12">
      {/* Team Introduction */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Our Team</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Meet our talented team of professionals who work tirelessly to bring your ideas to life. 
          Each member brings unique expertise and passion to deliver exceptional results.
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex flex-col md:flex-row">
              {/* Avatar Section */}
              <div className="md:w-1/3">
                <img 
                  src={member.avatar} 
                  alt={member.name}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="md:w-2/3 p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-purple-600 font-semibold">{member.role}</p>
                </div>

                <p className="text-gray-600 mb-4 text-sm">
                  {member.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Company Values */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Innovation</h3>
            <p className="text-gray-600">
              We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
            <p className="text-gray-600">
              We believe in the power of teamwork and open communication to achieve exceptional results.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-purple-50 p-8 rounded-xl text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Quality</h3>
            <p className="text-gray-600">
              We maintain the highest standards in our work, ensuring reliable and scalable solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};