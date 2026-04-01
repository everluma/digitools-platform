import user from "../assets/user.png";
import packageIcon from "../assets/package.png";
import rocket from "../assets/rocket.png";

const Steps = () => {
  return (


    
    <div className="bg-gray-50 mb-[30px]">
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10 ">
      {/* Heading */}

      <h2 className="text-3xl font-bold mb-3 text-center">
        Get Started In 3 Steps
      </h2>

      <p className="text-gray-500 mb-10 text-center">
        Start using premium digital tools in minutes, not hours
      </p>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Step 1 */}

        <div className="relative p-6 bg-base-100 shadow-lg rounded-xl">
          
          {/* Step Number */}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center font-bold">
            01
          </div>

          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl mt-[50px]">
            <img src={user} alt="user"/>
          </div>

          <h3 className="text-xl font-semibold mb-2">
            Create Account
          </h3>
          <p className="text-gray-500">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative p-6 bg-base-100 shadow-lg rounded-xl">
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center font-bold">
            02
          </div>

          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl  mt-[50px]">
            <img src={packageIcon} alt="package"/>
          </div>

          <h3 className="text-xl font-semibold mb-2">
            Choose Products
          </h3>
          <p className="text-gray-500">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative p-6 bg-base-100 shadow-lg rounded-xl">
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center font-bold">
            03
          </div>

          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl  mt-[50px]">
            <img src={rocket} alt="rocket"/>
          </div>

          <h3 className="text-xl font-semibold mb-2">
            Start Creating
          </h3>
          <p className="text-gray-500">
            Download and start using your premium tools immediately.
          </p>
        </div>

      </div>
    </section>
    </div>
  );
};

export default Steps;