import React from "react";
import { NavLink } from "react-router-dom";
import { FaWater, FaTint, FaRegLifeRing, FaAnchor } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20 space-y-8">
      <h1 className="text-4xl font-bold text-blue-800">
        Our Projects & Initiatives
      </h1>

      {/* Active Projects */}
      <div className="mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 overflow-hidden">
            <div className="relative">
              <img
                className="w-full h-64 object-cover"
                src="https://images.unsplash.com/photo-1706612204508-d48772f8731b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Ocean Cleanup"
              />
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                Active
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Project Blue Wave
              </h3>
              <p className="text-gray-600 mb-4">
                Large-scale cleanup operation using innovative floating barriers
                to collect ocean plastic waste and more.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <FaWater className="h-5 w-5 text-blue-400 mr-2" />
                  <span className="text-gray-700">
                    10 coastal areas targeted
                  </span>
                </div>
                <div className="flex items-center">
                  <FaTint className="h-5 w-5 text-blue-400 mr-2" />
                  <span className="text-gray-700">80% completion rate</span>
                </div>
              </div>
              <button className="mt-6 bg-blue-800 text-white px-6 py-2 hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>
          </div>

          <div className="bg-gray-50 overflow-hidden">
            <div className="relative">
              <img
                className="w-full h-64 object-cover"
                src="https://images.unsplash.com/photo-1719754522656-10b30c29b598?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Coral Restoration"
              />
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                Active
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Coral Guardian
              </h3>
              <p className="text-gray-600 mb-4">
                Restoration and protection of coral reef ecosystems through
                advanced cultivation techniques.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <FaRegLifeRing className="h-5 w-5 text-blue-400 mr-2" />
                  <span className="text-gray-700">
                    5 reef sites under protection
                  </span>
                </div>
                <div className="flex items-center">
                  <FaAnchor className="h-5 w-5 text-blue-400 mr-2" />
                  <span className="text-gray-700">3,000 corals replanted</span>
                </div>
              </div>
              <button className="mt-6 bg-blue-800 text-white px-6 py-2  hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Project Timeline */}
      <div className="bg-white  p-8 mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Project Timeline
        </h2>
        <div className="space-y-8">
          <div className="flex">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              <div className="flex-1 w-0.5 bg-blue-600"></div>
            </div>
            <div className="ml-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Project Inception
              </h3>
              <p className="text-gray-600 mt-1">
                Initial research and planning phase
              </p>
              <p className="text-sm text-gray-500 mt-1">January 2025</p>
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              <div className="flex-1 w-0.5 bg-blue-600"></div>
            </div>
            <div className="ml-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Community Engagement
              </h3>
              <p className="text-gray-600 mt-1">
                Local partnership development
              </p>
              <p className="text-sm text-gray-500 mt-1">March 2025</p>
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              <div className="flex-1 w-0.5 bg-gray-300"></div>
            </div>
            <div className="ml-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Implementation Phase
              </h3>
              <p className="text-gray-600 mt-1">
                Active cleanup operations begin
              </p>
              <p className="text-sm text-gray-500 mt-1">June 2025</p>
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            </div>
            <div className="ml-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Impact Assessment
              </h3>
              <p className="text-gray-600 mt-1">Evaluation and reporting</p>
              <p className="text-sm text-gray-500 mt-1">December 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Get Involved CTA */}
      <div className="bg-gray-50  p-8 text-black text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
        <p className="text-xl mb-6 ">
          Be part of our initiatives and help create a cleaner ocean for future
          generations.
        </p>
        <NavLink
          to="/contact"
          className="bg-blue-800 text-white px-8 py-3  font-semibold hover:bg-blue-600 transition"
        >
          Contact Us
        </NavLink>
      </div>
    </div>
  );
};

export default Projects;
