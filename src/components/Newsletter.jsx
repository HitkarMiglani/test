import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-4xl font-playfair font-medium text-white mb-4">
          Stay Inspired
        </h2>
        <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">
          Join our newsletter and be the first to discover new destinations, exclusive offers, and travel inspiration.
        </p>
        
        {/* Subscription Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:border-white/40"
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
          >
            <span>Subscribe</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
            </svg>
          </button>
        </form>
        
        {/* Disclaimer */}
        <p className="text-white/50 text-sm">
          By subscribing, you agree to our Privacy Policy and consent to receive updates.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
