import { useTranslation } from "react-i18next"

// Single featured project with more details
const featuredProject = {
  title: "Warehouse Management Application",
  description:
    "A desktop application designed to help businesses efficiently track inventory levels, manage stock movements, and oversee related transactions. The system supports multiple user roles and provides detailed reports to optimize warehouse operations.",
  longDescription:
    "Our Warehouse Management Application is developed with scalability and performance in mind. It offers a structured approach to inventory tracking, ensuring accurate stock levels and smooth warehouse workflows. The application includes user role management, secure authentication, and comprehensive reporting features to aid decision-making.",
  tech: ["Java", "JavaFX", "MySQL", "Spring Boot", "Hibernate", "Git"],
  features: [
    "Multi-user role support",
    "Real-time inventory tracking",
    "Stock import and export management",
    "Detailed transaction history",
    "Comprehensive reporting system",
    "Secure authentication and access control",
  ],
  image: "/Sic_Bo/WareHouse.avif",
  timeline: "6 months",
  client: "Enterprise Logistics Solutions",
}

export const ProjectPage = () => {
  const { t } = useTranslation()

  return (
    <div className="px-4 md:px-[148px] py-12">
      <h1 className="text-4xl font-bold mb-8">WareHouse Project</h1>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Project Image */}
        <div className="w-full h-[300px] md:h-[400px] relative">
          <img
            src={featuredProject.image || "/placeholder.svg"}
            alt={featuredProject.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full text-sm">
            {featuredProject.client}
          </div>
        </div>

        {/* Project Content */}
        <div className="p-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
            {/* Left Column - Main Info */}
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">{featuredProject.title}</h2>
              <p className="text-gray-700 text-lg mb-6">{featuredProject.description}</p>
              <p className="text-gray-600 mb-8">{featuredProject.longDescription}</p>

              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="list-disc pl-5 mb-8 space-y-2">
                {featuredProject.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Tech & Details */}
            <div className="md:w-1/3 bg-gray-50 p-6 rounded-lg">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Project Timeline</h3>
                <p className="text-gray-700">{featuredProject.timeline}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Client</h3>
                <p className="text-gray-700">{featuredProject.client}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <p className="text-gray-700">Interested in a similar solution for your business?</p>
              <a href="https://www.ecount.com/vn/?S=01&C=11768428526&K=115655127018&keyword=qu%E1%BA%A3n%20l%C3%BD%20kho&matchtype=p&gad_source=1&gclid=Cj0KCQjwv_m-BhC4ARIsAIqNeBvXKwmGa0CtBE3jVa06xYod84TAkp8LhPdab-o6IqNISw0YcgMTMrMaAieDEALw_wcB" target="_blank" rel="noopener noreferrer">
                <button className="px-6 py-3 rounded-[5px] [background:linear-gradient(225deg,rgba(102,117,247,1)_0%,rgba(87,0,123,1)_100%)] text-white font-semibold">
                  Our Project
                </button>
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

