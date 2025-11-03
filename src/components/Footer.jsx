import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-300 to-purple-600 text-white font-manrope rounded-t-[2rem] px-6 py-12">
      <div className="container mx-auto">
        {/* "Get In Touch" Section */}
        <div className="text-center md:text-left mb-12">
          <h2 className="text-6xl font-semibold">Get In Touch</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Contact Us Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="mr-3">📍</span>
                <span>123 Main Street, Anytown, USA</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3">📧</span>
                <a
                  href="mailto:contact@notebook.com"
                  className="hover:underline"
                >
                  contact@notebook.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-3">📞</span>
                <span>(123) 456-7890</span>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Join Our Newsletter</h3>
            <p className="mb-4 text-sm">
              Get the latest news, updates, and tips straight to your inbox.
            </p>
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full rounded-r-none text-gray-800"
              />
              <button className="btn bg-purple-800 text-white rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <hr className="border-slate-300 border-2" />
        {/* Footer Bottom  */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-white/80 text-lg font-semibold">
          <p className=" mb-4 md:mb-0">
            &copy; 2025 NoteBook. All rights reserved.
          </p>
          <div className="flex items-center">
            <span className="mr-4">Follow Us</span>
            <div className="flex space-x-4">
              {/* Replace with actual icons */}
              <a href="#" className="hover:opacity-75">
                <img src="/src/assets/ig.png" alt="" />
              </a>
              <a href="#" className="hover:opacity-75">
                <img src="/src/assets/fb.png" alt="" />
              </a>
              <a href="#" className="hover:opacity-75">
                <img src="/src/assets/x.png" alt="" />
              </a>
              <a href="#" className="hover:opacity-75">
                <img src="/src/assets/in.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
