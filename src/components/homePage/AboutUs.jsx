import React from "react";

const AboutUs = () => {
  return (
    <div id="about-us" className="py-24 bg-gray-50 font-manrope relative overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-6 z-10 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">About <span className="font-lobster">NoteBook</span></h2>
            <p className="text-gray-600 mb-6">
              At NoteBook, we believe in the power of clear thinking. Our mission is to provide a beautiful, fast, and minimalist tool to help you capture your thoughts, organize your tasks, and achieve clarity in your daily life.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h3>
            <ul className="space-y-4">
                <li className="flex items-center">
                    <img src="/src/assets/mark.png" alt="Checkmark" className="w-6 h-6 mr-2" />
                    <span>Simplicity and Clarity</span>
                </li>
                <li className="flex items-center">
                    <img src="/src/assets/mark.png" alt="Checkmark" className="w-6 h-6 mr-2" />
                    <span>User-Centric Design</span>
                </li>
                <li className="flex items-center">
                    <img src="/src/assets/mark.png" alt="Checkmark" className="w-6 h-6 mr-2" />
                    <span>Constant Improvement</span>
                </li>
                <li className="flex items-center">
                    <img src="/src/assets/mark.png" alt="Checkmark" className="w-6 h-6 mr-2" />
                    <span>Security and Privacy</span>
                </li>
                <li className="flex items-center">
                    <img src="/src/assets/mark.png" alt="Checkmark" className="w-6 h-6 mr-2" />
                    <span>Accessibility for All</span>
                </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <img src="/src/assets/abstract.jpg" alt="About Us" className="rounded-lg shadow-lg max-w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
