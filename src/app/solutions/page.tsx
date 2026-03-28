import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Funding Solutions | Summit Fundings",
  description:
    "Merchant cash advances, term loans, equipment financing, working capital, and more. Find the right funding for your business.",
};

const solutions = [
  {
    icon: "💰",
    title: "Merchant Cash Advances",
    desc: "Get a lump sum of capital and repay from a percentage of future sales. Fast approval, flexible repayment that adjusts with your revenue.",
    highlight: "Funded in 24hrs",
  },
  {
    icon: "📋",
    title: "Term Loans",
    desc: "Fixed monthly payments on a predictable schedule. Terms from 3 to 60 months with competitive rates.",
    highlight: "3–60 month terms",
  },
  {
    icon: "🏗️",
    title: "Equipment Financing",
    desc: "Fund equipment purchases without draining cash reserves. The equipment itself serves as collateral — no additional assets required.",
    highlight: "Equipment = collateral",
  },
  {
    icon: "📈",
    title: "Working Capital",
    desc: "Short-term cash flow solutions for payroll, inventory, marketing, and day-to-day operations. Keep your business running smoothly.",
    highlight: "Flexible use",
  },
  {
    icon: "🔄",
    title: "Revenue-Based Financing",
    desc: "Payments flex with your revenue — pay more when business is good, less when it's slow. No fixed payment stress.",
    highlight: "Payments flex with revenue",
  },
  {
    icon: "⚡",
    title: "Same-Day Funding",
    desc: "When you can't wait. Our expedited funding options can put money in your account as fast as the same business day.",
    highlight: "As fast as same day",
  },
];

export default function SolutionsPage() {
  return (
    <section className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <div className="bg-navy py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
            Funding Solutions
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Flexible Funding for Every Need
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            From merchant cash advances to equipment financing, we match your
            business with the right type of capital. Multiple options, one simple application.
          </p>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-navy/20 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <span className="text-4xl mb-4 block">{s.icon}</span>
              <h3 className="text-lg font-bold text-navy mb-2">{s.title}</h3>
              <span className="inline-block text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full mb-3 w-fit">
                {s.highlight}
              </span>
              <p className="text-steel text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
              <Link
                href="/apply"
                className="text-navy font-semibold text-sm hover:text-accent transition-colors inline-flex items-center gap-1"
              >
                Apply Now →
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-ice rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-navy mb-4">Not Sure Which Option Is Right?</h3>
          <p className="text-steel mb-6">Apply once and we'll match you with the best solution for your business.</p>
          <Link
            href="/apply"
            className="inline-flex items-center px-8 py-4 bg-navy text-white font-bold rounded-xl hover:bg-navy-light transition-all shadow-lg text-base"
          >
            Get Matched Now
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
