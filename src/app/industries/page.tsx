import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries We Serve | Summit Fundings",
  description:
    "We fund businesses across all industries — restaurants, retail, trucking, construction, healthcare, and more.",
};

const industries = [
  { icon: "🍽️", name: "Restaurants", desc: "Keep the kitchen running with fast working capital" },
  { icon: "🛍️", name: "Retail", desc: "Stock inventory and scale your storefront" },
  { icon: "🛒", name: "E-Commerce", desc: "Fund ad spend, inventory, and growth" },
  { icon: "🚛", name: "Trucking & Transportation", desc: "Fleet expansion, fuel, and maintenance" },
  { icon: "🏗️", name: "Construction", desc: "Bridge funding between projects and payroll" },
  { icon: "🏥", name: "Healthcare & Medical", desc: "Equipment, staffing, and practice growth" },
  { icon: "💇", name: "Salons & Beauty", desc: "Renovations, equipment, and expansion" },
  { icon: "🏨", name: "Hospitality", desc: "Seasonal cash flow and property upgrades" },
  { icon: "💼", name: "Professional Services", desc: "Scale your team and operations" },
  { icon: "🔧", name: "Auto Repair", desc: "Equipment upgrades and shop expansion" },
  { icon: "🏋️", name: "Fitness & Gyms", desc: "New equipment, build-outs, and marketing" },
  { icon: "🏭", name: "Manufacturing", desc: "Raw materials, equipment, and scaling production" },
];

export default function IndustriesPage() {
  return (
    <section className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <div className="bg-navy py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
            Industries We Serve
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            We Fund Businesses Across All Industries
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            No matter your industry, our lender network has specialists who understand
            businesses like yours and can get you funded fast.
          </p>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="flex flex-col items-center text-center bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-navy/20 hover:shadow-lg group transition-all duration-300"
            >
              <span className="text-4xl md:text-5xl mb-3">{ind.icon}</span>
              <h3 className="text-sm md:text-base font-bold text-navy mb-1">{ind.name}</h3>
              <p className="text-steel text-xs leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-ice rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-navy mb-4">Don't See Your Industry?</h3>
          <p className="text-steel mb-6">We work with businesses across every sector. Apply and we'll find the right fit.</p>
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
