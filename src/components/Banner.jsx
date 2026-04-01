import bannerImg from '../assets/banner.png'


function Banner() {
  return (

    <div className="min-h-[80vh] flex items-center" >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10">
      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* Left */}
        <div className="max-w-xl">

          <div className="inline-flex items-center px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">
            🟣New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
            Supercharge Your Digital Workflow
          </h1>

          <p className="text-gray-600 mt-4 max-w-md">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. 
            Start creating faster today. <br />
            Explore Products.
          </p>

          <div className="flex gap-5 mt-8">

            <button className="px-6 py-3 rounded-lg text-white bg-gradient-to-r from-purple-600 to-blue-400 font-medium">
              Explore Products
            </button>

            <button className="px-6 py-3 rounded-lg border border-purple-500 text-purple-600 flex items-center gap-2 font-medium">
              ▶ Watch Demo
            </button>

          </div>
        </div>

        {/* Right */}


        <div>
          <img
           src={bannerImg}
            alt="banner"
           className="w-full rounded-2xl max-w-md lg:max-w-lg"
         />
        </div>

      </div>
    </div>
    </div>
  )
}

export default Banner