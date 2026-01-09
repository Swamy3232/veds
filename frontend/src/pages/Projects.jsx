import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Building, Calendar, MapPin, Clock, Image as ImageIcon } from "lucide-react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState({});
  const [imageLoading, setImageLoading] = useState({});

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://test-check-q5kj.onrender.com/projects");
        const data = await response.json();
        setProjects(data.data);
        
        // Initialize active image index for each project
        const initialIndex = {};
        data.data.forEach((project, index) => {
          initialIndex[index] = 0;
        });
        setActiveImageIndex(initialIndex);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const nextImage = (projectIndex) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [projectIndex]: (prev[projectIndex] + 1) % projects[projectIndex].image_urls.length
    }));
  };

  const prevImage = (projectIndex) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [projectIndex]: prev[projectIndex] === 0 
        ? projects[projectIndex].image_urls.length - 1 
        : prev[projectIndex] - 1
    }));
  };

  const LoadingSkeleton = () => (
    <div className="fixed inset-0 bg-gradient-to-b from-gray-50 to-white py-16 overflow-y-auto z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 pt-8">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600/20 to-amber-600/10 backdrop-blur-lg px-6 py-3 rounded-full mb-6">
            <Building className="w-6 h-6 text-amber-600" />
            <span className="text-lg font-bold text-gray-800">Our Portfolio</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Building <span className="text-amber-600">Dreams</span> into Reality
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            While we prepare our portfolio showcase, explore our legacy of excellence...
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
            {[
              { value: "28+", label: "Years Experience" },
              { value: "500+", label: "Projects" },
              { value: "100%", label: "Satisfaction" },
              { value: "50+", label: "Professionals" }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-amber-600 mb-2 animate-pulse">{stat.value}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Loading Message */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 px-6 py-3 rounded-full">
              <Clock className="w-5 h-5 text-amber-600 animate-spin" />
              <span className="text-amber-700 font-medium">Crafting your visual experience...</span>
            </div>
            <p className="text-gray-500 mt-4">Loading premium content for the best viewing experience</p>
          </div>
        </div>

        {/* Loading Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="h-64 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse"></div>
              <div className="p-6">
                <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-100 rounded animate-pulse mb-3"></div>
                <div className="h-3 bg-gradient-to-r from-gray-100 to-gray-50 rounded animate-pulse mb-2"></div>
                <div className="h-3 bg-gradient-to-r from-gray-100 to-gray-50 rounded animate-pulse w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600/20 to-amber-600/10 backdrop-blur-lg px-6 py-3 rounded-full mb-6">
            <Building className="w-6 h-6 text-amber-600" />
            <span className="text-lg font-bold text-gray-800 uppercase tracking-wider">Our Portfolio</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Crafting <span className="text-amber-600">Architectural</span> Excellence
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our portfolio of meticulously designed structures, blending Vastu principles with modern engineering for timeless elegance.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
            {[
              { value: "28+", label: "Years Experience", icon: <Clock className="w-5 h-5" /> },
              { value: "500+", label: "Projects", icon: <Building className="w-5 h-5" /> },
              { value: "100%", label: "Satisfaction", icon: <ImageIcon className="w-5 h-5" /> },
              { value: "50+", label: "Professionals", icon: <Calendar className="w-5 h-5" /> }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="p-2 bg-amber-100 rounded-lg">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-amber-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-block p-8 bg-gradient-to-br from-amber-50 to-white rounded-2xl shadow-lg border border-amber-100">
              <Building className="w-16 h-16 text-amber-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Portfolio Under Construction</h3>
              <p className="text-gray-600 max-w-md mx-auto mb-6">
                We're currently curating our latest projects to showcase our architectural excellence. 
                New additions are coming soon!
              </p>
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-6 py-3 rounded-full font-medium">
                <Clock className="w-4 h-4 animate-pulse" />
                Check back soon for updates
              </div>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, projectIndex) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                {/* Image Carousel */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                  {project.image_urls.length > 0 ? (
                    <>
                      <img
                        src={project.image_urls[activeImageIndex[projectIndex] || 0]}
                        alt={project.description}
                        className="w-full h-full object-cover transition-opacity duration-500"
                        onLoad={() => setImageLoading(prev => ({ ...prev, [projectIndex]: true }))}
                      />
                      
                      {/* Image Navigation for Multiple Images */}
                      {project.image_urls.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              prevImage(projectIndex);
                            }}
                            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all opacity-0 group-hover:opacity-100"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              nextImage(projectIndex);
                            }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all opacity-0 group-hover:opacity-100"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                          
                          {/* Image Indicator Dots */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {project.image_urls.map((_, index) => (
                              <button
                                key={index}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveImageIndex(prev => ({ ...prev, [projectIndex]: index }));
                                }}
                                className={`w-2 h-2 rounded-full transition-all ${
                                  (activeImageIndex[projectIndex] || 0) === index 
                                    ? 'bg-amber-500 w-6' 
                                    : 'bg-white/60 hover:bg-white'
                                }`}
                              />
                            ))}
                          </div>
                          
                          {/* Image Counter */}
                          <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
                            <span className="font-medium">
                              {(activeImageIndex[projectIndex] || 0) + 1} / {project.image_urls.length}
                            </span>
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-100">
                      <ImageIcon className="w-12 h-12 text-gray-400" />
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-amber-100 rounded-lg">
                      <Building className="w-5 h-5 text-amber-600" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 line-clamp-2">
                      {project.description || "Architectural Project"}
                    </h2>
                  </div>
                  
                  <div className="space-y-3">
                    {/* Removed Calendar and MapPin sections */}
                    
                    <div className="pt-3 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {project.image_urls.length} image{project.image_urls.length !== 1 ? 's' : ''}
                        </span>
                        <button 
                          onClick={() => nextImage(projectIndex)}
                          className="text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center gap-1"
                        >
                          View Gallery
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        {projects.length > 0 && (
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-amber-50 to-white p-1 rounded-2xl shadow-lg">
              <div className="bg-white rounded-xl px-8 py-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Inspired by Our Work?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Let's discuss how we can bring your architectural vision to life with our 
                  expertise in Vastu-compliant design and modern engineering.
                </p>
                <button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl">
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;