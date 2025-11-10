// import React from 'react';

// const Footer = () => {
//     return (
//         <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
//         <nav>
//           <h6 className="footer-title">Services</h6>
//           <a className="link link-hover">Branding</a>
//           <a className="link link-hover">Design</a>
//           <a className="link link-hover">Marketing</a>
//           <a className="link link-hover">Advertisement</a>
//         </nav>
//         <nav>
//           <h6 className="footer-title">Company</h6>
//           <a className="link link-hover">About us</a>
//           <a className="link link-hover">Contact</a>
//           <a className="link link-hover">Jobs</a>
//           <a className="link link-hover">Press kit</a>
//         </nav>
//         <nav>
//           <h6 className="footer-title">Legal</h6>
//           <a className="link link-hover">Terms of use</a>
//           <a className="link link-hover">Privacy policy</a>
//           <a className="link link-hover">Cookie policy</a>
//         </nav>
//       </footer>
//     );
// };

// export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Logo / Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Book Vibes</h2>
          <p className="text-gray-400 text-sm">
            Discover, read, and share your favorite books. Stay inspired with Book Vibes.
          </p>
        </div>

        {/* Services */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Services</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Branding</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Design</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Marketing</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Advertisement</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Company</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-indigo-400 transition-colors">About us</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Jobs</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Press kit</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Legal</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of use</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy policy</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Cookie policy</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Text */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © 2025 Book Vibes. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
