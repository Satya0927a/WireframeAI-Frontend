import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link
          to="/"
          className="flex items-center gap-2 cursor-pointer"
        >

          <span className="text-lg font-semibold text-black">
            WireframeAI
          </span>
        </Link>


        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/solutions"
            className="flex items-center gap-1 text-sm text-gray-600 hover:text-black transition hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            Blog

          </Link>

          <Link
            to="/Pricing"
            className="flex items-center gap-1 text-sm text-gray-600 hover:text-black transition hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            Pricing

          </Link>

          <Link
            to="/about"
            className="text-sm text-gray-600 hover:text-black hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            About Us
          </Link>

          <Link
            to="/components"
            className="text-sm text-gray-600 hover:text-black transition hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            Components
          </Link>

        </div>


        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="text-sm text-gray-600 hover:text-black transition hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition cursor-pointer"
          >
            Get Started Free
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;