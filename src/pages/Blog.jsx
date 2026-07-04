import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Expanded blog data with full article markdown text
const BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of Web Development in 2026",
    excerpt: "From AI-driven code generation to component-driven design systems, discover the architectural shifts defining modern web apps this year.",
    content: `The landscape of web development has fundamentally transformed over the past year. We are seeing a massive shift towards hybrid architectures where AI copilots don't just suggest lines of code, but orchestrate entire component filesystems dynamically based on user context.

    ### Key Breakthroughs
    * **Edge-Native Frameworks:** Computational processes are moving entirely to regional edge runtimes, dropping initial page load times down to zero milliseconds.
    * **Semantic Theming:** Instead of maintaining hundreds of hardcoded color tokens, apps are tailoring layout constraints locally via browser semantic models.

    As we build forward, modern engineers must transition from syntax writers into platform architects. Understanding the underlying protocols of compilation and streaming state is no longer optional.`,
    category: "Tech",
    date: "July 2, 2026",
    readTime: "5 min read",
    author: {
      name: "Alex Rivera",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
    },
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS Grid & Flexbox",
    excerpt: "Stop guessing your layout classes. A visual guide to mastering complex grid structures and responsive alignments with zero custom CSS.",
    content: `Tailwind CSS has eliminated the need to jump between source code files just to debug a broken flexible column wrapper. However, relying purely on memory for layout values often results in 'utility class soup'.

    ### Grid vs Flexbox Rules of Thumb
    1. **Use Flexbox** when you need a content-driven, single-axis flow (e.g., standard navigation row elements, tag bars).
    2. **Use Grid** when you have a defined layout shape with strict row and column dimensions (e.g., dashboards, card decks).

    By implementing utilities like \`grid-cols-12\`, combined with flexible \`col-span\` break utilities, you unlock bulletproof responsiveness without media query hacks inside a stylesheet.`,
    category: "Design",
    date: "June 28, 2026",
    readTime: "4 min read",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
    },
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
    featured: false
  },
  {
    id: 3,
    title: "Why We Switched to Component-First Architecture",
    excerpt: "An honest breakdown of how migrating our codebase improved deployment speed by 40% and saved our team hours of debugging.",
    content: `Maintaining codebases that scale across multi-region technical teams requires rigid system boundaries. Our previous approach led to CSS leakage, duplicated utility trees, and visual regression bugs during core platform upgrades.

    Our transition to strict encapsulation changed everything. By isolating interactive pieces entirely into modular building blocks, testing and profiling isolated components became simple. Total build times dropped drastically because compilers can now aggressively cache unchanged modules with absolute confidence.`,
    category: "Engineering",
    date: "June 20, 2026",
    readTime: "8 min read",
    author: {
      name: "Marcus Johnson",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80"
    },
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    featured: false
  },
  {
    id: 4,
    title: "Designing for the Dark Mode Generation",
    excerpt: "Dark mode isn't just a toggle switch anymore. Learn how to contrast semantic colors and manage eye strain across devices.",
    content: `Dark typography layout design requires a different mental model than working with white backgrounds. Simply inverting contrast colors leaves interfaces feeling muddy or blindingly neon.

    When optimizing screens for low-light environments, it's essential to soften pure blacks (\`#000000\`) into deep charcoal blues or slates. This retains text readability while avoiding pixel bleeding on high-brightness displays.`,
    category: "Design",
    date: "June 15, 2026",
    readTime: "6 min read",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
    },
    image: "https://images.unsplash.com/photo-1541462608141-ad4979e408c9?auto=format&fit=crop&w=600&q=80",
    featured: false
  },
  {
    id: 5,
    title: "Optimizing Next-Gen Production Build Performance",
    excerpt: "A deep dive into tree shaking, dependency graph isolation, and aggressive module minification strategies.",
    content: `As codebases scale up, bundle sizes naturally grow. Unused helper functions or massive third-party packages sneak into runtime bundles, slowing down interaction speeds.

    By isolating imports, utilizing modern bundling tools, and writing strict static dependency trees, you can build extremely lightweight production packages that stay highly reactive on low-end mobile hardware.`,
    category: "Engineering",
    date: "June 10, 2026",
    readTime: "7 min read",
    author: {
      name: "Marcus Johnson",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80"
    },
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    featured: false
  },
  {
    id: 6,
    title: "The Practical Guide to Micro-Frontends",
    excerpt: "How to decouple large software applications across cross-functional product squads without losing operational cohesion.",
    content: `Micro-frontends break single app codebases down into independent web projects. Each development crew runs, updates, and deploys their feature slices independently from the core platform shell.

    This ensures engineering velocity remains incredibly fast even as corporate headcount grows. Teams are no longer held back by massive release bottlenecks or shared runtime dependencies.`,
    category: "Tech",
    date: "June 02, 2026",
    readTime: "11 min read",
    author: {
      name: "Alex Rivera",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
    },
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    featured: false
  }
];

const CATEGORIES = ["All", "Tech", "Design", "Engineering"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);
  const [email, setEmail] = useState("");

  const featuredPost = BLOG_POSTS.find(post => post.featured);
  const regularPosts = BLOG_POSTS.filter(post => !post.featured);
  
  const filteredPosts = activeCategory === "All" 
    ? regularPosts 
    : regularPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased font-sans">
      {/* Navigation Bar */}
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 mt-15">
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Perspectives & Insights</h1>
          <p className="mt-3 text-lg text-slate-500">The latest trends, workflows, and case studies from our engineering team.</p>
        </div>

        {/* Hero Article Card */}
        {featuredPost && activeCategory === "All" && (
          <section 
            onClick={() => setSelectedPost(featuredPost)}
            className="mb-16 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md lg:grid lg:grid-cols-12 cursor-pointer group"
          >
            <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto overflow-hidden">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.01]"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-5 lg:p-12">
              <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 w-fit">
                Featured · {featuredPost.category}
              </span>
              <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl group-hover:text-indigo-600 transition">
                {featuredPost.title}
              </h2>
              <p className="mt-4 text-slate-600 line-clamp-3">{featuredPost.excerpt}</p>
              
              <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
                <img className="h-10 w-10 rounded-full" src={featuredPost.author.avatar} alt={featuredPost.author.name} />
                <div>
                  <p className="text-sm font-semibold">{featuredPost.author.name}</p>
                  <p className="text-xs text-slate-400">{featuredPost.date} · {featuredPost.readTime}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Filters bar */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-5 mb-10">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Main Content Splitting */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Post Grid (Now with 6 available items) */}
          <div className="lg:col-span-8">
            {filteredPosts.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2">
                {filteredPosts.map((post) => (
                  <article 
                    key={post.id} 
                    onClick={() => setSelectedPost(post)}
                    className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md cursor-pointer"
                  >
                    <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" }}
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">{post.category}</span>
                      <h3 className="mt-2 text-xl font-bold leading-snug text-slate-900 group-hover:text-indigo-600 transition">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-sm text-slate-500 line-clamp-3 flex-1">{post.excerpt}</p>
                      
                      <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                        <img className="h-8 w-8 rounded-full" src={post.author.avatar} alt={post.author.name} />
                        <div>
                          <p className="text-xs font-semibold">{post.author.name}</p>
                          <p className="text-[11px] text-slate-400">{post.date} · {post.readTime}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 rounded-xl border-2 border-dashed border-slate-200 bg-white">
                <p className="text-slate-500">No posts found in this category.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">Stay in the loop</h3>
              <p className="mt-2 text-sm text-slate-500">Get the latest articles and code snippets delivered straight to your inbox every week.</p>
              <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); setEmail('') }} className="mt-4 space-y-2">
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100 transition"
                />
                <button type="submit" className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-700 transition">
                  Subscribe
                </button>
              </form>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
              <h3 className="text-lg font-bold">About DevJournal</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                We're a collective of software engineers, designers, and systems architects documentating our path to scaling web platforms.
              </p>
            </div>
          </aside>
        </div>
      </main>

      {/* FULLY FUNCTIONAL MODAL OVERLAY FOR READING POSTS */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-slate-900/60 backdrop-blur-sm transition-opacity">
          {/* Background overlay closer trigger */}
          <div className="absolute inset-0" onClick={() => setSelectedPost(null)} />
          
          {/* Sliding Reader panel */}
          <div className="relative h-full w-full max-w-2xl bg-white shadow-2xl flex flex-col overflow-y-auto animate-in slide-in-from-right duration-200">
            {/* Modal sticky close header */}
            <div className="sticky top-0 flex items-center justify-between border-b border-slate-100 bg-white/90 px-6 py-4 backdrop-blur">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded">
                {selectedPost.category}
              </span>
              <button 
                onClick={() => setSelectedPost(null)}
                className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
                aria-label="Close article"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Article Reading Space */}
            <div className="p-6 sm:p-8 md:p-10 flex-1">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title} 
                className="w-full h-64 md:h-80 object-cover rounded-xl shadow-inner mb-8"
              />
              
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl leading-tight">
                {selectedPost.title}
              </h1>

              {/* Author Badge */}
              <div className="mt-4 mb-8 flex items-center gap-3 border-b border-slate-100 pb-6">
                <img className="h-10 w-10 rounded-full" src={selectedPost.author.avatar} alt={selectedPost.author.name} />
                <div>
                  <p className="text-sm font-semibold text-slate-800">{selectedPost.author.name}</p>
                  <p className="text-xs text-slate-400">{selectedPost.date} · {selectedPost.readTime}</p>
                </div>
              </div>

              {/* Formatted body paragraph content */}
              <div className="prose prose-slate max-w-none text-slate-700 space-y-6 leading-relaxed whitespace-pre-line text-base">
                {selectedPost.content}
              </div>
            </div>
          </div>
        </div>
      )}

     <Footer />
    </div>
  );
}