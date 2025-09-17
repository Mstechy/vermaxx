const plans = [
  { name: "Basic", price: "$99/mo", features: ["1 Website", "Basic SEO", "Email Support"] },
  { name: "Growth", price: "$199/mo", features: ["3 Websites", "Advanced SEO", "Priority Support"] },
  { name: "Premium", price: "$399/mo", features: ["Unlimited Websites", "Full Marketing", "Dedicated Manager"] },
];

export default function PricingTable() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-4xl font-heading text-brand-green mb-6">Pricing Plans</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div key={index} className="border border-brand-teal rounded-lg p-6 shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-heading mb-2">{plan.name}</h3>
            <p className="text-3xl font-bold text-brand-gold mb-4">{plan.price}</p>
            <ul className="text-left space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-brand-textSecondary">✔ {feature}</li>
              ))}
            </ul>
            <button className="bg-brand-gold text-brand-offwhite px-6 py-3 rounded-lg font-heading hover:bg-brand-teal transition">
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}