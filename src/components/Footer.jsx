import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const companyLinks = [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Partners', href: '#' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '#' },
    { name: 'Safety Information', href: '#' },
    { name: 'Cancellation Options', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Accessibility', href: '#' }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.875 1.75H6.125C3.70875 1.75 1.75 3.70875 1.75 6.125V14.875C1.75 17.2912 3.70875 19.25 6.125 19.25H14.875C17.2912 19.25 19.25 17.2912 19.25 14.875V6.125C19.25 3.70875 17.2912 1.75 14.875 1.75Z"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.3125 5.6875H15.3213M14 9.94875C14.108 10.677 13.9836 11.4207 13.6445 12.0741C13.3055 12.7276 12.769 13.2575 12.1114 13.5885C11.4538 13.9194 10.7086 14.0346 9.98182 13.9177C9.25499 13.8007 8.58354 13.4576 8.06299 12.937C7.54243 12.4165 7.19927 11.745 7.08231 11.0182C6.96536 10.2914 7.08056 9.54616 7.41154 8.88858C7.74252 8.231 8.27242 7.69452 8.92586 7.35546C9.57931 7.0164 10.323 6.89201 11.0513 7C11.7941 7.11015 12.4817 7.45628 13.0127 7.98727C13.5437 8.51826 13.8899 9.20594 14 9.94875Z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.25 3.49904C19.25 3.49904 18.6375 5.33654 17.5 6.47404C18.9 15.224 9.275 21.6115 1.75 16.624C3.675 16.7115 5.6 16.099 7 14.874C2.625 13.5615 0.4375 8.39904 2.625 4.37404C4.55 6.64904 7.525 7.96154 10.5 7.87404C9.7125 4.19904 14 2.09904 16.625 4.54904C17.5875 4.54904 19.25 3.49904 19.25 3.49904Z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 1.75H13.125C11.9647 1.75 10.8519 2.21094 10.0314 3.03141C9.21094 3.85188 8.75 4.96468 8.75 6.125V8.75H6.125V12.25H8.75V19.25H12.25V12.25H14.875L15.75 8.75H12.25V6.125C12.25 5.89294 12.3422 5.67038 12.5063 5.50628C12.6704 5.34219 12.8929 5.25 13.125 5.25H15.75V1.75Z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 7C15.3924 7 16.7277 7.55312 17.7123 8.53769C18.6969 9.52226 19.25 10.8576 19.25 12.25V18.375H15.75V12.25C15.75 11.7859 15.5656 11.3408 15.2374 11.0126C14.9092 10.6844 14.4641 10.5 14 10.5C13.5359 10.5 13.0908 10.6844 12.7626 11.0126C12.4344 11.3408 12.25 11.7859 12.25 12.25V18.375H8.75V12.25C8.75 10.8576 9.30312 9.52226 10.2877 8.53769C11.2723 7.55312 12.6076 7 14 7ZM1.75 7.875H5.25V18.375H1.75V7.875Z"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 5.25C4.4665 5.25 5.25 4.4665 5.25 3.5C5.25 2.5335 4.4665 1.75 3.5 1.75C2.5335 1.75 1.75 2.5335 1.75 3.5C1.75 4.4665 2.5335 5.25 3.5 5.25Z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-blue-50/50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-gray-800 rounded flex items-center justify-center">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 27 27">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.70092 7.8607C8.04663e-08 9.14123 0 10.6859 0 13.7753V15.8288C0 21.0948 1.60933e-07 23.728 1.58162 25.3639C3.16325 27 5.70883 27 10.8 27H16.2C21.2911 27 23.8368 27 25.4183 25.3639C27 23.728 27 21.0948 27 15.8288V13.7753C27 10.6859 27 9.14123 26.2991 7.8607C25.5982 6.58018 24.3177 5.78544 21.7566 4.19596L19.0566 2.52027C16.3493 0.840091 14.9957 0 13.5 0C12.0043 0 10.6507 0.840091 7.94344 2.52027L5.24344 4.19598C2.68238 5.78544 1.40184 6.58018 0.70092 7.8607ZM10.0529 18.0866C9.6037 17.7536 8.96958 17.8478 8.63659 18.2971C8.30361 18.7464 8.39784 19.3805 8.84708 19.7134C10.1598 20.6865 11.7653 21.2625 13.5 21.2625C15.2347 21.2625 16.8402 20.6865 18.1529 19.7134C18.6022 19.3805 18.6964 18.7464 18.3634 18.2971C18.0305 17.8478 17.3964 17.7536 16.9471 18.0866C15.9637 18.8154 14.777 19.2375 13.5 19.2375C12.223 19.2375 11.0363 18.8154 10.0529 18.0866Z"/>
                </svg>
              </div>
              <span className="text-xl font-semibold text-gray-800">QuickStay</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas and private islands.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-gray-600 font-playfair mb-4">COMPANY</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-600 text-sm hover:text-gray-800 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-gray-600 font-playfair mb-4">SUPPORT</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-600 text-sm hover:text-gray-800 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            © 2025 QuickStay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
