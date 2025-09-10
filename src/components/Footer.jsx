import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      // Add your API call here for subscription
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-300 border-t border-gray-300 dark:border-gray-700 mt-12 select-none">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About / Logo */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-400">
            Government of Jharkhand
          </h3>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Committed to transparent, efficient, and responsive local governance for all citizens.
          </p>
          <div className="flex space-x-5 mt-6">
            <a
              href="https://facebook.com/jharkhandgov"
              aria-label="Facebook"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
              target="_blank" rel="noreferrer"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com/jharkhandgov"
              aria-label="Twitter"
              className="text-gray-600 dark:text-gray-400 hover:text-sky-400 dark:hover:text-sky-300 transition-colors"
              target="_blank" rel="noreferrer"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://youtube.com/jharkhandgov"
              aria-label="YouTube"
              className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors"
              target="_blank" rel="noreferrer"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://linkedin.com/company/jharkhandgov"
              aria-label="LinkedIn"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-800 dark:hover:text-blue-600 transition-colors"
              target="_blank" rel="noreferrer"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Departments */}
        <div>
          <h4 className="text-md font-semibold mb-3 text-green-800 dark:text-green-400">
            Departments
          </h4>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            {[
              { name: "Sanitation", href: "/sanitation" },
              { name: "Public Works", href: "/public-works" },
              { name: "Electricity", href: "/electricity" },
              { name: "Water Supply", href: "/water" },
              { name: "Health", href: "/health" },
            ].map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  className="block hover:text-green-700 dark:hover:text-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 rounded"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-md font-semibold mb-3 text-green-800 dark:text-green-400">
            Resources
          </h4>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            {[
              { name: "Privacy Policy", href: "/privacy-policy" },
              { name: "Terms of Service", href: "/terms" },
              { name: "FAQ", href: "/faq" },
              { name: "Contact Us", href: "/contact" },
            ].map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  className="block hover:text-green-700 dark:hover:text-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 rounded"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter & Accessibility */}
        <div>
          <h4 className="text-md font-semibold mb-3 text-green-800 dark:text-green-400">
            Stay Updated
          </h4>
          {!subscribed ? (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col space-y-3"
              aria-label="Subscribe to newsletter"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600 dark:bg-gray-800 dark:text-gray-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-required="true"
              />
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-800 text-white py-2 rounded transition focus:outline-none focus:ring-4 focus:ring-green-500"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <p className="text-green-700 font-semibold">Thank you for subscribing!</p>
          )}

          <div className="mt-8 text-sm space-y-3">
            <button
              onClick={() => alert("Accessibility options coming soon!")}
              className="underline hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 rounded"
            >
              Accessibility Options
            </button>
            <button
              onClick={() => alert("Language selection coming soon!")}
              className="underline hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 rounded"
            >
              Language: English ▼
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-200 dark:bg-gray-800 py-5 text-center text-sm text-gray-600 dark:text-gray-400 relative select-none">
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="absolute right-6 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-green-700 hover:bg-green-800 text-white transition focus:outline-none focus:ring-4 focus:ring-green-600"
        >
          <FaArrowUp />
        </button>
        © {new Date().getFullYear()} Government of Jharkhand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
