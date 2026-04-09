import React from 'react';

const AppleStoreBenefits = () => {
  const benefits = [
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M2 10h20" />
        </svg>
      ),
      title: (
        <>
          No Cost EMI.<sup className="text-xs">§</sup> Plus Instant Cashback.<sup className="text-xs">§</sup>
        </>
      ),
      description: ''
    },
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9z" />
          <path d="M15 4v4M15 16v4M4 9h4M16 9h4" />
        </svg>
      ),
      title: (
        <>
          <span className="text-pink-600">Exchange your smartphone.</span> Get ₹3350.00-₹64000.00 in credit towards a new one.<sup className="text-xs">†</sup>
        </>
      ),
      description: ''
    },
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ),
      title: (
        <>
          <span className="text-pink-600">Customise</span> a Mac and style an Apple Watch just for them.
        </>
      ),
      description: ''
    },
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" strokeLinecap="round" />
          <line x1="15" y1="9" x2="15.01" y2="9" strokeLinecap="round" />
        </svg>
      ),
      title: (
        <>
          Make it theirs. <span className="text-pink-600">Engrave a mix of emoji, names and numbers for free.</span>
        </>
      ),
      description: ''
    },
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="3" width="15" height="13" rx="2" />
          <path d="M16 8h5l-2 4h-3" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
      title: (
        <>
          <span className="text-pink-600">Enjoy free delivery,</span> or easy pickup from an Apple Store.
        </>
      ),
      description: ''
    },
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9z" />
          <path d="M15 4v4M15 16v4M4 9h4M16 9h4" />
        </svg>
      ),
      title: (
        <>
          <span className="text-pink-600">Trade in your eligible Mac, Apple Watch or iPad for instant credit.</span>
          <sup className="text-xs">†</sup> In-store only.
        </>
      ),
      description: ''
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 drop-shadow-sm">
          <span className="text-pink-600">The Apple Store difference.</span>{' '}
          <span className="text-gray-600">Even more ways to feel the love.</span>
        </h2>

        {/* Benefits Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 transform perspective-1000 border border-gray-100"
              style={{
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden'
              }}
            >
              <div className="text-pink-600 mb-4 transform transition-transform duration-300 hover:scale-110 drop-shadow-md">
                {benefit.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-900 leading-snug">
                {benefit.title}
              </h3>
              {benefit.description && (
                <p className="mt-2 text-sm text-gray-600">
                  {benefit.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Valentine's Day Section */}
        <div className="mt-12 p-6 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100">
          <h3 className="text-xl font-semibold">
            <span className="text-pink-600">Valentine's Day.</span>{' '}
            <span className="text-gray-600">Sweet gifts at short notice.</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AppleStoreBenefits;