import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-15 px-6">
      <div className="max-w-5xl mx-auto border border-blue-200 rounded-3xl bg-white shadow-[0_0_70px_rgba(249,115,22,0.12)]">
        <div className="flex flex-col items-center text-center px-8 py-20">

          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            Start Turning Wireframes into
            <br />
            <span className="text-blue-500">
              Production Code Today
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-gray-500 text-lg leading-8">
            Join thousands of developers building faster with AI-powered code
            generation.
          </p>

          <button className="mt-10 flex items-center gap-2 rounded-xl bg-blue-500 px-8 py-4 text-white font-semibold shadow-lg shadow-blue-300 transition hover:bg-blue-600 hover:scale-105">
            <Link
            to="/login"
            >
                Try WireframeAI
            </Link>
            <ArrowRight size={18} />
          </button>

        </div>
      </div>
    </section>
  );
};

export default CTA;