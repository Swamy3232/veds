import React, { useState } from "react";

const GetQuote = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    location: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const subject = encodeURIComponent("New Project Quote Request");
  const body = encodeURIComponent(
    `Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Project Type: ${form.projectType}
Location: ${form.location}

Project Requirements:
${form.message}
`
  );

  window.location.href = `mailto:thevedsgroup@gmail.com?subject=${subject}&body=${body}`;

  setForm({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    location: "",
    message: "",
  });
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Professional Header with Background */}
      <div className="relative bg-gradient-to-r from-amber-900 to-indigo-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Request a <span className="text-amber-300">Detailed Quote</span>
            </h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
              Share your project vision with us. Receive a comprehensive, 
              Vastu-aligned proposal crafted by our expert architects and designers.
            </p>
            <div className="mt-8 flex items-center justify-center">
              <div className="w-16 h-1 bg-amber-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 -mt-8">
        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-gray-50 to-white px-8 py-6 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-amber-100 rounded-lg">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Project Information</h2>
                <p className="text-gray-600 mt-1">Fill in the details below for a personalized quote</p>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Details Section */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <span className="w-2 h-5 bg-amber-600 rounded-full"></span>
                  Contact Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                    //   placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                    //   placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                    // placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Project Details Section */}
              <div className="space-y-6 pt-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <span className="w-2 h-5 bg-amber-600 rounded-full"></span>
                  Project Details
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 bg-white appearance-none"
                    >
                      <option value="" disabled>Select project type</option>
                      <option value="Residential">Residential Construction</option>
                      <option value="Commercial">Commercial Building</option>
                      <option value="Industrial">Industrial Project</option>
                      <option value="Renovation">Renovation & Remodeling</option>
                      <option value="Interior Design">Interior Design</option>
                      <option value="Vastu Consultancy">Vastu Consultancy</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                      placeholder="City, State, Country"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Requirements *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 resize-none"
                    placeholder="Please describe your project requirements, timeline, budget range, and any specific Vastu considerations..."
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Be as detailed as possible for a more accurate quote
                  </p>
                </div>
              </div>

              {/* Submit Section */}
              <div className="pt-6 border-t border-gray-100">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600">
                      Your information is secure. We respect your privacy and 
                      will not share your details with third parties.
                    </p>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-10 py-3.5 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-lg 
                               hover:from-amber-700 hover:to-amber-800 focus:ring-4 focus:ring-amber-200 
                               transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl
                               ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Request Detailed Quote
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </form>

            {/* Assurance Section */}
            <div className="mt-10 pt-8 border-t border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-50 rounded-full mb-4">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800">24-Hour Response</h4>
                  <p className="text-sm text-gray-600 mt-1">Quick turnaround on all quotes</p>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-50 rounded-full mb-4">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800">No Hidden Costs</h4>
                  <p className="text-sm text-gray-600 mt-1">Transparent, all-inclusive pricing</p>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-50 rounded-full mb-4">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800">Vastu Aligned</h4>
                  <p className="text-sm text-gray-600 mt-1">Harmonious design principles</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            Trusted by 500+ clients • ISO 9001 Certified • 30+ Years of Excellence
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;