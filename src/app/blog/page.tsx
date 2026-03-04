import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Car Inspection Blog & Guides | Al Medina Motors Manchester",
  description:
    "Expert car inspection guides, buying tips, and used car advice for Manchester drivers. From pre-purchase inspections to common car faults — read our blog.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Car Inspection Blog | Al Medina Motors Manchester",
    description:
      "Expert advice on car inspections, used car buying, and vehicle checks in Manchester.",
  },
};

const posts = [
  {
    slug: "how-to-choose-car-inspection-manchester",
    title: "How to Choose the Right Car Inspection Service in Manchester",
    excerpt:
      "Not all car inspection services are equal. Here's what to look for when choosing an independent vehicle inspection garage in Manchester — and the questions you should always ask.",
    date: "2025-10-14",
    readTime: "6 min read",
    category: "Buying Advice",
  },
  {
    slug: "common-car-problems-pre-purchase-inspection",
    title: "Common Car Problems Found During Pre-Purchase Inspections",
    excerpt:
      "Our mechanics have inspected thousands of used cars across Greater Manchester. Here are the most common — and most costly — faults we find during pre-purchase inspections.",
    date: "2025-11-03",
    readTime: "8 min read",
    category: "Inspection Insights",
  },
  {
    slug: "what-to-look-for-buying-used-car-manchester",
    title: "What to Look for When Buying a Used Car in Manchester",
    excerpt:
      "Buying a used car in Manchester? This complete guide covers everything you need to check — from test drives to finance checks — before you hand over your money.",
    date: "2025-12-01",
    readTime: "10 min read",
    category: "Buying Guide",
  },
];

export default function BlogPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-900 text-white px-4 pt-14 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-4">
            Blog &amp; Guides
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
            Car Inspection{" "}
            <span className="text-red-500">Advice &amp; Guides</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Expert advice from the Al Medina Motors team — helping Manchester
            drivers make smarter, safer used-car purchases.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-white px-4 py-14">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="border border-slate-200 rounded-2xl p-6 hover:border-red-200 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-red-50 text-red-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <time
                    dateTime={post.date}
                    className="text-slate-400 text-xs"
                  >
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <span className="text-slate-400 text-xs">·</span>
                  <span className="text-slate-400 text-xs">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-red-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-red-600 hover:text-red-700 font-semibold text-sm"
                >
                  Read article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white px-4 py-12 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">
            Ready to Book an Inspection?
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            Independent car inspection in Manchester — 313/317 Oldham Road M40 7PS
          </p>
          <a
            href="tel:+441612020033"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            0161 202 0033
          </a>
        </div>
      </section>
    </main>
  );
}
