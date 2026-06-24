import React, { useState } from 'react';

export default function PricingPage() {
  // State to manage selected region: 'IN' or 'INTL'
  const [region, setRegion] = useState('IN');

  // Pricing Data structure
  const pricingData = {
    IN: {
      currency: '₹',
      suffix: '/mo',
      plans: [
        {
          name: 'Starter',
          price: '499',
          description: 'Perfect for budding designers and indie hackers in India.',
          features: ['5 Active Projects', '100 AI Generations / mo', 'Export to Figma', 'Standard Support'],
          isPopular: false,
          buttonText: 'Start Free Trial',
        },
        {
          name: 'Pro',
          price: '1,499',
          description: 'For professional creators and fast-growing teams.',
          features: ['Unlimited Projects', 'Unlimited AI Generations', 'Export to Figma & React', 'Priority Support', 'Team Collaboration'],
          isPopular: true,
          buttonText: 'Upgrade to Pro',
        },
      ],
    },
    INTL: {
      currency: '$',
      suffix: '/mo',
      plans: [
        {
          name: 'Starter',
          price: '15',
          description: 'Perfect for budding designers and indie hackers globally.',
          features: ['5 Active Projects', '100 AI Generations / mo', 'Export to Figma', 'Standard Support'],
          isPopular: false,
          buttonText: 'Start Free Trial',
        },
        {
          name: 'Pro',
          price: '39',
          description: 'For professional creators and fast-growing teams.',
          features: ['Unlimited Projects', 'Unlimited AI Generations', 'Export to Figma & React', 'Priority Support', 'Team Collaboration'],
          isPopular: true,
          buttonText: 'Upgrade to Pro',
        },
      ],
    },
  };

  const currentPricing = pricingData[region];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-20 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-base font-semibold text-indigo-400 tracking-wide uppercase">Pricing Plans</h2>
        <p className="mt-2 text-4xl font-extrabold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
          Fair pricing for creators everywhere
        </p>
        <p className="mt-4 text-xl text-slate-400">
          Choose the plan that fits your workflow. Switch regions below to see local pricing.
        </p>

        {/* Region Switcher Toggle */}
        <div className="mt-10 inline-flex items-center bg-slate-800 p-1.5 rounded-xl border border-slate-700">
          <button
            onClick={() => setRegion('IN')}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
              region === 'IN'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            🇮🇳 India (INR)
          </button>
          <button
            onClick={() => setRegion('INTL')}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
              region === 'INTL'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            🌐 International (USD)
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-2 items-start px-4 sm:px-12 lg:px-0">
        {currentPricing.plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-2xl p-8 bg-slate-800/50 backdrop-blur-sm border transition-all duration-300 hover:translate-y-[-4px] ${
              plan.isPopular
                ? 'border-indigo-500 shadow-xl shadow-indigo-500/10'
                : 'border-slate-700/80 hover:border-slate-600'
            }`}
          >
            {/* Popular Badge */}
            {plan.isPopular && (
              <span className="absolute top-0 right-6 transform -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full shadow-sm">
                Most Popular
              </span>
            )}

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
              <p className="mt-2 text-sm text-slate-400 min-h-[40px]">{plan.description}</p>
              <div className="mt-6 flex items-baseline text-white">
                <span className="text-4xl font-extrabold tracking-tight">{currentPricing.currency}{plan.price}</span>
                <span className="ml-1 text-xl font-semibold text-slate-400">{currentPricing.suffix}</span>
              </div>
            </div>

            {/* Action Button */}
            <button
              className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-200 mb-8 ${
                plan.isPopular
                  ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20'
                  : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
              }`}
            >
              {plan.buttonText}
            </button>

            {/* Features List */}
            <div className="border-t border-slate-700/50 pt-6">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">What's included:</p>
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-300">
                    {/* Checklist Icon */}
                    <svg
                      className="h-5 w-5 text-indigo-400 shrink-0 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}