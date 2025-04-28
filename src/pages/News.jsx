import React from "react";
import { FaRegCalendar, FaArrowRight } from "react-icons/fa";

const News = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20 mb-6">
      <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">
        News & Updates
      </h1>

      {/* Featured News */}
      <div className="bg-white overflow-hidden mb-12">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-96"
              src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Featured News"
            />
          </div>
          <div className="p-8">
            <div className="flex items-center text-sm text-gray-600 mb-2">
              June 15, 2025
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Major Breakthrough in Ocean Cleanup Technology
            </h2>
            <p className="text-gray-600 mb-4">
              Our team has developed a new automated cleanup system that can
              collect microplastics with 95% efficiency, marking a significant
              advancement in ocean conservation efforts.
            </p>
            <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center">
              Read Full Story <FaArrowRight className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white  overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src="https://images.unsplash.com/photo-1569254982489-93e2fdf7fd45?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="News 1"
          />
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <FaRegCalendar className="h-4 w-4 mr-2" />
              June 10, 2025
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Partnership with Global Conservation Group
            </h3>
            <p className="text-gray-600 mb-4">
              Reform joins forces with international conservation organizations
              to expand our impact globally.
            </p>
            <button className="text-blue-600 hover:text-blue-800">
              Read More →
            </button>
          </div>
        </div>

        <div className="bg-white  overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src="https://images.unsplash.com/photo-1706612203777-4e2145d4bc8f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <FaRegCalendar className="h-4 w-4 mr-2" />
              June 5, 2025
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Success in Coral Reef Restoration
            </h3>
            <p className="text-gray-600 mb-4">
              Our latest coral restoration project shows promising results with
              80% survival rate.
            </p>
            <button className="text-blue-600 hover:text-blue-800">
              Read More →
            </button>
          </div>
        </div>

        <div className="bg-white  overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src="https://images.unsplash.com/photo-1618277043431-1c85e8462f70?q=80&w=1155&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="News 3"
          />
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <FaRegCalendar className="h-4 w-4 mr-2" />
              May 30, 2025
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Community Impact Report Released
            </h3>
            <p className="text-gray-600 mb-4">
              Annual report shows significant progress in local community
              engagement and cleanup efforts.
            </p>
            <button className="text-blue-600 hover:text-blue-800">
              Read More →
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-blue-gray-50 rounded-xl p-8 text-black">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="mb-6 md:mb-0 md:mr-6 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
            <p className="opacity-90">
              Subscribe to our newsletter for the latest news and updates about
              our ocean cleanup initiatives.
            </p>
          </div>
          <div className="flex w-full md:w-auto bg-gray-50">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg w-full md:w-64 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="text-white bg-blue-500 px-6 py-2 rounded-r-lg hover:bg-blue-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
//
