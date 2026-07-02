import { useState } from "react";
import {
  Search,
  ArrowRight,
  Calendar,
  Clock,
  Sparkles,
} from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Turn Wireframes into React Code with AI",
    category: "AI",
    date: "July 2, 2026",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900",
    description:
      "Learn how AI can transform simple sketches into production-ready React and Tailwind CSS code in seconds.",
    featured: true,
  },
  {
    id: 2,
    title: "10 UI Design Mistakes Every Beginner Makes",
    category: "UI/UX",
    date: "June 28, 2026",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900",
    description:
      "Avoid common UI mistakes and build interfaces that users love.",
  },
  {
    id: 3,
    title: "Modern React Folder Structure",
    category: "React",
    date: "June 25, 2026",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900",
    description:
      "Organize your React projects like a professional developer.",
  },
  {
    id: 4,
    title: "Tailwind CSS Tips for Cleaner Code",
    category: "Tailwind",
    date: "June 22, 2026",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900",
    description:
      "Write maintainable Tailwind CSS without cluttering your components.",
  },
  {
    id: 5,
    title: "How We Built WireframeAI",
    category: "Startup",
    date: "June 20, 2026",
    readTime: "9 min",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900",
    description:
      "The journey from an idea to an AI-powered design-to-code platform.",
  },
  {
    id: 6,
    title: "Best AI Tools for Frontend Developers",
    category: "AI",
    date: "June 15, 2026",
    readTime: "4 min",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900",
    description:
      "Boost productivity with these must-have AI tools for developers.",
  },
];

const categories = [
  "All",
  "AI",
  "React",
  "UI/UX",
  "Tailwind",
  "Startup",
];

export default function Blog() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = blogs.filter((blog) => {
    const matchCategory =
      active === "All" || blog.category === active;

    const matchSearch =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.description.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  const featured = blogs.find((b) => b.featured);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}

      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-orange-600 font-medium">
          <Sparkles size={18} />
          WireframeAI Blog
        </div>

        <h1 className="mt-6 text-5xl font-black text-gray-900">
          Insights for Developers
          <span className="block text-orange-500">
            Designers & Builders
          </span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
          Learn React, Tailwind CSS, AI, UI/UX and startup lessons while
          building better products.
        </p>

        {/* Search */}

        <div className="relative max-w-xl mx-auto mt-10">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search articles..."
            className="w-full rounded-full border border-gray-200 py-4 pl-12 pr-5 outline-none focus:ring-2 focus:ring-orange-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>

      {/* Categories */}

      <section className="max-w-7xl mx-auto px-6 flex flex-wrap gap-3 justify-center mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-5 py-2 transition font-medium ${
              active === cat
                ? "bg-orange-500 text-white"
                : "bg-gray-100 hover:bg-orange-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Featured */}

      {featured && (
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center rounded-3xl overflow-hidden bg-orange-50">
            <img
              src={featured.image}
              alt=""
              className="h-full object-cover"
            />

            <div className="p-10">
              <span className="bg-orange-500 text-white rounded-full px-4 py-1 text-sm">
                Featured
              </span>

              <h2 className="text-4xl font-bold mt-5">
                {featured.title}
              </h2>

              <p className="mt-5 text-gray-600">
                {featured.description}
              </p>

              <div className="flex gap-6 mt-6 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {featured.date}
                </div>

                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  {featured.readTime}
                </div>
              </div>

              <button className="mt-8 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition">
                Read Article
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filtered.map((blog) => (
            <article
              key={blog.id}
              className="rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition duration-300 group"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt=""
                  className="h-60 w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <span className="text-orange-500 font-semibold">
                  {blog.category}
                </span>

                <h3 className="mt-3 text-2xl font-bold text-gray-900 group-hover:text-orange-500 transition">
                  {blog.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {blog.description}
                </p>

                <div className="flex justify-between mt-6 text-sm text-gray-500">
                  <span>{blog.date}</span>
                  <span>{blog.readTime}</span>
                </div>

                <button className="mt-6 flex items-center gap-2 text-orange-500 font-semibold">
                  Read More
                  <ArrowRight size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}

      <section className="bg-orange-500 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white">
            Never Miss an Update
          </h2>

          <p className="text-orange-100 mt-4">
            Get the latest AI, React, Tailwind CSS and product development
            articles directly in your inbox.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full px-6 py-4 bg-white outline-none"
            />

            <button className="rounded-full bg-gray-900 text-white px-8 py-4 hover:bg-black transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}