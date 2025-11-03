import React from "react";

const FAQ = () => {
  return (
    <div id="faq" className="py-24 bg-white font-manrope min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800">Frequently Asked Questions</h2>
          <p className="text-gray-600 mt-6">Find answers to common questions about NoteBook.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          <div className="collapse collapse-arrow bg-base-200 border-2 border-purple-300 hover:scale-105 transition ">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">How do I create an account?</div>
            <div className="collapse-content text-sm">
              <p>Click the "Sign Up" button in the top right corner and follow the registration process.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 border-2 border-purple-300 collapse-primary hover:scale-105 transition ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
            <div className="collapse-content text-sm">
              <p>Click on "Forgot Password" on the login page and follow the instructions sent to your email.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 border-2 border-purple-300 collapse-primary hover:scale-105 transition ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">How do I update my profile information?</div>
            <div className="collapse-content text-sm">
              <p>Go to "My Account" settings and select "Edit Profile" to make changes.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 border-2 border-purple-300 collapse-primary hover:scale-105 transition ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">Is NoteBook available on mobile devices?</div>
            <div className="collapse-content text-sm">
              <p>Yes, NoteBook is designed to be fully responsive and works seamlessly on all mobile devices through your web browser.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 border-2 border-purple-300 collapse-primary hover:scale-105 transition ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">Can I collaborate with others on notes?</div>
            <div className="collapse-content text-sm">
              <p>Collaboration features are available with our Pro plan, allowing you to share and edit notes with your team in real-time.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;