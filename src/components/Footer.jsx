const Footer = () => {


  return (
    <footer>

      {/* uporer footer */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-12">
        <h2 className="text-3xl font-bold mb-3">
          Ready To Transform Your Workflow?
        </h2>
        <p className="mb-6 text-gray-300">
          Join thousands of professionals who are already using Digitools to work smarter. <br /> Start Your free trial today.
        </p>

        <div className="flex justify-center gap-4">
          <button className="btn bg-white text-purple-600 rounded-[30px]">
            Explore Products
          </button>
          <button className="btn btn-outline text-white rounded-[30px]">
            View Pricing
          </button>
        </div>

        <p className="mt-4 text-sm text-gray-300">14-days free trial. 
          No credit card required. Cancel anytime
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
              Premium digital tools for creators. <br/>
              Professionals and businesses Work smarter <br />
              with our suite of powerful tools.

            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-2">Product</h3>
            <ul className="text-gray-400 space-y-1">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="text-gray-400 space-y-1">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Press</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul className="text-gray-400 space-y-1">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community </li>
              <li>Contact</li>
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