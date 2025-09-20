const plans = [
  {
    name: "Starter",
    price: "$99/mo",
    tagline: "Perfect for individuals & small projects",
    features: [
      "1 Professional Website",
      "Basic SEO Setup",
      "Standard Email Support",
    ],
  },
  {
    name: "Growth",
    price: "$199/mo",
    tagline: "Best for growing brands & small teams",
    popular: true,
    features: [
      "Up to 3 Websites",
      "Advanced SEO + Analytics",
      "Priority Support (24h Response)",
      "Monthly Performance Reports",
    ],
  },
  {
    name: "Premium",
    price: "$399/mo",
    tagline: "Complete solution for scaling businesses",
    features: [
      "Unlimited Websites & Pages",
      "Full Digital Marketing Suite",
      "Dedicated Account Manager",
      "Custom Integrations & Automation",
      "Weekly Strategy Calls",
    ],
  },
];

export default function PricingTable() {
  return (
    <section className="py-20 px-6 text-center bg-vermaxx-offwhite">
      {/* Heading */}
      <h2 className="text-4xl font-heading text-vermaxx-green mb-4">
        Flexible Pricing Plans
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Choose a plan that matches your stage. Whether you’re just starting out or scaling fast,
        we’ve got the right solution for you.
      </p>

      {/* Plans Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border rounded-lg p-8 shadow-md transition transform hover:-translate-y-2 ${
              plan.popular
                ? "border-vermaxx-green shadow-xl bg-white"
                : "border-gray-200 bg-white"
            }`}
          >
            <h3 className="text-2xl font-heading mb-1">{plan.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{plan.tagline}</p>
            <p className="text-4xl font-bold text-vermaxx-green mb-6">
              {plan.price}
            </p>
            <ul className="text-left space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-gray-700 flex items-start">
                  <span className="text-vermaxx-green mr-2">✔</span> {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full px-6 py-3 rounded-lg font-heading transition ${
                plan.popular
                  ? "bg-vermaxx-green text-white hover:bg-green-700"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}