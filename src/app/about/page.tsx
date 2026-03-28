import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Summit Fundings",
  description:
    "Summit Fundings is a business funding broker connecting small and mid-sized businesses with the right capital from our network of 50+ lenders.",
};

const stats = [
  { value: "24hr", label: "Approvals" },
  { value: "50+", label: "Lender Partners" },
  { value: "$5K–$5M", label: "Funding Range" },
  { value: "All Credit", label: "Types Welcome" },
];

export default function AboutPage() {
  return (
    <section className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <div className="bg-navy py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
            About Us
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Your Partner in Business Funding
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            We connect small and mid-sized businesses with the capital they need to grow — fast.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100"
            >
              <p className="text-2xl sm:text-3xl font-bold text-navy">{stat.value}</p>
              <p className="text-steel text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">We Work for You, Not the Lenders</h2>
            <p className="text-steel text-lg leading-relaxed">
              Summit Fundings is a business funding <strong>broker</strong> — not a direct lender.
              That means we shop your application across our extensive network of funding partners
              to find the best rates, terms, and options for your unique situation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">Why Businesses Choose Us</h2>
            <ul className="space-y-3">
              {[
                "Speed — Most applications get a response within 24 hours",
                "Options — We compare offers from 50+ lenders so you don't have to",
                "Personalized Service — A dedicated funding specialist guides you through the process",
                "No Obligation — Apply for free, review your options, decide on your terms",
                "All Credit Welcome — Bad credit, limited history, startups — we work with everyone",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-steel">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">Simple Process, Real Results</h2>
            <p className="text-steel text-lg leading-relaxed">
              We've streamlined business funding into a fast, transparent process.
              Apply in minutes, get matched with the right lenders, and choose the offer
              that works for your business. No hidden fees, no games.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-ice rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-navy mb-4">Ready to Get Funded?</h3>
          <p className="text-steel mb-6">Apply in minutes. No obligation, no hard credit pull.</p>
          <Link
            href="/apply"
            className="inline-flex items-center px-8 py-4 bg-navy text-white font-bold rounded-xl hover:bg-navy-light transition-all shadow-lg text-base"
          >
            Apply Now
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
