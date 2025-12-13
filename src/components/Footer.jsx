import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-teal-600 text-gray-300 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Logo + Description */}
        <div>
          <h2 className="text-xl font-bold text-white">GlyCare</h2>
          <p className="text-sm mt-3 w-52 mx-auto md:mx-0">
            Helping diabetic patients with healthy recipes and diet-friendly products.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/recipes" className="hover:text-white">Recipes</Link></li>
            <li><Link to="/store" className="hover:text-white">Store</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm">Email: support@glycare.com</p>
          <p className="text-sm">Phone: +91 999652539</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-700 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} GlyCare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
