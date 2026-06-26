function Pricing() {
  const plans = [
    {
      title: "FREE PLAN",
      price: "0",
      desc: "Enjoy the free plan with essential layout limits.",
      features: [
        "5 component generations/mo",
        "React export code",
        "Access to community components",
        "Standard support",
      ],
    },
    {
      title: "PRO PLAN",
      price: "5",
      desc: "Perfect for freelancers and developers.",
      features: [
        "Everything in Free",
        "API access",
        "Team collaboration",
        "Priority support",
      ],
      popular: true,
    },
    {
      title: "TEAM PLAN",
      price: "10",
      desc: "Built for fast moving teams.",
      features: [
        "Unlimited components",
        "Advanced exports",
        "Premium components",
        "Dedicated support",
      ],
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="text-center mb-14">
        <h1 className="text-5xl font-bold text-slate-900">
          Simple, Transparent Pricing
        </h1>

        <p className="text-slate-500 mt-3">
          Explore our affordable range of pricing tiers.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-3xl bg-white p-8 border min-h-[520px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
            ${
              plan.popular
                ? "border-orange-500 shadow-md"
                : "border-slate-200"
            }`}
          >
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase">
                {plan.title}
              </h3>

              <div className="mt-3 flex items-end">
                <span className="text-orange-500 text-5xl font-bold">$</span>

                <span className="text-slate-900 text-6xl font-bold">
                  {plan.price}
                </span>

                <span className="text-slate-500 mb-2 ml-2">
                  /month
                </span>
              </div>

              <p className="text-slate-600 mt-4 min-h-[60px]">
                {plan.desc}
              </p>

             <button className="w-full cursor-pointer hover:opacity-95 active:scale-[0.98] border border-slate-200 flex items-center justify-between pl-6 h-14 pr-1 rounded-full bg-gradient-to-r from-slate-800 to-slate-900 text-white font-semibold text-[16px] transition-all shadow-sm shadow-slate-900/10">             Get started             <span className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-sm">
              {/* Clean inline SVG Arrow */}
              <svg className="w-4 h-4 text-slate-900 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>             
              </span>
         </button>

              <div className="border-t border-slate-200 mt-8 pt-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-slate-600"
                    >
                      <span className="text-orange-500 font-bold text-lg leading-none">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Pricing;