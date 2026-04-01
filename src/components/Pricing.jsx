const Pricing = () => {


  return (


    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10 ">

      {/* Heading */}
      <h2 className="text-3xl font-bold mb-3 text-center">
        Simple, Transparent Pricing
      </h2>
      <p className="text-gray-500 mb-10 text-center">
        Choose the plan that fits your needs. Upgrade or gowngrade anytime
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="p-6 bg-gray-100 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Starter</h3>
          <p className="text-gray-500 mb-4">Perfect for getting started</p>

          <p className="text-3xl font-bold mb-4">
            $0 <span className="text-sm">/month</span>
          </p>

          <ul className="space-y-2 mb-6">
            <li>✔ Access to 10 freeTools </li>
            <li>✔ Basic templates</li>
            <li>✔ Community support</li>
            <li>✔ 1 project per month</li>
          </ul>

          <button className="btn btn-outline w-full bg-gradient-to-r from-purple-600 to-blue-400 text-white rounded-[30px]">
            Get Started free
          </button>
        </div>

        {/* Card 2 it is highlited */}

        <div className="p-6 rounded-xl text-white bg-gradient-to-r from-blue-500 to-purple-500 scale-105">
          <h3 className="text-xl font-bold mb-2">Pro</h3>
          <p className="mb-4">Best for professionals</p>

          <p className="text-3xl font-bold mb-4">
            $20 <span className="text-sm">/month</span>
          </p>

          <ul className="space-y-2 mb-6">
            <li>✔ Access to all premium tools</li>
            <li>✔ Unlimited Templates</li>
            <li>✔ Unlimited Projects</li>
            <li>✔ Cloud Sync</li>
            <li>✔ Priority Support</li>
            <li>✔ All Features</li>
          </ul>

          <button className="btn w-full bg-white text-purple-600 rounded-[30px]">
            Get Started
          </button>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-gray-100 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Enterprise</h3>
          <p className="text-gray-500 mb-4">For teams and business </p>

          <p className="text-3xl font-bold mb-4">
            $50 <span className="text-sm">/month</span>
          </p>

          <ul className="space-y-2 mb-6">
            <li>✔ Everything in Pro</li>
            <li>✔ Team collaboration</li>
            <li>✔ Custom integrations</li>
            
            <li>✔ Dedicated Support</li>
            <li>✔ Custom Features</li>
          </ul>

          <button className="btn btn-outline w-full bg-gradient-to-r from-blue-500 to-purple-500 scale-105 rounded-[30px] text-white">
            Contact Sales
          </button>
        </div>

      </div>
    </section>
  );
};

export default Pricing;