import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      features: [
        "Up to 50 notes",
        "Basic search functionality",
        "Standard support",
        "Access on 1 device",
      ],
      buttonText: "Get Started",
      highlight: false,
    },
    {
      name: "Pro",
      price: "$10",
      features: [
        "Unlimited notes",
        "Advanced search with filters",
        "Priority email support",
        "Access on up to 3 devices",
        "Real-time collaboration",
      ],
      buttonText: "Upgrade to Pro",
      highlight: true,
    },
    {
      name: "Pro Plus",
      price: "$20",
      features: [
        "All Pro features",
        "AI-powered insights",
        "Team management tools",
        "24/7 dedicated support",
        "Access on unlimited devices",
      ],
      buttonText: "Go Pro Plus",
      highlight: false,
    },
  ];

  return (
    <div id="pricing" className="py-18 bg-white font-manrope min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800">Choose Your Plan</h2>
          <p className="text-gray-600 mt-10">Select the plan that best fits your needs,from what we have carefully desingned considering your best interest.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 py-10 ">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-12 shadow-lg ${plan.highlight ? 'bg-purple-600/60 text-white transform scale-105' : 'bg-gray-200/80 text-gray-800'} flex flex-col justify-between h-140 w-110 `}
            >
              <h3 className="text-4xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-lg font-medium">/mo</span></p>
              <ul className="space-y-4 mb-8  ">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <img src="/src/assets/mark.png" alt="Checkmark" className="w-6 h-6 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold text-lg transition ${plan.highlight ? 'bg-white text-purple-700 hover:bg-gray-200' : 'bg-purple-600/60 text-white hover:bg-purple-600/70'}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;