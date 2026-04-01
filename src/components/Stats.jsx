function Stats() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-500 py-10 rounded-lg shadow-lg">

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        <div className="flex flex-col md:flex-row items-center justify-between text-white text-center gap-8">

          {/* Item 1 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">50K+</h2>
            <p className="mt-2 text-sm">Active Users</p>
          </div>

          {/* Divider */}
          <div className="hidden md:block h-12 w-[1px] bg-white/40"></div>

          {/* Item 2 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">200+</h2>
            <p className="mt-2 text-sm">Premium Tools</p>
          </div>

          {/* Divider */}
          <div className="hidden md:block h-12 w-[1px] bg-white/40"></div>

          {/* Item 3 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">4.9</h2>
            <p className="mt-2 text-sm">Rating</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Stats