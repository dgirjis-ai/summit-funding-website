import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works | Summit Fundings",
  description:
    "Get business funding in 4 simple steps. Apply online, get matched, choose your offer, get funded fast.",
};

const steps = [
  {
    num: "01",
    title: "Apply Online in Minutes",
    desc: "Fill out our simple application — it takes less than 5 minutes. No obligations, no hard credit pull, no impact to your credit score.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Get Matched",
    desc: "We shop your application across our network of 50+ lenders to find the best rates, terms, and options for your business.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Choose Your Best Offer",
    desc: "Review multiple funding options side-by-side. Compare rates, terms, and repayment structures. Pick what works for your business.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Get Funded Fast",
    desc: "Once you accept an offer, funds are deposited directly into your business account — in as little as 24 hours.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function HowItWorksPage() {
  return (
    <section className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <div className="bg-navy py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
            How It Works
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Funding in 4 Simple Steps
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Our streamlined process gets you from application to funded in as little as 24 hours. No red tape, no hassle.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="space-y-8">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="flex gap-6 md:gap-10 items-start bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-navy rounded-2xl flex items-center justify-center text-white">
                  {step.icon}
                </div>
              </div>
              <div>
                <span className="text-accent text-sm font-bold">Step {step.num}</span>
                <h3 className="text-xl md:text-2xl font-bold text-navy mt-1 mb-3">{step.title}</h3>
                <p className="text-steel leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-navy rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
          <p className="text-white/60 mb-6">The whole process takes just minutes. Apply now and see your options.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy font-bold rounded-xl hover:bg-gray-100 transition-all shadow-lg text-base"
            >
              Apply Now — It&apos;s Free
            </Link>
            <a
              href="tel:3137101063"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-base"
            >
              📞 (313) 710-1063
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
