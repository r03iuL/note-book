import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What our users are saying
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Loved by thousands of users worldwide.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center">
              <img
                className="h-12 w-12 rounded-full"
                src="https://i.pravatar.cc/150?img=1"
                alt="User"
              />
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  Sarah Johnson
                </h4>
                <p className="text-gray-600">@sarahj</p>
              </div>
            </div>
            <p className="mt-6 text-gray-600">
              "This note-taking app has revolutionized my workflow. It's so
              intuitive and easy to use. I can't imagine my life without it."
            </p>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center">
              <img
                className="h-12 w-12 rounded-full"
                src="https://i.pravatar.cc/150?img=2"
                alt="User"
              />
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  Michael Smith
                </h4>
                <p className="text-gray-600">@msmith</p>
              </div>
            </div>
            <p className="mt-6 text-gray-600">
              "I've tried many note-taking apps, but this one is by far the
              best. The features are amazing and the customer support is top-notch."
            </p>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center">
              <img
                className="h-12 w-12 rounded-full"
                src="https://i.pravatar.cc/150?img=3"
                alt="User"
              />
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  Emily Davis
                </h4>
                <p className="text-gray-600">@emilyd</p>
              </div>
            </div>
            <p className="mt-6 text-gray-600">
              "I love how I can access my notes from any device. It's so
              convenient and has helped me stay organized."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
