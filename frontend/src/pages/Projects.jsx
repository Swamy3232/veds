import React, { useState, useEffect } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch projects from API
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://test-check-q5kj.onrender.com/projects");
        const data = await response.json();
        setProjects(data.data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    // Loading state
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        <span className="ml-4 text-gray-700 text-lg">Loading projects...</span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-12">Our Projects</h1>
      {projects.length === 0 ? (
        <p className="text-gray-700">No projects available at the moment.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Carousel for multiple images */}
              <div className="relative">
                {project.image_urls.length === 1 ? (
                  <img
                    src={project.image_urls[0]}
                    alt={project.description}
                    className="w-full h-64 object-cover"
                  />
                ) : (
                  <div className="carousel">
                    {/* Simple image carousel */}
                    {project.image_urls.map((url, index) => (
                      <img
                        key={index}
                        src={url}
                        alt={`${project.description} - ${index + 1}`}
                        className="w-full h-64 object-cover mb-2 rounded"
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Project description */}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.description}
                </h2>
                <p className="text-gray-600 text-sm">
                  {project.image_urls.length} image{project.image_urls.length > 1 ? "s" : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
