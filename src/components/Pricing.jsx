const Pricing = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10 ">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-3 text-center">
        Choose Your Plan
      </h2>
      <p className="text-gray-500 mb-10 text-center">
        Flexible pricing for everyone
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="p-6 bg-gray-100 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Basic</h3>
          <p className="text-gray-500 mb-4">For beginners</p>

          <p className="text-3xl font-bold mb-4">
            $10 <span className="text-sm">/month</span>
          </p>

          <ul className="space-y-2 mb-6">
            <li>✔ 10 Tools Access</li>
            <li>✔ Basic Support</li>
            <li>✔ Limited Features</li>
          </ul>

          <button className="btn btn-outline w-full">
            Get Started
          </button>
        </div>

        {/* Card 2 (Highlighted) */}
        <div className="p-6 rounded-xl text-white bg-gradient-to-r from-blue-500 to-purple-500 scale-105">
          <h3 className="text-xl font-bold mb-2">Pro</h3>
          <p className="mb-4">Best for professionals</p>

          <p className="text-3xl font-bold mb-4">
            $20 <span className="text-sm">/month</span>
          </p>

          <ul className="space-y-2 mb-6">
            <li>✔ Unlimited Tools</li>
            <li>✔ Priority Support</li>
            <li>✔ All Features</li>
          </ul>

          <button className="btn w-full bg-white text-black">
            Get Started
          </button>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-gray-100 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Enterprise</h3>
          <p className="text-gray-500 mb-4">For large teams</p>

          <p className="text-3xl font-bold mb-4">
            $50 <span className="text-sm">/month</span>
          </p>

          <ul className="space-y-2 mb-6">
            <li>✔ Team Access</li>
            <li>✔ Dedicated Support</li>
            <li>✔ Custom Features</li>
          </ul>

          <button className="btn btn-outline w-full">
            Get Started
          </button>
        </div>

      </div>
    </section>
  );
};

export default Pricing;