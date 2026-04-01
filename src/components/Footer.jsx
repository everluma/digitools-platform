const Footer = () => {
  return (
    <footer>

      {/* Top CTA */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-12">
        <h2 className="text-3xl font-bold mb-3">
          Start Your Journey Today
        </h2>
        <p className="mb-6">
          Get access to premium digital tools instantly
        </p>

        <div className="flex justify-center gap-4">
          <button className="btn bg-white text-black">
            Get Started
          </button>
          <button className="btn btn-outline text-white">
            Learn More
          </button>
        </div>

        <p className="mt-4 text-sm">
          No credit card required
        </p>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black text-white px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

          {/* Logo */}
          <div>
            <h2 className="text-xl font-bold mb-2">
              DigiTools
            </h2>
            <p className="text-gray-400">
              Best platform for digital tools
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-2">Product</h3>
            <ul className="text-gray-400 space-y-1">
              <li>Features</li>
              <li>Pricing</li>
              <li>Updates</li>
              <li>Docs</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="text-gray-400 space-y-1">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul className="text-gray-400 space-y-1">
              <li>Help</li>
              <li>Guides</li>
              <li>Support</li>
              <li>API</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-2">Social</h3>
            <ul className="text-gray-400 space-y-1">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
            </ul>
          </div>

        </div>

        {/* Bottom line */}
        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
          <p>© 2026 DigiTools. All rights reserved.</p>
          <div className="flex gap-4">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;